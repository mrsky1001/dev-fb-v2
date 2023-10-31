import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IToast } from './toast'
import Toast from './toast'

export type IToastStore = WrapperProps<IToast>

/**
 * Функция создания store для типа данных Toast
 * @param {IToast} rawToast
 * @returns {IToastStore}
 */
export const createToastStore = (rawToast: IToast): IToastStore => {
    const store = writable<IToast>(new Toast(rawToast.text, rawToast.type, rawToast.id))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        subscribe,
        init,
        self,
        updateByField
    }))
}
