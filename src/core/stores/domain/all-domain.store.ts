import { _baseStoreForList, type WrapperPropsForList } from '../_base.store'
import { createDomainStore, type IDomainStore } from './domain.store'

import type { IDomain } from './domain'
import { writable } from 'svelte/store'

export interface IAllDomainStore extends WrapperPropsForList<IDomain, IDomainStore> {
    getActive(): IDomain | undefined

    getActiveStore(): IDomainStore | undefined

    resetActiveMark(): void
}

/**
 * Функция создания store для списка типа данных Domain
 * @returns {IAllDomainStore}
 */
export function createAllDomainStore(rawDomains: IDomain[]): IAllDomainStore {
    const stores = writable<IDomainStore[]>(rawDomains.map((s) => createDomainStore(s)))

    return _baseStoreForList<IDomain, IDomainStore, IAllDomainStore>(stores, ({ set, add, all, getStore, getStoreByField, allStores }) => {
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
