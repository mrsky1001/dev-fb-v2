/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { _baseStoreForList, type WrapperPropsForList } from '../../../../core/stores/_base.store'
import { createToastStore, type IToastStore } from '../toast.store'

import type { IToast, TToastTypes } from '../toast'
import { writable } from 'svelte/store'
import Toast from '../toast'

export interface IAllToastStore extends WrapperPropsForList<IToast, IToastStore> {
    create: (text: string, type?: TToastTypes) => void
    createFromObj: (obj: Omit<IToast, 'id'>) => void
}
/**
 * Функция создания store для списка типа данных Toast
 * @param {IToast[]} rawToasts
 * @returns {IToastStore}
 */
const createAllToastStore = (rawToasts: IToast[]): IAllToastStore => {
    const stores = writable<IToastStore[]>(rawToasts.map((s) => createToastStore(s)))

    return _baseStoreForList<IToast, IToastStore, IAllToastStore>(stores, ({ set, add, all, remove, getStore, getStoreByField, allStores }) => {
        return {
            ...stores,
            set,
            add,
            all,
            remove,
            getStore,
            allStores,
            getStoreByField,
            create(text: string, type: TToastTypes = 'info') {
                const toastInfo = new Toast(text, type)
                const store = createToastStore(toastInfo)

                this.add(store)
            },

            createFromObj(obj: Omit<IToast, 'id'>) {
                this.create(obj.text, obj.type ?? 'info')
            }
        }
    })
}

const toaster = createAllToastStore([])
export default toaster
