import type { ISectionStore } from './section.store'
import type { ISection, ISectionProps } from './section'
import { writable } from 'svelte/store'
import { createSectionStore } from './section.store'
import type { WrapperPropsForList } from '../_base.store'
import { _baseStoreForList } from '../_base.store'

export interface IAllSectionStore extends WrapperPropsForList<ISection, ISectionStore> {
    getActive(): ISection | undefined

    setLikeStores(rawSections: ISectionProps[]): void

    resetActiveMark(): void
}

const createAllSectionStore = (): IAllSectionStore => {
    const stores = writable<ISectionStore[]>([])

    return _baseStoreForList<ISection, ISectionStore, IAllSectionStore>(
        stores,
        ({ init, add, all, getStore, allStores }) => ({
            ...stores,
            init,
            add,
            all,
            getStore,
            allStores,

            getActive: () => all()?.find((s) => s.isActive),

            setLikeStores: (rawSections: ISectionProps[]) => {
                stores.set(rawSections.map((s) => createSectionStore(s)))
            },

            resetActiveMark: () =>
                stores.update((all) =>
                    all.map((s) => {
                        s.self().isActive = false
                        return s
                    })
                )
        })
    )
}

export const allSectionsStore = createAllSectionStore()
