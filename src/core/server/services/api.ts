/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import config from '../../../config/config'
import { handlerError, responseHandler } from '../response-handler'
import urls from '../collections/urls'
import Post from '../../stores/post/post'

export const api = (): AxiosInstance => {
    return axios.create({
        baseURL: config.server.fullHost
        // headers: { Authorization: `Bearer ${vxc.auth.user.token}` },
    })
}

export function apiGet<T>(field: string, url: string): Promise<T>
export function apiGet<T>(field: string, url: string, param: string): Promise<T>
export function apiGet<T>(
    field: string,
    url: string,
    param: string | undefined,
    config: AxiosRequestConfig<any> | undefined
): Promise<T>

export function apiGet<T>(
    field: string,
    url: string,
    param?: string,
    config?: AxiosRequestConfig<any> | undefined
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const _url = `${url}${param ? '/' + param : ''}`
        api()
            .get(_url, config)
            .then((res: AxiosResponse) => {
                responseHandler(res, null, false)
                    .then((data) => {
                        resolve(data[field])
                    })
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export function apiPost<IRaw>(field: string, url: string, param: string): Promise<IRaw>
export function apiPost<TData, IRaw>(field: string, url: string, param: string | undefined, data: TData): Promise<IRaw>
export function apiPost<TData, IRaw>(
    field: string,
    url: string,
    param: string | undefined,
    data: TData,
    isShowMsg: boolean
): Promise<IRaw>

export function apiPost<TData, IRaw>(
    field: string,
    url: string,
    param?: string,
    data?: TData,
    isShowMsg?: boolean
): Promise<IRaw> {
    const _url = `${url}${param ? '/' + param : ''}`

    return new Promise<IRaw>((resolve, reject) => {
        api()
            .post(_url, data)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, isShowMsg)
                    .then((data) => resolve(data[field]))
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export function apiPut<TData, IRaw>(
    field: string,
    url: string,
    param?: string,
    data?: TData,
    isShowMsg?: boolean
): Promise<IRaw> {
    const _url = `${url}${param ? '/' + param : ''}`

    return new Promise<IRaw>((resolve, reject) => {
        api()
            .post(_url, data)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, isShowMsg)
                    .then((data) => resolve(data[field]))
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export function apiDelete<IRaw = void>(field: string | void, url: string, param?: string): Promise<IRaw> {
    const _url = `${url}${param ? '/' + param : ''}`

    return new Promise<IRaw>((resolve, reject) => {
        api()
            .delete(_url)
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(field ? data[field] : null))
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export default api()
