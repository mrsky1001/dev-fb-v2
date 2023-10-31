/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../../models/base/Base'
import { makeNumId } from '../../lib/nanoid.tools'

/**
 * Типы всплывающих уведомлений
 */
export type TToastTypes = 'success' | 'warning' | 'error' | 'info'

export interface IToast extends IBase {
    type: TToastTypes
    text: string
}

/**
 * Класс для описывающий модель всплывающих уведомлений
 */
export default class Toast implements IToast {
    readonly id: number
    readonly type: TToastTypes
    readonly text: string

    constructor(text: string, type: TToastTypes = 'warning', id: number = makeNumId()) {
        this.id = id

        this.type = type
        this.text = text
    }
}
