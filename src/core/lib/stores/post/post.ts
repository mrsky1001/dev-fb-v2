/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import config from "../../../../config/config";
import type IPhotoPost from "../../models/interfaces/article/IPhotoPost";
import type {IComment} from "../../models/interfaces/article/IComment";
import type {IUser} from "../../models/interfaces/auth/IUser";
import User from "../../models/classes/auth/User";
import statuses from "../../collections/statuses";
import type {IBase} from "../_base.store";
import {setId} from "../_base.store";
import type {AnnotationStore} from "../annotation/annotation.store";
import {createAnnotationStore} from "../annotation/annotation.store";
import type {IAnnotation} from "../annotation/annotation";

export interface IPostProps extends IBase {
    _id?: string
    title?: string
    urlTitle: string
    content?: string
    domain: string
    creatingDate: Date
    updatingDate: Date
    publishedDate: Date | undefined
    sectionId: string
    views: number
    photoPosts: IPhotoPost[]
    countSymbols?: number
    readTime: number
    countComments: number
    tags?: string[]
    likes: string[]
    status: number
    shares: number
    author: IUser // | null
    comments: IComment[]
    annotation?: IAnnotation // | null
}

export interface IPost extends IPostProps {
    annotationStore: AnnotationStore // | null
}


export default class Post implements IPost {
    id = ''
    title = ''
    urlTitle = ''
    content = ''
    sectionId = ''
    countSymbols = 0
    domain = config.server.domain
    creatingDate = new Date()
    updatingDate = new Date()
    photoPosts: IPhotoPost[] = []
    publishedDate: Date | undefined = undefined
    views = 0
    readTime = 0
    tags: string[] = []
    likes: string[] = []
    shares = 0
    countComments = 0
    comments: IComment[] = []
    author: IUser = new User()
    status: number = statuses.DRAFT.value
    annotationStore: AnnotationStore = createAnnotationStore()

    constructor(initObj?: IPost) {
        if (initObj) {
            this._init(initObj)
        } else {
            this._emptyInit()
        }
    }

    private _emptyInit() {
        this.title = ''
        this.urlTitle = ''
        this.content = ''
        this.sectionId = ''
        this.tags = []
    }


    private _init(obj: IPost): void {
        this.id = setId(obj)
        this.title = obj.title ?? this.title
        this.urlTitle = obj.urlTitle ?? this.urlTitle
        this.content = obj.content ?? this.content
        this.photoPosts = obj.photoPosts ?? this.photoPosts
        this.sectionId = obj.sectionId ?? this.sectionId
        this.domain = obj.domain ?? this.domain
        obj.annotation && this.annotationStore.set(obj.annotation)
        this.tags = obj.tags ?? this.tags
        this.countSymbols = obj.countSymbols ?? this.countSymbols

        this.author = obj.author ?? this.author
        this.creatingDate = obj.creatingDate ?? this.creatingDate
        this.updatingDate = obj.updatingDate ?? this.updatingDate
        this.publishedDate = obj.publishedDate ?? this.publishedDate
        this.views = obj.views ?? this.views
        this.likes = obj.likes ?? this.likes
        this.shares = obj.shares ?? this.shares
        this.status = obj.status ?? this.status
        this.readTime = obj.readTime ?? this.readTime
        this.comments = obj.comments ?? this.comments
        this.countComments = obj.countComments ?? this.countComments
    }

    get photoContent() {
        return this.content.replace(/(\[\[.*?\]\])|(\*\*\*\*)/g, '')
    }

    addTag(tag: string) {
        this.tags = this.tags.find((t) => t === tag) ? this.tags : [...this.tags, tag]
    }

    removeTag(tag: string) {
        this.tags = this.tags.filter((t) => t !== tag)
    }


}
