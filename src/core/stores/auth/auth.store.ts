/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import _baseStore, { type WrapperProps } from '../_base.store'
import { writable } from 'svelte/store'
import Auth, { type IAuth } from '../../models/auth/Auth'
import type { TRegistrationResult } from '../../models/types'
import { getPropFromLS, setPropToLS } from '../../lib/local-storage.lib'
import type { IUser } from '../../models/user/User'
import User from '../../models/user/User'

export interface IAuthStore extends WrapperProps<IAuth> {
    initFromLS(): void
    saveUser(rawData: IUser): void
    updateLoginData(rawData: TRegistrationResult): void
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

                console.log(token)
                console.log(user)
                s.token = token
                s.user = new User(user)

                return s
            })
        },
        updateLoginData(rawData: TRegistrationResult) {
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
