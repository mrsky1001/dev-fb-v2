import type { WrapperProps } from '../_base.store'
import { writable } from 'svelte/store'
import _baseStore from '../_base.store'
import Comment, { type IComment } from './comment'

export type ICommentStore = WrapperProps<IComment>

/**
 * Функция создания store для списка типа данных Comment
 * @param {IComment} rawComment
 * @returns {ICommentStore}
 */
export function createCommentStore(rawComment?: IComment): ICommentStore {
    const store = writable<IComment>(new Comment(rawComment))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        updateByField,
        self
    }))
}
