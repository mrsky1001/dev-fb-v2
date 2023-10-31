import { _baseStoreForList, type WrapperPropsForList } from '../_base.store'
import { createToastStore, type IToastStore } from './toast.store'

import type { IToast } from './toast'
import { writable } from 'svelte/store'

export type IAllToastStore = WrapperPropsForList<IToast, IToastStore>

/**
 * Функция создания store для списка типа данных Toast
 * @param {IToast[]} rawToasts
 * @returns {IToastStore}
 */
const createAllToastStore = (rawToasts: IToast[]): IAllToastStore => {
    const stores = writable<IToastStore[]>(rawToasts.map((s) => createToastStore(s)))

    return _baseStoreForList<IToast, IToastStore, IAllToastStore>(
        stores,
        ({ set, add, all, remove, getStore, getStoreByField, allStores }) => {
            return {
                ...stores,
                set,
                add,
                all,
                remove,
                getStore,
                allStores,
                getStoreByField
            }
        }
    )
}

const toaster = createAllToastStore([])
export default toaster
