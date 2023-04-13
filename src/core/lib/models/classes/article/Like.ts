/*
 * Copyright (c) 21.11.2021, 23:32  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import GenericModel from "../app/GenericModel";
import type {ILike} from "../../interfaces/article/ILike";

export default class Like extends GenericModel {
    private _postId = ''

    constructor(initObj: ILike) {
        super(initObj)
        this.init(initObj)
    }

    init(initObj: ILike): void {
        this.postId = initObj.postId ? initObj.postId : this._postId
    }

    get postId(): string {
        return this._postId
    }

    set postId(value: string) {
        this._postId = value
    }
}
