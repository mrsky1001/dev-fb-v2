/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import type Section from '../stores/section/section'
import type { ISection, ISectionProps } from '../stores/section/section'
import type { IRule } from '../models/interfaces/lib/IRule'
import { validationProp } from '../lib/validation'
import urls from '../../lib/collections/urls'
import { apiDelete, apiGet, apiPost, apiPut } from './api'

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
