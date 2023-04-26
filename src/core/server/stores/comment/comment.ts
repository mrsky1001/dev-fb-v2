import type { IStatus } from '../../models/interfaces/article/IStatus'
import type { IUser } from '../user/user'
import statuses from '../../collections/statuses'
import type { IBase } from '../_base.store'
import { setId } from '../_base.store'
import type { IRole } from '../role/role'

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

export default class Comment implements IComment {
    id = ''
    creatingDate = ''
    content = ''
    postId = ''
    parentId = ''
    errorMsg = ''
    author: IUser | null = null
    status: IStatus = statuses.DRAFT

    constructor(initObj?: IComment) {
        if (initObj) {
            this.init(initObj)
        } else {
            this.emptyInit()
        }
    }

    emptyInit() {
        this.id = ''
        this.author = null
        this.content = ''
        this.postId = ''
        this.parentId = ''
        this.creatingDate = ''
        this.status = statuses.DRAFT
        this.errorMsg = ''
    }

    init(obj: IComment): void {
        this.id = setId(obj)
        this.author = obj.author ?? this.author
        this.content = obj.content ?? this.content
        this.postId = obj.postId ?? this.postId
        this.parentId = obj.parentId ?? this.parentId
        this.creatingDate = obj.creatingDate ?? this.creatingDate
        this.status = obj.status ?? this.status
        this.errorMsg = obj.content ?? this.errorMsg
    }
}
