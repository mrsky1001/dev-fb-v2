import { get, type Unsubscriber, writable } from 'svelte/store'
import { createRoleStore, type IRoleStore } from './role.store'
import type { IRole } from './role'

export interface IAllRoleStore {
    add(s: IRoleStore): void

    getStore(post: IRole): IRoleStore

    set(posts: IRole[]): void

    all(): IRole[]

    allStores(): IRoleStore[]

    subscribe(v: any): Unsubscriber
}

export const createAllRoleStore = () => {
    const stores = writable<IRoleStore[]>([])

    return {
        getStore: (data: IRole) => {
            return get(stores).find((s) => s.self().id === data.id)
        },
        add: (s: IRoleStore) => {
            stores.update((old) => [...old, s])
        },
        set: (arr: IRole[]) => {
            stores.set(arr.map((data) => createRoleStore(data)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllRoleStore
}
