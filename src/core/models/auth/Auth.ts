/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { makeNumId } from '../../lib/nanoid.tools'
import type { IBase } from '../base/Base'
import type User from '../user/User'

export interface IAuth extends IBase {
    token: string | null
    user: User | null
}

/**
 * Класс для описывающий модель аутентификации
 */
export default class Auth implements IAuth {
    id: number
    token: string | null
    user: User | null

    constructor(obj?: Omit<IAuth, 'id'>) {
        this.id = makeNumId()

        if (obj) {
            this.token = obj.token
            this.user = obj.user
        } else {
            this.token = null
            this.user = null
        }
    }
}
