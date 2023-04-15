/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import config from "../../../../config/config";
import type {IUser} from "../../models/interfaces/auth/IUser";
import type {IPost} from "../../models/interfaces/article/IPost";
import {nanoid} from "nanoid";

export interface ISection {
    id: string
    author: IUser | null
    name: string
    domain: string
    description: string
    creatingDate: Date
    posts: IPost[]

    isActive: boolean
}

export default class Section implements ISection {
    id = nanoid()
    author: IUser | null = null
    name = ''
    domain: string = config.server.domain
    description = ''
    creatingDate: Date = new Date()
    posts: IPost[] = []

    isActive = false

    constructor(initObj?: ISection) {
        initObj && this.init(initObj)
    }

    init(obj: ISection): void {
        this.id = obj.id ?? this.id
        this.name = obj.name ?? this.name
        this.description = obj.description ?? this.description
        this.domain = obj.domain ?? this.domain
        this.posts = obj.posts ?? this.posts
        this.author = obj.author ?? this.author
        this.creatingDate = obj.creatingDate ?? this.creatingDate

        this.isActive = obj.isActive ?? this.isActive
    }

}
