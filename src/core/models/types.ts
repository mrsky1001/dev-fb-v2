/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

export type TErrorData<T> = { [k in keyof T]: string }
export type TErrorObj<T> = { property: keyof T; message: string }
