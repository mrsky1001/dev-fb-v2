import { get, writable } from 'svelte/store'
import type { ISection, ISectionProps } from './section'
import Section from './section'
import _baseStore, { type WrapperProps } from '../_base.store'
import { globalStore } from '../global.store'
import Post from '../post/post'
import { getPostByTitle, getPosts } from '../../server/services/post.services'
import type { IPostStore } from '../post/post.store'

export interface ISectionStore extends WrapperProps<ISection> {
    setActive(val: boolean): void

    loadActivePost(activePostUrlTitle: string): Promise<IPostStore | undefined>

    loadPosts(activePostUrlTitle?: string): Promise<Post[]>
}

/**
 * Функция создания store для типа данных Section
 * @param {ISectionProps} rawSectionProps
 * @returns {ISectionStore}
 */
export function createSectionStore(rawSectionProps: ISectionProps): ISectionStore {
    const store = writable<ISection>(new Section(rawSectionProps))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        self,
        updateByField,
        setActive: (val: boolean): void => {
            // const section = get(store)

            globalStore.self().allSectionStore.resetActiveMark()

            store.update((s) => {
                s.isActive = val
                return s
            })
        },
        loadActivePost: async (activePostUrlTitle: string): Promise<IPostStore | undefined> => {
            return new Promise((resolve, reject) => {
                getPostByTitle(activePostUrlTitle)
                    .then((rawPost) => {
                        const post = new Post(rawPost)
                        post.setActive()

                        store.update((s) => {
                            s.allPostStore.init([post])
                            resolve(s.allPostStore.getActiveStore())
                            return s
                        })
                    })
                    .catch(reject)
            })
        },
        loadPosts: async (): Promise<Post[]> => {
            return new Promise((resolve, reject) => {
                const section = get(store)

                getPosts(section.domain, section.id)
                    .then((rawPosts) => {
                        const posts = rawPosts.map((p) => new Post(p))

                        store.update((s) => {
                            s.allPostStore.init(posts)
                            return s
                        })
                        resolve(posts)
                    })
                    .catch(reject)
            })
        }
        // setActive: async (val: boolean) => {
        //     const section = get(store)
        //
        //     allSectionsStore.resetActiveMark()
        //
        //     getPosts(section.id, new Date()).then((posts) => {
        //         store.update((rawSectionProps) => {
        //             rawSectionProps.isActive = val
        //             rawSectionProps.setPosts(posts)
        //             return rawSectionProps
        //         })
        //     })
        // }
    }))
}
