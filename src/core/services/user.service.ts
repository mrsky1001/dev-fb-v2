/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { api } from './api'
import type { AxiosError, AxiosResponse } from 'axios'
import { handlerError, responseHandler } from '../lib/response-handler'
import urls from '$lib/collections/urls'
import UserType, { type IUserType } from '../models/userType/UserType'

export const getUserTypes = (): Promise<UserType[]> => {
    return new Promise<UserType[]>((resolve, reject) => {
        api()
            .get(urls.GET_ALL_USER_TYPES)
            .then((res: AxiosResponse) =>
                responseHandler(res, null, false)
                    .then((data: IUserType[]) => {
                        resolve(data.map((d) => new UserType(d)))
                    })
                    .catch((err) => {
                        handlerError(err, true)
                        reject()
                    })
            )
            .catch((err: AxiosError) => {
                handlerError(err, true)
                reject()
            })
    })
}
