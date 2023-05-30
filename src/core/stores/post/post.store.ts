import { writable } from 'svelte/store'
import Post, { type IPost } from './post'
import _baseStore, { type WrapperProps } from '../_base.store'

export type IPostStore = WrapperProps<IPost>

export const createPostStore = (s: IPost): IPostStore => {
    const store = writable<IPost>(new Post(s))

    return _baseStore(store, ({ init, self }) => ({
        init,
        self
    }))
}
