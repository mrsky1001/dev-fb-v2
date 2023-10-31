/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type { IUser } from '../stores/user/user'

/**
 * Тип возвращаемого значения после регистрации
 */

export type TLoginData = { token: string; user: IUser }
export type TRegistrationResult = { token: string; user: IUser }

export type TErrorData<T> = { [k in keyof T]: string }
export type TErrorObj<T> = { property: keyof T; message: string }
