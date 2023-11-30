/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IPost } from '../post'
import { writable } from 'svelte/store'
import type { IPostStore } from '../post.store'
import { createPostStore } from '../post.store'
import type { WrapperPropsForList } from '../../../../core/stores/_base.store'
import { _baseStoreForList } from '../../../../core/stores/_base.store'

export interface IAllPostStore extends WrapperPropsForList<IPost, IPostStore> {
    getActive(): IPost | undefined
    getActiveStore(): IPostStore | undefined

    init(posts: IPost[]): void
}

/**
 * Функция создания store для списка типа данных Post
 * @returns {IAllPostStore}
 */
export function createAllPostStore() {
    const stores = writable<IPostStore[]>([])

    return _baseStoreForList<IPost, IPostStore, IAllPostStore>(stores, ({ set, add, all, getStore, getStoreByField, allStores }) => ({
        ...stores,
        set,
        add,
        all,
        getStore,
        allStores,
        getStoreByField,

        getActive: () => all()?.find((s) => s.isActive),

        getActiveStore: () => allStores()?.find((s) => s.self().isActive),

        init: (arr: IPost[]) => {
            stores.set(arr.map((data) => createPostStore(data)))
        }
    }))
}
