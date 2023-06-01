import { _baseStoreForList, type WrapperPropsForList } from '../_base.store'
import { createDomainStore, type IDomainStore } from './domain.store'

import type { IDomain } from './domain'
import { writable } from 'svelte/store'

export interface IAllDomainStore extends WrapperPropsForList<IDomain, IDomainStore> {
    getActive(): IDomain | undefined

    init(rawDomains: IDomain[]): void

    resetActiveMark(): void
}

export const createAllDomainStore = (rawDomains: IDomain[]): IAllDomainStore => {
    const stores = writable<IDomainStore[]>(rawDomains.map((s) => createDomainStore(s)))

    return _baseStoreForList<IDomain, IDomainStore, IAllDomainStore>(
        stores,
        ({ set, add, all, getStore, getStoreByField, allStores }) => ({
            ...stores,
            set,
            add,
            all,
            getStore,
            getStoreByField,
            allStores,

            getActive: () => all()?.find((s) => s.isActive),

            init: (rawDomains: IDomain[]) => {
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
