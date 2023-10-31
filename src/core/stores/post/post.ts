/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import config from '../../../config/config'
import type IPhotoPost from '../../models/interfaces/article/IPhotoPost'
import statuses from '../../lib/collections/statuses'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import type { IAnnotationStore } from '../annotation/annotation.store'
import { createAnnotationStore } from '../annotation/annotation.store'
import type { IAnnotation } from '../annotation/annotation'
import type { IUser } from '../user/user'
import User from '../user/user'
import type { IUserStore } from '../user/user.store'
import { createUserStore } from '../user/user.store'
import type { IAllCommentStore } from '../comment/all-comment.store'
import { createAllCommentStore } from '../comment/all-comment.store'
import type { IComment } from '../comment/comment'
import Annotation from '../annotation/annotation'
import Comment from '../comment/comment'
import { nanoid } from 'nanoid'

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
    author?: IUser // | null
    comments?: IComment[]
    annotation?: IAnnotation // | null

    isActive: boolean

    getFormattedPublishDate(): string
}

export interface IPost extends IPostProps {
    commentsStore: IAllCommentStore // | null
    authorStore: IUserStore // | null
    annotationStore: IAnnotationStore // | null
}

export default class Post implements IPost {
    readonly id
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
    commentsStore: IAllCommentStore = createAllCommentStore()
    authorStore: IUserStore = createUserStore()
    status: number = statuses.DRAFT.value
    annotationStore: IAnnotationStore = createAnnotationStore()

    isActive = false

    constructor(obj?: IPost) {
        if (obj) {
            this.id = setId(obj)
            this.title = obj.title ?? this.title
            this.urlTitle = obj.urlTitle ?? this.urlTitle
            this.content = obj.content ?? this.content
            this.photoPosts = obj.photoPosts ?? this.photoPosts
            this.sectionId = obj.sectionId ?? this.sectionId
            this.domain = obj.domain ?? this.domain

            this.tags = obj.tags ?? this.tags
            this.countSymbols = obj.countSymbols ?? this.countSymbols

            this.creatingDate = obj.creatingDate ?? this.creatingDate
            this.updatingDate = obj.updatingDate ?? this.updatingDate
            this.publishedDate = obj.publishedDate ?? this.publishedDate
            this.views = obj.views ?? this.views
            this.likes = obj.likes ?? this.likes
            this.shares = obj.shares ?? this.shares
            this.status = obj.status ?? this.status
            this.readTime = obj.readTime ?? this.readTime
            this.countComments = obj.countComments ?? this.countComments

            this.isActive = obj.isActive ?? this.isActive

            if (obj.annotationStore) {
                this.annotationStore.init(obj.annotationStore.self())
            } else if (obj.annotation) {
                this.annotationStore.init(new Annotation(obj.annotation))
            }

            if (obj.authorStore) {
                this.authorStore.init(obj.authorStore.self())
            } else if (obj.author) {
                this.authorStore.init(new User(obj.author))
            }

            if (obj.commentsStore) {
                this.commentsStore.init(obj.commentsStore.all())
            } else if (obj.comments) {
                this.commentsStore.init(obj.comments.map((c) => new Comment(c)))
            }
        } else {
            this.id = nanoid()
            this.title = ''
            this.urlTitle = ''
            this.content = ''
            this.sectionId = ''
            this.tags = []
        }
    }
    // getRoute() {
    //     return `/post/${this.urlTitle}`
    // }

    getFormattedPublishDate(): string {
        if (this.publishedDate) {
            return new Date(this.publishedDate).toLocaleDateString()
        }

        return ''
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

    setActive(val = true) {
        this.isActive = val
    }
}
