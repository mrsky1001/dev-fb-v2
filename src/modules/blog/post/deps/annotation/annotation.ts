/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { nanoid } from 'nanoid'
import type { IBase } from '../../../../app/base/base.class'

export interface IAnnotation extends IBase {
    text: string
    keywords: string[]
    imgUrl: string
    shortText: string
    imgFile?: File
}

/**
 * Класс аннотации к статье
 */
export default class Annotation {
    readonly id
    readonly imgUrl
    readonly keywords: string[]
    readonly imgFile?: File

    private _text = ''

    constructor(obj?: IAnnotation) {
        if (obj) {
            this.id = Number(obj.id)
            this.text = obj.text
            this.imgUrl = obj.imgUrl
            this.keywords = obj.keywords
            this.imgFile = obj.imgFile
        } else {
            this.id = nanoid()
            this.text = ''
            this.imgUrl = ''
            this.keywords = []
        }
    }

    get text() {
        return this._text
    }

    set text(value: string) {
        this._text = value.trim()
    }

    get shortText() {
        return this._text.substring(0, 100) + '...'
    }
}
