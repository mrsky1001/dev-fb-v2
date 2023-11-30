/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

/**
 * Тип описывающий настройки input элемента с типом number
 */
export type TNumSettingsInput = {
    min: number
    max: number
}

/**
 * Тип описывающий настройки select
 */
export type TOptionSettings = {
    idField: string
    valueField: string
    textField: string | string[]
    imgField?: string
    typeValue?: 'valueType' | 'selfObj'
}
