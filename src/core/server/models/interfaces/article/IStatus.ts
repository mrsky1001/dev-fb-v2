/*
 * Copyright (c) 21.11.2021, 23:30  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'

export interface IStatus extends IGenericModel {
    text: string
    value: number
    icon: string
    color: string
}
