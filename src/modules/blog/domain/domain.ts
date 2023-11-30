/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../../../core/stores/_base.store'
import { setId } from '../../../core/stores/_base.store'
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
