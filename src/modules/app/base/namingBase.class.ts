/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from './base.class'
import { nanoid } from 'nanoid'
import { makeNumId } from '../../../core/lib/nanoid.tools'

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
        this.id = Number(obj.id)
        this.name = obj.name
        this.description = obj.description
    }
}
