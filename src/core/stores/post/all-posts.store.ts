import type { IPost } from './post'
import { writable } from 'svelte/store'
import type { IPostStore } from './post.store'
import { createPostStore } from './post.store'
import type { WrapperPropsForList } from '../_base.store'
import { _baseStoreForList } from '../_base.store'

export interface IAllPostStore extends WrapperPropsForList<IPost, IPostStore> {
    getActive(): IPost | undefined
    getActiveStore(): IPostStore | undefined

    init(posts: IPost[]): void
}

export const createAllPostStore = () => {
    const stores = writable<IPostStore[]>([])

    return _baseStoreForList<IPost, IPostStore, IAllPostStore>(
        stores,
        ({ set, add, all, getStore, getStoreByField, allStores }) => ({
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
        })
    )
}
