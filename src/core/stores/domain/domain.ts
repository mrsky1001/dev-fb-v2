/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import type { IBase } from '../_base.store'
import { setId } from '../_base.store'

export interface IDomain extends IBase {
    name: string
    text: string
    description: string

    isActive: boolean
}

export default class Domain {
    id = ''
    name = ''
    text = ''
    description = ''

    isActive = false

    constructor(initObj?: IDomain) {
        if (initObj) {
            this.init(initObj)
        } else {
            this.emptyInit()
        }
    }

    emptyInit() {
        this.name = ''
        this.text = ''
        this.description = ''
    }

    init(obj: IDomain): void {
        this.id = setId(obj)
        this.name = obj.name ?? this.name
        this.text = obj.text ?? this.name
        this.description ??= obj.description
    }
}
