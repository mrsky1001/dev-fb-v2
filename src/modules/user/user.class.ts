/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../../../../orders-klimov-red/src/core/models/base/Base'
import type { IUserType } from '../userType/userType.class'
import UserType from '../userType/userType.class'
import { makeNumId } from '../../core/lib/nanoid.tools'

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
    avatarPath?: string
}

export type IUserForCreate = Omit<IUser, 'id' | 'type'> & {
    typeId: number
    password: string
}

export type IUserForUpdate = Omit<IUser, 'type'> & {
    typeId: number
    password: string
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
    avatarPath: string

    constructor(obj?: IUser | null) {
        if (obj) {
            this.id = Number(obj.id) ?? makeNumId()
            this.email = obj.email
            this.login = obj.login
            this.name = obj.name
            this.type = new UserType(obj.type)
            this.avatarPath = obj.avatarPath?.length ? obj.avatarPath : '/imgs/user/avatar.svg'
        } else {
            this.id = makeNumId()
            this.email = ''
            this.login = ''
            this.name = ''
            this.type = new UserType()
            this.avatarPath = '/imgs/user/avatar.svg'
        }
    }
}
