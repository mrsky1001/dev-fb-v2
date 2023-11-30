/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IBase } from '../../../../../../orders-klimov-red/src/core/models/base/Base'

export interface IOption extends IBase {
    /**
     * Текст элемента выбора
     */
    text: string

    /**
     * URL картинки элемента выбора
     */
    img?: string

    /**
     * CSS классы
     */
    colorClasses?: string
}

/**
 * Класс описывающий сущность элемента выбора данных
 */
export default class Option implements IOption {
    readonly id: number
    readonly text: string
    readonly img?: string

    colorClasses?: string

    constructor(obj: IOption) {
        this.id = obj.id
        this.text = obj.text
        this.img = obj.img
    }
}
