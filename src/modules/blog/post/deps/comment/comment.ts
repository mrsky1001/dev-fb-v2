/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IStatus } from '../../models/interfaces/article/IStatus'
import type { IUser } from '../user/user'
import statuses from '../../lib/collections/statuses'
import type { IBase } from '../../../../../core/stores/_base.store'
import { setId } from '../../../../../core/stores/_base.store'
import type { IRole } from '../../../../../../../not_used/old.services/role/role'
import { nanoid } from 'nanoid'

export interface IRawComment {
    content: string
    parentId?: string
    postId: string
}

export interface IComment extends IBase {
    author: IUser | null
    content: string
    creatingDate: string
    parentId: string
    postId: string
    status: IStatus
    errorMsg: string
}

/**
 * Класс комментария к статье
 */
export default class Comment implements IComment {
    readonly id
    readonly creatingDate
    readonly content
    readonly postId
    readonly parentId
    readonly errorMsg
    readonly author: IUser | null = null
    readonly status: IStatus = statuses.DRAFT

    constructor(obj?: IComment) {
        if (obj) {
            this.id = setId(obj)
            this.author = obj.author
            this.content = obj.content
            this.postId = obj.postId
            this.parentId = obj.parentId
            this.creatingDate = obj.creatingDate
            this.status = obj.status
            this.errorMsg = obj.content
        } else {
            this.id = nanoid()
            this.author = null
            this.content = ''
            this.postId = ''
            this.parentId = ''
            this.creatingDate = ''
            this.status = statuses.DRAFT
            this.errorMsg = ''
        }
    }
}
