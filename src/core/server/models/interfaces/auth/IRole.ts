/*
 * Copyright (c) 21.11.2021, 23:19  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import type {IGenericModel} from "../app/IGenericModel";

export interface IRole extends IGenericModel {
    name: string
    value: number
}
