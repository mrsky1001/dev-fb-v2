/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import roles from '../../collections/roles'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'

export interface IUser extends IBase {
    role: number
    token: string
    email: string
    password: string
    avatar: string
    username: string
    lastRecaptchaDate: Date
    lastLoginDate: Date
    registrationDate: Date
    isAuthorized: boolean
}

export default class User implements IUser {
    id = ''
    role: number = roles.UNAUTHORIZED.value
    token = ''
    email = ''
    password = ''
    avatar = ''
    username = ''
    lastRecaptchaDate = new Date()
    lastLoginDate = new Date()
    registrationDate = new Date()
    isAuthorized = false

    constructor(initObj?: IUser) {
        if (initObj) {
            this.init(initObj)
        } else {
            this.emptyInit()
        }
    }

    emptyInit() {
        this.id = ''
        this.username = ''
        this.role = roles.UNAUTHORIZED.value
        this.token = ''
        this.email = ''
        this.avatar = ''
        this.lastRecaptchaDate = new Date()
        this.lastLoginDate = new Date()
        this.registrationDate = new Date()
        this.isAuthorized = false
    }

    init(obj: IUser): void {
        this.id = setId(obj)
        this.username = obj.username ?? this.username
        this.role = obj.role ?? this.role
        this.token = obj.token ?? this.token
        this.email = obj.email ?? this.email
        this.avatar = obj.avatar ?? this.avatar
        this.lastRecaptchaDate = obj.lastRecaptchaDate ?? this.lastRecaptchaDate
        this.lastLoginDate = obj.lastLoginDate ?? this.lastLoginDate
        this.registrationDate = obj.registrationDate ?? this.registrationDate
        this.isAuthorized = obj.isAuthorized ?? this.isAuthorized
    }
}
