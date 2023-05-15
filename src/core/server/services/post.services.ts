/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import api from './api'
import type { IRule } from '../models/interfaces/lib/IRule'
import Post from '../stores/post/post'
import urls from '../collections/urls'
import config from '../../../config/config'
import type { AxiosResponse } from 'axios'
import { validationProp } from '../validation'
import { handlerError, responseHandler } from '../response-handler'
import type AxiosError from 'axios'
import type { IPost } from '../models/interfaces/article/IPost'
import type { IPostsFilter } from '../models/interfaces/filter/filters-posts'
import PhotoPost from '../models/classes/article/PhotoPost'

export const getInValidPostFields = (post: Post) => {
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

export const getPost = (postId: string, title = ''): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const url = postId ? `${urls.GET_POST_BY_ID}/${postId}` : `${urls.GET_POST_BY_TITLE}/${title}`

        api()
            .get(url, { params: { domain: config.server.domain } })
            .then((res: AxiosResponse) => {
                responseHandler(res, null, false)
                    .then((data) => resolve(new Post(data.post)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const getPosts = (sectionId: string, lastCreateDate: Date = new Date(), searchText = ''): Promise<Post[]> => {
    return new Promise<IPost[]>((resolve, reject) => {
        const options = {
            params: {
                domain: config.server.domain,
                sectionId,
                searchText,
                lastCreateDate
            }
        }

        api()
            .get(`${urls.GET_POSTS}`, options)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(data.posts.map((post: IPost) => new Post(post))))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
export const getFiltersPosts = (): Promise<IPostsFilter[]> => {
    return new Promise<IPostsFilter[]>((resolve, reject) => {
        api()
            .get(urls.GET_FILTERS_POSTS, { params: { domain: config.server.domain } })
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(data.filtersPosts))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
export const addPost = (post: Post): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const listErrors = getInValidPostFields(post)

        if (!listErrors.length) {
            api()
                .post(urls.CREATE_POST, post)
                .then((res: AxiosResponse) => {
                    responseHandler(res)
                        .then((data) => resolve(new Post(data.post)))
                        .catch((err: typeof AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: typeof AxiosError) => {
                    handlerError(err)
                    reject(err)
                })
        } else {
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const addLikePost = (postId: string): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const url = `${urls.SET_POST_LIKE}/${postId}`

        api()
            .post(url)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(new Post(data.post)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const removeLikePost = (postId: string): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const url = `${urls.DELETE_POST_LIKE}/${postId}`

        api()
            .delete(url)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(new Post(data.post)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const addLikePhotoPost = (photoPostId: string): Promise<PhotoPost> => {
    return new Promise<PhotoPost>((resolve, reject) => {
        const url = `${urls.SET_PHOTO_POST_LIKE}/${photoPostId}`

        api()
            .post(url)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(new PhotoPost(data.photoPost)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const removeLikePhotoPost = (photoPostId: string): Promise<PhotoPost> => {
    return new Promise<PhotoPost>((resolve, reject) => {
        const url = `${urls.DELETE_PHOTO_POST_LIKE}/${photoPostId}`

        api()
            .delete(url)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(new PhotoPost(data.photoPost)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
//
// export const addSharePost = (postId: string): Promise<Post> => {
//     return new Promise<Post>((resolve, reject) => {
//         const url = `${urls.ADD_POST_SHARE}/${postId}`
//
//         api()
//             .post(url)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then((data) => resolve(new Post(data.post)))
//                     .catch((err: typeof AxiosError) => {
//                         handlerError(err)
//                         reject(err)
//                     })
//             })
//             .catch((err: typeof AxiosError) => {
//                 handlerError(err)
//                 reject(err)
//             })
//     })
// }

export const changeStatusPost = (postId: string, status: number): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const url = `${urls.UPDATE_POST_STATUS}/${postId}`

        api()
            .post(url, { status })
            .then((res: AxiosResponse) => {
                responseHandler(res)
                    .then((data) => resolve(new Post(data.post)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const changeSizePhotoPost = (photoPostId: string, size: number): Promise<PhotoPost> => {
    return new Promise<PhotoPost>((resolve, reject) => {
        const url = `${urls.UPDATE_POST_PHOTO_SIZE}/${photoPostId}`

        api()
            .post(url, { size })
            .then((res: AxiosResponse) => {
                responseHandler(res)
                    .then((data) => resolve(new PhotoPost(data.photoPost)))
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const editPost = (postId: string, dataToUpdate: Post, isShowMsg = true): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        const listErrors = getInValidPostFields(dataToUpdate)

        if (!listErrors.length) {
            const url = `${urls.UPDATE_POST_BY_ID}/${postId}`

            api()
                .put(url, dataToUpdate)
                .then((res: AxiosResponse) => {
                    responseHandler(res, null, isShowMsg)
                        .then((data) => resolve(new Post(data.post)))
                        .catch((err: typeof AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: typeof AxiosError) => {
                    handlerError(err)
                    reject(err)
                })
        } else {
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}
export const deletePost = (postId: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const url = `${urls.UPDATE_POST_BY_ID}/${postId}`

        api()
            .delete(url)
            .then((res: AxiosResponse) => {
                responseHandler(res)
                    .then(() => resolve())
                    .catch((err: typeof AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: typeof AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
