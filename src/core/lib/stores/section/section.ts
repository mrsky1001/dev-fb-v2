/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import config from "../../../../config/config";
import type {IUser} from "../../models/interfaces/auth/IUser";
import {nanoid} from "nanoid";
import type {IAllPostStore} from "../post/all-posts.store";
import {createAllPostStore} from "../post/all-posts.store";
import type {IPost} from "../post/post";

export interface ISection {
    id: string
    author: IUser | null
    name: string
    domain: string
    description: string
    creatingDate: Date

    isActive: boolean

    allPostStore: IAllPostStore
}

export interface ISectionProps extends ISection {
    _id: string
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

    private _allPostStores: IAllPostStore = createAllPostStore()

    isActive = false

    constructor(initObj?: ISectionProps) {
        initObj && this.init(initObj)
    }

    private _setId(obj: ISectionProps) {
        if (obj._id) {
            this.id = obj._id
        } else if (obj.id) {
            this.id = obj.id
        }
    }

    init(obj: ISectionProps): void {
        this._setId(obj)
        this.name = obj.name ?? this.name
        this.description = obj.description ?? this.description
        this.domain = obj.domain ?? this.domain
        this.author = obj.author ?? this.author
        this.creatingDate = obj.creatingDate ?? this.creatingDate

        this.isActive = obj.isActive ?? this.isActive

        this.setPosts(obj.posts)
    }

    get allPostStore(): IAllPostStore {
        return this._allPostStores
    }

    setPosts(posts: IPost[]): void {
        posts?.length && this._allPostStores.set(posts)
    }

}
