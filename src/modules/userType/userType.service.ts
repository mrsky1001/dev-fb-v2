/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import urls from '$lib/collections/urls'
import type { IUserType } from './userType.class'
import UserType from './userType.class'
import api from '../app/api/api.service'

class UserTypeService {
    async getAll(): Promise<UserType[]> {
        const rawData = await api.get<IUserType[]>(urls.GET_ALL_USER_TYPE)
        return rawData.map((data) => new UserType(data))
    }
}

export default new UserTypeService()
