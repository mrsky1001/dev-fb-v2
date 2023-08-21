import { get, type Unsubscriber, writable } from 'svelte/store'
import { createCommentStore, type ICommentStore } from './comment.store'
import type { IComment } from './comment'

export interface IAllCommentStore {
    add(s: ICommentStore): void

    getStore(post: IComment): ICommentStore

    init(posts: IComment[]): void

    all(): IComment[]

    allStores(): ICommentStore[]

    subscribe(v: any): Unsubscriber
}

/**
 * Функция создания store для списка типа данных Comment
 * @returns {IAllCommentStore}
 */
export function createAllCommentStore(): IAllCommentStore {
    const stores = writable<ICommentStore[]>([])

    return {
        getStore: (data: IComment) => {
            return get(stores).find((s) => s.self().id === data.id)
        },
        add: (s: ICommentStore) => {
            stores.update((old) => [...old, s])
        },
        init: (arr: IComment[]) => {
            stores.set(arr.map((data) => createCommentStore(data)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllCommentStore
}
