/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import Section from "../models/classes/article/Section";
import type {IRule} from "../models/interfaces/lib/IRule";
import {validationProp} from "../lib/validation";
import urls from "../collections/urls";
import api from "./api";
import type {AxiosError, AxiosResponse} from "axios";
import {handlerError, responseHandler} from "../lib/response-handler";
import config from "../../config/config";
import type {ISection} from "../models/interfaces/article/ISection";

const getInValidSectionFields = (section: Section) => {
    const rules: IRule[] = [
        {name: 'name', label: 'Имя', type: 'string', min: 3},
        {name: 'description', label: 'Описание', type: 'string', min: 3},
    ]

    const listError: string[] = []

    validationProp(section, rules, listError)

    return listError
}

export const getSection = (sectionId: string): Promise<Section> => {
    return new Promise<Section>((resolve, reject) => {
        const url = `${urls.GET_SECTION_BY_ID}/${sectionId}`

        api()
            .get(url)
            .then((res: AxiosResponse) => {
                responseHandler(res, null, false)
                    .then((data) => resolve(new Section(data.section)))
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}

export const getSections = (): Promise<Section[]> => {
    return new Promise<Section[]>((resolve, reject) => {
        api()
            .get(`${urls.GET_SECTIONS}`, {params: {domain: config.server.domain}})
            .then((res: AxiosResponse) => {
                responseHandler(res, undefined, false)
                    .then((data) => resolve(data.sections.map((section: ISection) => new Section(section))))
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
export const addSection = (section: Section): Promise<Section> => {
    return new Promise<Section>((resolve, reject) => {
        section.domain = config.server.domain

        const listErrors = getInValidSectionFields(section)

        if (!listErrors.length) {
            api()
                .post(urls.CREATE_SECTION, section)
                .then((res: AxiosResponse) => {
                    responseHandler(res)
                        .then((data) => resolve(new Section(data.section)))
                        .catch((err: AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    handlerError(err)
                    reject(err)
                })
        } else {
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}

export const editSection = (section: Section): Promise<Section> => {
    return new Promise<Section>((resolve, reject) => {
        const listErrors = getInValidSectionFields(section)

        if (!listErrors.length) {
            const url = `${urls.UPDATE_SECTION_BY_ID}/${section.id}`

            api()
                .put(url, section)
                .then((res: AxiosResponse) => {
                    responseHandler(res)
                        .then((data) => resolve(new Section(data.section)))
                        .catch((err: AxiosError) => {
                            handlerError(err)
                            reject(err)
                        })
                })
                .catch((err: AxiosError) => {
                    handlerError(err)
                    reject(err)
                })
        } else {
            // const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
            // vxc.snackbar.setSnackBarMsg(msg)
        }
    })
}
export const deleteSection = (sectionId: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const url = `${urls.UPDATE_SECTION_BY_ID}/${sectionId}`

        api()
            .delete(url)
            .then((res: AxiosResponse) => {
                responseHandler(res)
                    .then(() => resolve())
                    .catch((err: AxiosError) => {
                        handlerError(err)
                        reject(err)
                    })
            })
            .catch((err: AxiosError) => {
                handlerError(err)
                reject(err)
            })
    })
}
