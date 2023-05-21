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

export default class Role implements IRole {
    id = ''
    name = ''
    value = roles.UNAUTHORIZED.value

    constructor(initObj?: IRole) {
        if (initObj) {
            this.init(initObj)
        } else {
            this.emptyInit()
        }
    }

    emptyInit() {
        this.id = ''
        this.name = ''
        this.value = roles.UNAUTHORIZED.value
    }

    init(obj: IRole): void {
        this.id = setId(obj)
        this.name = obj.name ?? this.name
        this.value = obj.value ?? this.value
    }
}
