/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { writable } from 'svelte/store'
import Post, { type IPost } from './post'
import _baseStore, { type WrapperProps } from '../../../core/stores/_base.store'

export type IPostStore = WrapperProps<IPost>

/**
 * Функция создания store для типа данных Post
 * @param {IPost} rawPost
 * @returns {IPostStore}
 */
export function createPostStore(rawPost: IPost): IPostStore {
    const store = writable<IPost>(new Post(rawPost))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        self,
        updateByField
    }))
}
