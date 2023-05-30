import { _baseStoreForList, type WrapperPropsForList } from '../_base.store'
import { createDomainStore, type IDomainStore } from './domain.store'
import { writable } from 'svelte/types/runtime/store'
import type { IDomain } from './domain'

export interface IAllDomainStore extends WrapperPropsForList<IDomain, IDomainStore> {
    getActive(): IDomain | undefined

    setRawData(rawDomains: IDomain[]): void

    resetActiveMark(): void
}

export const createAllDomainStore = (rawDomains: IDomain[]): IAllDomainStore => {
    const stores = writable<IDomainStore[]>(rawDomains.map((s) => createDomainStore(s)))

    return _baseStoreForList<IDomain, IDomainStore, IAllDomainStore>(
        stores,
        ({ init, add, all, getStore, allStores }) => ({
            ...stores,
            init,
            add,
            all,
            getStore,
            allStores,

            getActive: () => all()?.find((s) => s.isActive),

            setRawData: (rawDomains: IDomain[]) => {
                stores.set(rawDomains.map((s) => createDomainStore(s)))
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
