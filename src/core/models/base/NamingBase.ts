/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from './Base'
import { nanoid } from 'nanoid'
import { makeNumId } from '../../lib/nanoid.tools'

export interface INamingBase extends IBase {
    /**
     * Наименование
     */
    name: string

    /**
     * Описание
     */
    description?: string
}

/**
 * Класс описывающий стандартные поля для именования и описания объекта
 */
export default class NamingBase implements INamingBase {
    readonly id: number
    readonly name: string
    readonly description?: string

    constructor(obj: INamingBase) {
        this.id = obj.id
        this.name = obj.name
        this.description = obj.description
    }
}
