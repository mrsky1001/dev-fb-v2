import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { config as configApp } from '../../../config/config'
import { authStore } from '../../../stores/init-store'
import { handlerError, responseHandler } from '../../../core/lib/response-handler'
import allToastStore from '../toast/deps/all-toast.store'
import { createDataWithoutPrivateFields } from '../../../core/lib/obj.lib'

class API {
    apiService(): AxiosInstance {
        return axios.create({
            baseURL: configApp.server.fullHost,
            timeout: 5000,
            timeoutErrorMessage: 'Timeout',
            headers: { Authorization: `Bearer ${authStore.self().token}` }
        })
    }

    get<T>(url: string): Promise<T>
    get<T>(url: string, param: string): Promise<T>
    get<T>(url: string, param: string | undefined, config: AxiosRequestConfig<any> | undefined): Promise<T>
    get<T>(url: string, param?: string, config?: AxiosRequestConfig<any> | undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const _url = `${url}${param ? '/' + param : ''}`

            this.apiService()
                .get(_url, config)
                .then((res: AxiosResponse) => {
                    responseHandler(res, null, false)
                        .then((data) => {
                            resolve(data)
                        })
                        .catch((err: AxiosError) => {
                            handlerError(err)

                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    const isShowMsg = !configApp.excludedURLForShowMsg.filter((excUrl) => url.includes(excUrl)).length
                    isShowMsg && allToastStore.create('Ошибка при выполнении GET запроса', 'warning')
                    handlerError(err, isShowMsg, null, isShowMsg)

                    reject(err)
                })
        })
    }

    post<IRaw>(url: string, param: string): Promise<IRaw>
    post<TData, IRaw>(url: string, param: string | undefined, data: TData): Promise<IRaw>
    post<TData, IRaw>(url: string, param: string | undefined, data: TData, isShowMsg: boolean): Promise<IRaw>
    post<TData, IRaw>(url: string, param: string | undefined, data: TData, isShowMsg: boolean, isShowMsgError: boolean): Promise<IRaw>
    post<TData, IRaw>(url: string, param?: string, data?: TData, isShowMsg = true, isShowMsgError = true): Promise<IRaw> {
        const _url = `${url}${param ? '/' + param : ''}`

        return new Promise<IRaw>((resolve, reject) => {
            this.apiService()
                .post(_url, createDataWithoutPrivateFields(data))
                .then((res: AxiosResponse) => {
                    responseHandler(res, undefined, isShowMsg)
                        .then((data) => resolve(data))
                        .catch((err: AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    allToastStore.create('Ошибка при выполнении POST запроса', 'warning')
                    handlerError(err, false, null, isShowMsgError)
                    reject(err)
                })
        })
    }

    put<TData, IRaw>(url: string, param?: string, data?: TData, isShowMsg?: boolean): Promise<IRaw> {
        const _url = `${url}${param ? '/' + param : ''}`

        return new Promise<IRaw>((resolve, reject) => {
            this.apiService()
                .put(_url, createDataWithoutPrivateFields(data))
                .then((res: AxiosResponse) => {
                    responseHandler(res, undefined, isShowMsg)
                        .then((data) => resolve(data))
                        .catch((err: AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    allToastStore.create('Ошибка при выполнении PUT запроса', 'warning')
                    // allToastStore.create('Внимание! Обновление данных не выполнено!', 'error')
                    handlerError(err)
                    reject(err)
                })
        })
    }

    delete<IRaw>(url: string, param: string | undefined): Promise<IRaw>
    delete<IRaw>(url: string, param: string | undefined, isShowMsg: boolean, isShowMsgError: boolean): Promise<IRaw>
    delete<IRaw = void>(url: string, param?: string, isShowMsg = true, isShowMsgError = true): Promise<IRaw> {
        const _url = `${url}${param ? '/' + param : ''}`

        return new Promise<IRaw>((resolve, reject) => {
            this.apiService()
                .delete(_url)
                .then((res: AxiosResponse) => {
                    responseHandler(res, undefined, isShowMsg)
                        .then((data) => resolve(data))
                        .catch((err: AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    allToastStore.create('Внимание! Удаление данных не выполнено!', 'error')
                    handlerError(err, false, null, isShowMsgError)
                    reject(err)
                })
        })
    }
}

export default new API()
