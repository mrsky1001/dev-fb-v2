/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { apiPost } from './api'
import urls from '../../lib/collections/urls'
import sha1 from 'sha1'
import type { RegistrationData } from '../models/auth/RegistrationData'
import type { LoginData } from '../models/auth/LoginData'
import type { TLoginData, TRegistrationResult } from '../models/types'

//
// export const isAuthorized = (isRedirectToLogin = false): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         api()
//             .get(urls.IS_AUTHORIZED)
//             .then((res: AxiosResponse) =>
//                 responseHandler(res, null, false)
//                     .then((data) => {
//                         vxc.auth.saveUser(data.user)
//                         resolve(true)
//                     })
//                     .catch((err: AxiosError) => {
//                         vxc.auth.clearUser()
//                         handlerError(err, isRedirectToLogin, null, false)
//                         reject(false)
//                     })
//             )
//             .catch((err: AxiosError) => {
//                 vxc.auth.clearUser()
//                 handlerError(err, isRedirectToLogin, null, false)
//                 reject(false)
//             })
//     })
// }

export async function login(data: LoginData): Promise<TLoginData> {
    data.password = sha1(data.password)
    return await apiPost<LoginData, TLoginData>(urls.LOGIN, undefined, data)
}
//
// export const logout = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         api()
//             .post(urls.LOGOUT)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then(() => {
//                         vxc.auth.clearUser()
//                         resolve(true)
//                     })
//                     .catch((err: AxiosError) => {
//                         handlerError(err)
//                         reject(false)
//                     })
//             })
//             .catch((err: AxiosError) => {
//                 handlerError(err)
//                 reject(false)
//             })
//     })
// }
export const registration = (data: RegistrationData): Promise<TRegistrationResult> => {
    data.password = data.password.length > 3 ? sha1(data.password) : data.password
    return apiPost<RegistrationData, TRegistrationResult>(urls.REGISTRATION, undefined, data)
}
// export const saveAccount = (params: IAccount): Promise<IUser> => {
//     return new Promise<IUser>((resolve, reject) => {
//         params.password && (params.password = sha1(params.password))
//
//         api()
//             .put(urls.UPDATE_USER, params)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then((data) => {
//                         const user = GenericModel.assign(vxc.auth.user, data.user) as IUser
//                         vxc.auth.saveUser(user)
//                         resolve(data)
//                     })
//                     .catch((err: AxiosError) => {
//                         handlerError(err)
//                         reject(false)
//                     })
//             })
//             .catch((err: AxiosError) => {
//                 handlerError(err)
//                 reject(false)
//             })
//     })
// }
// export const deleteAccount = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         api()
//             .delete(urls.DELETE_USER)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then(() => {
//                         vxc.auth.clearUser()
//                         resolve(true)
//                     })
//                     .catch((err: AxiosError) => {
//                         handlerError(err)
//                         reject(false)
//                     })
//             })
//             .catch((err: AxiosError) => {
//                 handlerError(err)
//                 reject(false)
//             })
//     })
// }
//
// export const getUser = (): Promise<IUser> => {
//     return new Promise<IUser>((resolve, reject) => {
//         api()
//             .get(urls.GET_USER)
//             .then((res: AxiosResponse) =>
//                 responseHandler(res, null, false)
//                     .then((data) => {
//                         resolve(data.user)
//                     })
//                     .catch((err) => {
//                         handlerError(err, true)
//                         reject()
//                     })
//             )
//             .catch((err: AxiosError) => {
//                 handlerError(err, true)
//                 reject()
//             })
//     })
// }

// export const getRoles = (): Promise<IRole[]> => {
//     return new Promise<IRole[]>((resolve, reject) => {
//         api()
//             .get(urls.ROLES)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then((data) => {
//                         const roles = data.map((role: IRole) => new Comment(role))
//                         resolve(roles)
//                     })
//                     .catch((err: AxiosError) => {
//                         handlerError(err)
//                         reject(false)
//                     })
//             })
//             .catch((err: AxiosError) => {
//                 handlerError(err)
//                 reject(false)
//             })
//     })
// }
