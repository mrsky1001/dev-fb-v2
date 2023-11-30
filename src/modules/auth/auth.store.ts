/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import _baseStore, { type WrapperProps } from '../../core/stores/_base.store'
import { writable } from 'svelte/store'
import Auth, { type IAuth } from './auth.class'
import { getPropFromLS, setPropToLS } from '../../core/lib/local-storage.lib'
import type { IUser } from '../user/user.class'
import User from '../user/user.class'

export interface IAuthStore extends WrapperProps<IAuth> {
    initFromLS(): void
    saveUser(rawData: IUser): void
    updateLoginData(rawData: IAuth): void
}

export const createAuthStore = (rawData: IAuth): IAuthStore => {
    const store = writable<IAuth>(new Auth(rawData))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        self,
        subscribe,
        updateByField,
        initFromLS() {
            store.update((s) => {
                const token = getPropFromLS('auth.token')
                const user = getPropFromLS('auth.user')

                s.isInitialised = true
                s.token = token
                s.user = new User(user)

                return s
            })
        },
        updateLoginData(rawData: Auth) {
            store.update((s) => {
                s.token = rawData.token
                s.user = new User(rawData.user)

                setPropToLS('auth.token', s.token)
                setPropToLS('auth.user', s.user)

                return s
            })
        },
        saveUser(rawData: IUser) {
            store.update((s) => {
                s.user = new User(rawData)
                return s
            })
        }
    }))
}
