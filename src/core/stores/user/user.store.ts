import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IUser } from './user'
import User from './user'

export type IUserStore = WrapperProps<IUser>

/**
 * Функция создания store для типа данных User
 * @param {IUser} s
 * @returns {IUserStore}
 */
export function createUserStore(s?: IUser): IUserStore {
    const store = writable<IUser>(new User(s))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        updateByField,
        self
    }))
}
