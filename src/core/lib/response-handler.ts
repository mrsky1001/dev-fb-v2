/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { AxiosError, AxiosResponse } from 'axios'

export const responseHandler = (res: AxiosResponse, msg?: IAppMessage | null, isShowMsg = true): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        if (res.status === 200) {
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

export const handlerError = (err: AxiosError, checkAuth = false, redirect?: IRoute | null, isShowMsg = true): void => {
    // const hostPath = window.location.protocol + '//' + window.location.host

    if (checkAuth && err.response) {
        switch (err.response.status) {
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
        const props = { classes: 'red', msg: '' }

        if (err.response && err.response.data && err.response.data.message) {
            props.msg = err.response.data.message
        } else {
            props.msg = err.message
        }

        console.error(props.msg)
        // vxc.snackbar.setSnackBarMsg(props)
    } else {
        console.error(err)
    }

    if (redirect) {
        // window.location.href = hostPath + redirect.path
    }
    // throw err
}
