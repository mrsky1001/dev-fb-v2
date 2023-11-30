/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { get, type Unsubscriber, writable } from 'svelte/store'
import type { IUserStore } from '../user.store'
import { createUserStore } from '../user.store'
import type { IUser } from './user'

export interface IAllUserStore {
    add(s: IUserStore): void

    getStore(post: IUser): IUserStore

    init(posts: IUser[]): void

    all(): IUser[]

    allStores(): IUserStore[]

    subscribe(v: any): Unsubscriber
}

/**
 * Функция создания store для списка типа данных User
 * @returns {IAllUserStore}
 */
export function createAllUserStore(): IAllUserStore {
    const stores = writable<IUserStore[]>([])

    return {
        init(arr: IUser[]) {
            stores.set(arr.map((data) => createUserStore(data)))
        },

        getStore(data: IUser) {
            return get(stores).find((s) => s.self().id === data.id)
        },
        allStores() {
            get(stores)
        },
        all() {
            get(stores).map((s) => s.self())
        },
        add(s: IUserStore) {
            stores.update((old) => [...old, s])
        },
        subscribe: stores.subscribe
    } as IAllUserStore
}
