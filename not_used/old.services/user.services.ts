/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { apiServices } from '../../src/core/modules/api/api.services'
import type { AxiosError, AxiosResponse } from 'axios'
import { handlerError, responseHandler } from '../../src/core/lib/response-handler'
import urls from '../../src/lib/collections/urls'
import UserType, { type IUserType } from '../../src/core/modules/userType/userType.class'

export const getUserTypes = (): Promise<UserType[]> => {
    return new Promise<UserType[]>((resolve, reject) => {
        apiServices()
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
