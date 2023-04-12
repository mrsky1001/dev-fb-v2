/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import axios, {type AxiosInstance} from 'axios'
import config from "../../config/config";

export default (): AxiosInstance => {
    return axios.create({
        baseURL: config.server.fullHost,
        // headers: { Authorization: `Bearer ${vxc.auth.user.token}` },
    })
}
