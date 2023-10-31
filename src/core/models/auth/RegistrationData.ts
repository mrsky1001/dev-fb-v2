/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import UserType from '../userType/UserType'

export interface IRegistrationData {
    name: string
    login: string
    password: string
    email: string
    type: UserType
    avatar?: string
}

/**
 * Модель для данных при регистрации
 */
export class RegistrationData implements IRegistrationData {
    name: string
    login: string
    password: string
    email: string
    type: UserType
    avatar?: string

    constructor(obj?: IRegistrationData) {
        this.avatar = '/imgs/user/avatar.svg'

        if (obj) {
            this.email = obj.email
            this.login = obj.login
            this.password = obj.password
            this.name = obj.name
            this.type = obj.type
            this.avatar = obj.avatar
        } else {
            this.email = ''
            this.login = ''
            this.password = ''
            this.name = ''
            this.type = new UserType()
        }
    }

    isValid() {
        return this.name != null && this.password != null && this.login != null && this.email != null && this.type !== undefined
    }
}
