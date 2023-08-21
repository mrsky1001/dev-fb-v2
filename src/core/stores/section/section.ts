/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import config from '../../../config/config'
import { nanoid } from 'nanoid'
import type { IAllPostStore } from '../post/all-posts.store'
import { createAllPostStore } from '../post/all-posts.store'
import type { IPost } from '../post/post'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import type { IUser } from '../user/user'

/**
 * Интерфейс класса раздела
 */
export interface ISection extends IBase {
    author: IUser | null
    name: string
    domain: string
    description: string
    creatingDate: Date
    isActive: boolean
    allPostStore: IAllPostStore

    setPosts: (posts: IPost[]) => void
}

/**
 * Интерфейс параметров инициализации раздела
 */
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

/**
 * Класс раздела
 */
export default class Section implements ISection {
    readonly id
    readonly author: IUser | null
    readonly name
    readonly domain: string
    readonly description
    readonly creatingDate: Date

    private readonly _allPostStores: IAllPostStore = createAllPostStore()

    isActive = false

    constructor(obj?: ISectionProps) {
        if (obj) {
            this.id = setId(obj)
            this.name = obj.name
            this.description = obj.description
            this.domain = obj.domain
            this.author = obj.author
            this.creatingDate = obj.creatingDate

            this.isActive = obj.isActive ?? this.isActive

            this.setPosts(obj.posts)
        } else {
            this.id = nanoid()
            this.name = ''
            this.description = ''
            this.domain = config.server.domain
            this.author = null
            this.creatingDate = new Date()

            this.isActive = false
        }
    }

    get allPostStore(): IAllPostStore {
        return this._allPostStores
    }

    setPosts(posts: IPost[]): void {
        posts?.length && this._allPostStores.init(posts)
    }

    setActive(val = true) {
        this.isActive = val
    }
}
