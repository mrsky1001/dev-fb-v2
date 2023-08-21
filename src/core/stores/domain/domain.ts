/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import { nanoid } from 'nanoid'

export interface IDomain extends IBase {
    name: string
    text: string
    description: string

    isActive: boolean
    // setActive(val?: boolean): void
}

export default class Domain {
    readonly id
    readonly name
    readonly text
    readonly description

    readonly isActive = false

    constructor(obj?: IDomain) {
        if (obj) {
            this.id = setId(obj)
            this.name = obj.name
            this.text = obj.text
            this.description = obj.description
        } else {
            this.id = nanoid()
            this.name = ''
            this.text = ''
            this.description = ''
        }
    }
}
