/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import Section, { ISection, type ISectionProps } from '../../stores/section/section'
import type { IRule } from '../models/interfaces/lib/IRule'
import { validationProp } from '../validation'
import urls from '../collections/urls'
import api, { apiDelete, apiGet, apiPost, apiPut } from './api'
import type { AxiosError, AxiosResponse } from 'axios'
import { handlerError, responseHandler } from '../response-handler'
import config from '../../../config/config'
import Post, { IPost } from '../../stores/post/post'
import { globalStore } from '../../stores/global.store'
import { getInValidPostFields } from './post.services'

const getInValidSectionFields = (section: Section) => {
    const rules: IRule[] = [
        { name: 'name', label: 'Имя', type: 'string', min: 3 },
        { name: 'description', label: 'Описание', type: 'string', min: 3 }
    ]

    const listError: string[] = []

    validationProp(section, rules, listError)

    return listError
}

export const getSections = (domain: string): Promise<ISectionProps[]> => {
    const config = { params: { domain } }

    /*
      data.sections
                                .sort((a: Section, b: Section) => a.name.localeCompare(b.name))
                                .map((section: ISectionProps) => section)
     */

    return apiGet<ISectionProps[]>('sections', urls.GET_SECTIONS, undefined, config)
}

export const addSection = (section: Section): Promise<ISection> => {
    return new Promise<ISection>((resolve, reject) => {
        const listErrors = getInValidSectionFields(section)

        if (!listErrors.length) {
            return apiPost<Section, ISection>('section', urls.CREATE_SECTION, undefined, section)
        } else {
            reject(listErrors)
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const changeSection = (dataToUpdate: Section): Promise<ISection> => {
    return new Promise<ISection>((resolve, reject) => {
        const listErrors = getInValidSectionFields(dataToUpdate)

        if (!listErrors.length) {
            return apiPut<Section, ISection>('section', urls.UPDATE_SECTION_BY_ID, dataToUpdate.id, dataToUpdate)
        } else {
            reject(listErrors)
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const removeSection = (sectionId: string): Promise<void> => {
    return apiDelete(undefined, urls.UPDATE_SECTION_BY_ID, sectionId)
}
