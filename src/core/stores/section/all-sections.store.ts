import type { ISectionStore } from './section.store'
import type { ISection, ISectionProps } from './section'
import { writable } from 'svelte/store'
import { createSectionStore } from './section.store'
import type { WrapperPropsForList } from '../_base.store'
import { _baseStoreForList } from '../_base.store'

export interface IAllSectionStore extends WrapperPropsForList<ISection, ISectionStore> {
    getActive(): ISection | undefined

    getActiveStore(): ISectionStore | undefined

    init(rawSections: ISectionProps[]): void

    resetActiveMark(): void
}

/**
 * Функция создания store для списка типа данных Section
 * @param {ISectionProps []} rawSections
 * @returns {IAllSectionStore}
 */

export function createAllSectionStore(rawSections: ISectionProps[]): IAllSectionStore {
    const stores = writable<ISectionStore[]>(rawSections.map((s) => createSectionStore(s)))

    // const loadPosts = ()=>{
    //
    // }
    // const activeSection = stores
    //   if (.find((s) => s.isActive)) {
    //     stores
    //   }

    return _baseStoreForList<ISection, ISectionStore, IAllSectionStore>(stores, ({ set, add, all, getStore, getStoreByField, allStores }) => {
        const activeSectionStore = getStoreByField('isActive', true)

        if (activeSectionStore) {
            activeSectionStore.loadPosts()
        }

        return {
            ...stores,
            set,
            add,
            all,
            getStore,
            allStores,
            getStoreByField,

            getActive: () => all()?.find((s) => s.isActive),

            getActiveStore: () => allStores()?.find((s) => s.self().isActive),

            init: (rawSections: ISectionProps[]) => {
                stores.set(rawSections.map((s) => createSectionStore(s)))
            },

            resetActiveMark: () =>
                stores.update((all) =>
                    all.map((s) => {
                        s.self().isActive = false
                        return s
                    })
                )
        }
    })
}

//
// export const allSectionsStore = createAllSectionStore()
