/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

/**
 * Конвертация площади миллиметров в площадь метров
 * @param {number} mmSquare
 * @param {number} fractionDigits
 */
export function toMeterSquare(mmSquare: number, fractionDigits = 3) {
    return parseFloat((mmSquare * 0.000001).toFixed(fractionDigits))
}

/**
 * Вычисление площади трапеции
 * @param {number} a - основание
 * @param {number} c - основание
 * @param {number} h - высота
 */
export function calcSquareTrapeze(a: number, c: number, h: number) {
    return ((a + c) / 2) * h
}

/**
 * Вычисление процентов от числа
 * @param partValue
 * @param totalValue
 */
export function percentage(partValue: number, totalValue: number) {
    return ((100 * partValue) / totalValue).toFixed(2)
}
