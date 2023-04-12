/*
 * Copyright (c) 22.11.2021, 18:50  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'

export default interface IPhotoPost extends IGenericModel {
    postId: string
    title: string
    url: string
    size: number
    likes: string[]
    description: string
}
