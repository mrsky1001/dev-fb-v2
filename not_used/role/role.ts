/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import roles from '../../lib/collections/roles'
import type { IBase } from '../../src/core/stores/_base.store'
import { setId } from '../../src/core/stores/_base.store'

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
