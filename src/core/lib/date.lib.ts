/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import moment from 'moment'

/**
 * Преобразование даты в формат для input
 */
export function toInputDate(date: Date | string) {
    return moment(date).format('YYYY-MM-DD')
}


/**
 * Преобразование даты в формат для печати
 */
export function toPrintDate(date: Date | string) {
    return moment(date).format('DD.MM.YYYY')
}
