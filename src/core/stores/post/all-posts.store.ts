import type { IPost } from './post'
import { get, type Unsubscriber, writable } from 'svelte/store'
import type { IPostStore } from './post.store'
import { createPostStore } from './post.store'

export interface IAllPostStore {
    add(s: IPostStore): void

    getStore(post: IPost): IPostStore

    init(posts: IPost[]): void

    all(): IPost[]

    allStores(): IPostStore[]

    subscribe(v: any): Unsubscriber
}

export const createAllPostStore = () => {
    const stores = writable<IPostStore[]>([])

    return {
        getStore: (data: IPost) => {
            return get(stores).find((s) => s.self().id === data.id)
        },
        add: (s: IPostStore) => {
            stores.update((old) => [...old, s])
        },
        init: (arr: IPost[]) => {
            stores.set(arr.map((data) => createPostStore(data)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllPostStore
}
