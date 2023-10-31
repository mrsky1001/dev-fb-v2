/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../base/Base'
import type { IUserType } from '../userType/UserType'
import UserType from '../userType/UserType'
import { makeNumId } from '../../lib/nanoid.tools'

export interface IUser extends IBase {
    /**
     * ФИО
     */
    name: string
    /**
     * Логин
     */
    login: string
    /**
     * Электронный адрес
     */
    email: string
    /**
     * Тип пользователя
     */
    type: IUserType
    /**
     * Аватар пользователя
     */
    avatar?: string
}

/**
 * Класс описывающий сущность пользователя
 */
export default class User implements IUser {
    id: number
    name: string
    login: string
    email: string
    type: IUserType
    avatar: string

    constructor(obj?: IUser) {
        if (obj) {
            this.id = obj.id
            this.email = obj.email
            this.login = obj.login
            this.name = obj.name
            this.type = new UserType(obj.type)
            this.avatar = obj.avatar ?? '/imgs/user/avatar.svg'
        } else {
            this.id = makeNumId()
            this.email = ''
            this.login = ''
            this.name = ''
            this.type = new UserType()
            this.avatar = '/imgs/user/avatar.svg'
        }
    }
}
