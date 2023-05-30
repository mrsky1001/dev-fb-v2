import { get, writable } from 'svelte/store'
import type { ISection, ISectionProps } from './section'
import Section from './section'
import _baseStore, { type WrapperProps } from '../_base.store'
import { globalStore } from '../global.store'

export interface ISectionStore extends WrapperProps<ISection> {
    setActive(val: boolean): void
}

export const createSectionStore = (s: ISectionProps): ISectionStore => {
    const store = writable<ISection>(new Section(s))

    return _baseStore(store, ({ init, self }) => ({
        init,
        self,
        setActive: (val: boolean): void => {
            // const section = get(store)

            globalStore.self().allSectionsStore.resetActiveMark()

            store.update((s) => {
                s.isActive = val
                return s
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
