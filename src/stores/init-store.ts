/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { createAuthStore } from '../core/stores/auth/auth.store'
import Auth from '../core/models/auth/Auth'

export const authStore = createAuthStore(new Auth())
const interval = setInterval(() => {
    if (typeof window !== 'undefined') {
        clearInterval(interval)
        authStore.initFromLS()
    }
}, 500)
