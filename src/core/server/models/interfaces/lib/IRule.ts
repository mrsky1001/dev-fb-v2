/*
 * Copyright (c) 21.11.2021, 23:31  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */


import type {ICheckRule} from "./ICheckRule";

export interface IRule extends ICheckRule {
    listCheckFields?: ICheckRule[]
}
