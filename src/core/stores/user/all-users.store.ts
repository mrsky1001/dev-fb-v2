import { get, type Unsubscriber, writable } from 'svelte/store'
import type { IUserStore } from './user.store'
import type { IUser } from './user'
import { createUserStore } from './user.store'

export interface IAllUserStore {
    add(s: IUserStore): void

    getStore(post: IUser): IUserStore

    set(posts: IUser[]): void

    all(): IUser[]

    allStores(): IUserStore[]

    subscribe(v: any): Unsubscriber
}

export const createAllUserStore = () => {
    const stores = writable<IUserStore[]>([])

    return {
        getStore: (data: IUser) => {
            return get(stores).find((s) => s.self().id === data.id)
        },
        add: (s: IUserStore) => {
            stores.update((old) => [...old, s])
        },
        set: (arr: IUser[]) => {
            stores.set(arr.map((data) => createUserStore(data)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllUserStore
}
