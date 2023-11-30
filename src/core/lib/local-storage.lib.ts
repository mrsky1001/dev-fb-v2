/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import config from '../../config/config'
import { createDataWithoutPrivateFields } from './obj.lib'

/**
 * Символ-пробел между именами
 */
const spacer = '_'

/**
 * Функция получения данных из localStorage
 * @param key
 */
export function getPropFromLS(key: string): any {
    const temp = localStorage.getItem(config.mainStorageName + spacer + key)
    return temp === 'undefined' ? null : JSON.parse(String(temp))
}

/**
 * Функция сохранения данных в localStorage
 * @param key
 * @param data
 */
export function setPropToLS(key: string, data: any): void {
    const validData = createDataWithoutPrivateFields(data)
    localStorage.setItem(config.mainStorageName + spacer + key, JSON.stringify(validData))
}
