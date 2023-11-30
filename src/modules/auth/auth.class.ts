/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { makeNumId } from '../../core/lib/nanoid.tools'
import type { IBase } from '../../../../orders-klimov-red/src/core/models/base/Base'
import User from '../user/user.class'

export interface IAuth extends IBase {
    isInitialised?: boolean
    token: string | null
    user: User | null
}

/**
 * Класс для описывающий модель аутентификации
 */
export default class Auth implements IAuth {
    id: number
    token: string | null
    isInitialised: boolean
    user: User | null

    constructor(obj?: IAuth) {
        this.id = makeNumId()

        if (obj) {
            this.token = obj.token
            this.user = new User(obj.user)
        } else {
            this.token = null
            this.user = null
        }

        this.isInitialised = false
    }
}
