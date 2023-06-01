import { get, writable } from 'svelte/store'
import type { ISection, ISectionProps } from './section'
import Section from './section'
import _baseStore, { type WrapperProps } from '../_base.store'
import { globalStore } from '../global.store'
import Post from '../post/post'
import { getPosts } from '../../server/services/post.services'

export interface ISectionStore extends WrapperProps<ISection> {
    setActive(val: boolean): void

    loadPosts(): Promise<Post[]>
}

export const createSectionStore = (s: ISectionProps): ISectionStore => {
    const store = writable<ISection>(new Section(s))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        self,
        updateByField,
        setActive: (val: boolean): void => {
            // const section = get(store)

            globalStore.self().allSectionsStore.resetActiveMark()

            store.update((s) => {
                s.isActive = val
                return s
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
        //         store.update((s) => {
        //             s.isActive = val
        //             s.setPosts(posts)
        //             return s
        //         })
        //     })
        // }
    }))
}
