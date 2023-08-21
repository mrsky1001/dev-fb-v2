/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import roles from '../../server/collections/roles'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'

export interface IRole extends IBase {
    name: string
    value: number
}

/**
 * Класс роли пользователя
 */
export default class Role implements IRole {
    readonly id
    readonly name
    readonly value

    constructor(obj?: IRole) {
        if (obj) {
            this.id = setId(obj)
            this.name = obj.name
            this.value = obj.value
        } else {
            this.id = ''
            this.name = ''
            this.value = roles.UNAUTHORIZED.value
        }
    }
}
