import type { IDomainStore } from './domain.store'
import { get, type Unsubscriber, writable } from 'svelte/store'
import { createDomainStore } from './domain.store'
import type { IDomain } from './domain'

export interface IAllDomainStore {
    getStore(domain: IDomain): IDomainStore

    set(domains: IDomain[]): void

    all(): IDomain[]

    allStores(): IDomainStore[]

    subscribe(v: any): Unsubscriber
}

export const createAllDomainStore = () => {
    const stores = writable<IDomainStore[]>([])

    return {
        getStore: (domain: IDomain) => {
            return get(stores).find((s) => s.self().id === domain.id)
        },
        set: (domains: IDomain[]) => {
            stores.set(domains.map((s) => createDomainStore(s)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllDomainStore
}
