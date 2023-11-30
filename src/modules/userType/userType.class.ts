/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../../../../orders-klimov-red/src/core/models/base/Base'
import { makeNumId } from '../../core/lib/nanoid.tools'

export interface IUserType extends IBase {
    /**
     * Имя типа
     */
    name: string
    /**
     * Значение типа
     */
    value: number
}

/**
 * Класс описывающий сущность типа пользователя
 */
export default class UserType implements IUserType {
    id: number
    name: string
    value: number

    constructor(obj?: IUserType) {
        if (obj) {
            this.id = Number(obj.id)
            this.name = obj.name
            this.value = obj.value
        } else {
            this.id = makeNumId()
            this.name = ''
            this.value = 0
        }
    }
}
