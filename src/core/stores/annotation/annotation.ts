/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import { nanoid } from 'nanoid'

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
            this.id = setId(obj)
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
