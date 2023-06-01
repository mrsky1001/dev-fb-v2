import type { WrapperProps } from '../_base.store'
import { writable } from 'svelte/store'
import _baseStore from '../_base.store'
import Comment, { type IComment } from './comment'

export type ICommentStore = WrapperProps<IComment>

export const createCommentStore = (s?: IComment): ICommentStore => {
    const store = writable<IComment>(new Comment(s))

    return _baseStore(store, ({ init, subscribe, self }) => ({
        init,
        subscribe,
        self
    }))
}
