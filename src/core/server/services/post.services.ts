/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import { apiDelete, apiGet, apiPost, apiPut } from './api'
import type { IRule } from '../models/interfaces/lib/IRule'
import urls from '../collections/urls'
import { validationProp } from '../validation'
import type { IPostsFilter } from '../models/interfaces/filter/filters-posts'
import { globalStore } from '../../stores/global.store'
import type IPhotoPost from '../models/interfaces/article/IPhotoPost'
import type { IPost } from '../../stores/post/post'
import type Post from '../../stores/post/post'

export type TValidFunc<T> = (data: T) => string[]

export const getInValidPostFields: TValidFunc<Post> = (post: Post) => {
    const rules: IRule[] = [
        { name: 'title', label: 'Заголовок', type: 'string', min: 3 },
        { name: 'content', label: 'Содержание', type: 'string', min: 10 },
        { name: 'sectionId', label: 'Раздел', type: 'string', min: 3 },
        {
            name: 'annotation',
            type: 'object',
            listCheckFields: [{ name: 'text', label: 'Текст аннотации', type: 'string', min: 3 }]
        },
        { name: 'tags', label: 'Тэги', type: 'array', min: 1 }
    ]
    const listError: string[] = []

    validationProp(post, rules, listError)

    return listError
}

export const getPostByTitle = (title: string) => apiGet<IPost>('post', urls.GET_POST_BY_TITLE, title)

export const getPost = (postId: string): Promise<IPost> => {
    const config = { params: { domain: globalStore.self().allDomainStore.getActive()?.name } }
    return apiGet<IPost>('post', urls.GET_POST_BY_ID, postId, config)
}

export const getPosts = (
    domain: string,
    sectionId: string,
    lastCreateDate: Date = new Date(),
    searchText = ''
): Promise<IPost[]> => {
    const config = {
        params: {
            domain,
            sectionId,
            searchText,
            lastCreateDate
        }
    }

    return apiGet<IPost[]>('posts', urls.GET_POSTS, undefined, config)
}

export const getFiltersPosts = (): Promise<IPostsFilter[]> => {
    const config = {
        params: {
            domain: globalStore.self().allDomainStore.getActive()?.name
        }
    }

    return apiGet<IPostsFilter[]>('filtersPosts', urls.GET_FILTERS_POSTS, undefined, config)
}

export const addPost = (post: Post): Promise<IPost> => {
    return new Promise<IPost>((resolve, reject) => {
        const listErrors = getInValidPostFields(post)

        if (!listErrors.length) {
            return apiPost<Post, IPost>('post', urls.CREATE_POST, undefined, post)
        } else {
            reject(listErrors)
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const changePost = (postId: string, dataToUpdate: Post, isShowMsg = true): Promise<IPost> => {
    return new Promise<IPost>((resolve, reject) => {
        const listErrors = getInValidPostFields(dataToUpdate)

        if (!listErrors.length) {
            return apiPut<Post, IPost>('post', urls.UPDATE_POST_BY_ID, postId, dataToUpdate, isShowMsg)
        } else {
            reject(listErrors)
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const removePost = (postId: string): Promise<void> => {
    return apiDelete(undefined, urls.UPDATE_POST_BY_ID, postId)
}

export const changeStatusPost = (postId: string, status: number): Promise<IPost> => {
    return apiPut<Pick<IPost, 'status'>, IPost>('post', urls.UPDATE_POST_STATUS, postId, { status })
}

export const addLikePost = (postId: string) => {
    return apiPost<IPost>('post', urls.SET_POST_LIKE, postId)
}

export const removeLikePost = (postId: string): Promise<IPost> => {
    return apiDelete<IPost>('post', urls.DELETE_POST_LIKE, postId)
}

/**
 * Photo
 */

export const addLikePhotoPost = (photoPostId: string): Promise<IPhotoPost> => {
    return apiPost<IPhotoPost>('photoPost', urls.SET_PHOTO_POST_LIKE, photoPostId)
}

export const removeLikePhotoPost = (photoPostId: string): Promise<IPhotoPost> => {
    return apiDelete<IPhotoPost>('photoPost', urls.DELETE_PHOTO_POST_LIKE, photoPostId)
}

export const changeSizePhotoPost = (photoPostId: string, size: number): Promise<IPhotoPost> => {
    return apiPut<Pick<IPhotoPost, 'size'>, IPhotoPost>('photoPost', urls.UPDATE_POST_PHOTO_SIZE, photoPostId, {
        size
    })
}
