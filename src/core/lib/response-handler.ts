/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { AxiosError, AxiosResponse } from 'axios'
import { goto } from '$app/navigation'
import routes from '$lib/collections/routes'
import allToastStore from '../../modules/app/toast/deps/all-toast.store'

export const responseHandler = (res: AxiosResponse, msg?: string | null, isShowMsg = true): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        if (res.status.toString().startsWith('2')) {
            if (isShowMsg) {
                // let props: ISnackbarProps = { msg: '' }
                //
                // if (msg && res.data.message) {
                //     props = {
                //         msg: msg.text,
                //         classes: msg.classes,
                //         params: [res.data.message],
                //     }
                // } else if (res.data.message) {
                //     props = {
                //         msg: res.data.message,
                //         classes: 'green',
                //     }
                // } else if (msg) {
                //     props = {
                //         msg: msg.text,
                //         classes: msg.classes,
                //     }
                // }
                //
                // vxc.snackbar.setSnackBarMsg(props)
            }

            resolve(res.data)
        } else {
            reject(res.data.message)
        }
    })
}

export const handlerError = (err: AxiosError, checkAuth = false, redirect?: string | null, isShowMsg = true): void => {
    // const hostPath = window.location.protocol + '//' + window.location.host

    if (checkAuth && err.response) {
        switch (err.response.status) {
            case 401: {
                if (typeof window !== 'undefined') {
                    goto(routes.LOGIN)
                }
                break
            }
            case 403: {
                // const pathLogin = hostPath + routesObj.LOGIN.path
                //
                // if (window.location.href !== pathLogin) {
                //     window.location.href = pathLogin
                // }

                break
            }
        }
    }

    if (isShowMsg && err) {
        const status = err.response ? err.response.status : '000'
        const props = { classes: 'red', msg: String(`Код ошибки: ${status}`) + '\n' }

        if (err.response)
            if (err.response.status > 400 && err.response.status < 404) {
                switch (err.response.status) {
                    case 401: {
                        props.msg += 'Пользователь не авторизован!'
                        break
                    }
                    case 403: {
                        // const pathLogin = hostPath + routesObj.LOGIN.path
                        //
                        // if (window.location.href !== pathLogin) {
                        //     window.location.href = pathLogin
                        // }

                        break
                    }
                }
            } else {
                if (err.response.data) {
                    if (Array.isArray(err.response.data.message)) {
                        const msgs = err.response.data.message.map((m) => m.message ?? '')

                        props.msg += msgs.join('\n')
                    } else if (typeof err.response.data.message === 'string') {
                        props.msg += err.response.data.message
                    }
                } else {
                    props.msg += err.message
                }
            }

        allToastStore.create(props.msg, 'error')
    } else if (err.code === 'ERR_NETWORK') {
        goto(routes.ERROR_CONNECTION_TIMEOUT)
    } else {
        console.error(err)
    }

    if (redirect) {
        // window.location.href = hostPath + redirect.path
    }
    // throw err
}
