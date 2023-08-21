/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import roles from '../../server/collections/roles'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import { nanoid } from 'nanoid'

/**
 * Интерфейс класса пользователя
 */
export interface IUser extends IBase {
    /**
     * логин
     */
    username: string
    /**
     * Пароль
     */
    password: string
    /**
     * Роль
     */
    role: number
    /**
     * Токен
     */
    token: string
    /**
     * E-Mail
     */
    email: string
    /**
     * Аватар
     */
    avatar: string
    lastRecaptchaDate: Date
    lastLoginDate: Date
    registrationDate: Date
    isAuthorized: boolean
}

/**
 * Интерфейс класса пользователя
 */
export default class User implements IUser {
    readonly id
    readonly role: number
    readonly token
    readonly email
    readonly password
    readonly avatar
    readonly username
    readonly lastRecaptchaDate
    readonly lastLoginDate
    readonly registrationDate
    readonly isAuthorized

    constructor(obj?: IUser) {
        if (obj) {
            this.id = setId(obj)
            this.username = obj.username
            this.password = obj.password
            this.role = obj.role
            this.token = obj.token
            this.email = obj.email
            this.avatar = obj.avatar
            this.lastRecaptchaDate = obj.lastRecaptchaDate
            this.lastLoginDate = obj.lastLoginDate
            this.registrationDate = obj.registrationDate
            this.isAuthorized = obj.isAuthorized
        } else {
            this.id = nanoid()
            this.username = 'empty'
            this.password = ''
            this.role = roles.UNAUTHORIZED.value
            this.token = ''
            this.email = ''
            this.avatar = ''
            this.lastRecaptchaDate = new Date()
            this.lastLoginDate = new Date()
            this.registrationDate = new Date()
            this.isAuthorized = false
        }
    }
}
