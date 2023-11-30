/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { Point } from '../../server.core/models/calculator/draw/DrawPiece'

/**
 * Вычисление третей точки треугольника (где угол e) у стороны b
 *          (x1, y1)
 *          | \
 *          |  \
 *        h |   \ b
 *          |    \
 *          |____e\
 *                 (xc, y3)
 * @param {number} x1
 * @param {number} y1
 * @param {number} h
 * @param {number} sizeB - размер стороны b
 * @param sizeA
 * @param sizeC
 */
export function calcThirdPoint(x1: number, y1: number, h: number, sizeB: number, sizeA: number, sizeC: number) {
    const sign = sizeA - sizeC > 0 ? 1 : -1
    // const y3 = y1 + h
    const x3 = x1 - sign * Math.sqrt(Math.abs(sizeB * sizeB - (y1 - h) * (y1 - h)))

    //todo проблема в вычислении y
    return { x: x3, y: y1 + h }
}

/**
 * Вычисление длины стороны треугольника по двум другим и углу между ними согласно теореме косинусов.
 * @param a
 * @param b
 * @param angle
 */
export function calcSideTriangle(a: number, b: number, angle = 90) {
    const angleRad = angle > 90 ? toRadians(180 - angle) : toRadians(angle)
    return Math.sqrt(Math.abs(a * a + b * b - 2 * a * b * Math.cos(angleRad)))
}

/**
 * Перевод в градусы в радианы
 * @param {number} angle
 * @private
 */
export function toRadians(angle: number): number {
    return angle * (Math.PI / 180)
}

/**
 * Перевод в радианы в градусы
 * @param {number} radian
 * @private
 */
export function toDegree(radian: number): number {
    return (radian * 180) / Math.PI
}

/**
 * Расчет координаты точки по углу от произвольной прямой и расстоянию
 * @param p1
 * @param wP1P2
 * @param angle
 */
export function calcNextPoint(p1: Point, wP1P2: number, angle: number) {
    const x = p1.x + wP1P2 * Math.sin(toRadians(angle))
    const y = p1.y + wP1P2 * Math.cos(toRadians(angle))

    return new Point(parseFloat(x.toFixed(0)), parseFloat(y.toFixed(0)))
}
