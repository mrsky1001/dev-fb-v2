/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import type {IBase} from "../_base.store";
import {setId} from "../_base.store";

export interface IAnnotation extends IBase {
    text: string
    keywords: string[]
    imgUrl: string
    imgFile?: File
}


export default class Annotation {
    id = ''
    imgUrl = ''
    keywords: string[] = []
    imgFile?: File

    private _text = ''

    constructor(initObj?: IAnnotation) {
        if (initObj) {
            this.init(initObj)
        } else {
            this.emptyInit()
        }
    }

    emptyInit() {
        this.text = ''
        this.imgUrl = ''
        this.keywords = []
    }

    init(obj: IAnnotation): void {
        this.id = setId(obj)
        this.text = obj.text ?? this._text
        this.imgUrl = obj.imgUrl ?? this.imgUrl
        this.keywords = obj.keywords ?? this.keywords
        this.imgFile = obj.imgFile ?? this.imgFile
    }

    get text() {
        return this._text
    }

    set text(value: string) {
        this._text = value.trim()
    }
}
