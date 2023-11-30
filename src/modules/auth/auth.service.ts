/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import urls from '$lib/collections/urls'
import sha1 from 'sha1'
import { LoginData } from './deps/loginData.class'
import type { IAuth } from './auth.class'
import api from '../app/api/api.service'
import type { IUserForCreate } from '../user/user.class'

class AuthService {
    async isAuthorized(): Promise<boolean> {
        return new Promise((resolve) => {
            api.get<boolean>(urls.IS_AUTHORIZED)
                .then(() => resolve(true))
                .catch(() => resolve(false))
        })
    }

    async login(data: LoginData): Promise<IAuth> {
        const loginData = new LoginData(data)
        loginData.password = sha1(data.password)
        return api.post<LoginData, IAuth>(urls.LOGIN, undefined, loginData, true, false)
    }

    async registration(regData: IUserForCreate): Promise<IAuth> {
        regData.password = regData.password.length > 3 ? sha1(regData.password) : regData.password
        return api.post<IUserForCreate, IAuth>(urls.REGISTRATION, undefined, regData)
    }
}
export default new AuthService()
