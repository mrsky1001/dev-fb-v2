import { writable } from 'svelte/store'
import _baseStore from './_base.store'
import type { IBase, WrapperProps } from './_base.store'

/**
 * Интерфейс для общего store
 */
type IGlobal = IBase

/**
 * Интерфейс для общего store
 */
export interface IGlobalStore extends WrapperProps<IGlobal> {
    update(rawStore: Partial<IGlobal>): void
}

/**
 * Функция создания общего store
 */
function createGlobalStore(): IGlobalStore {
    const store = writable<IGlobal>()

    const updateStore = (rawStore: Partial<IGlobal>) => {
        store.update((s) => {
            return { ...s, ...rawStore }
        })
    }

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        self,
        subscribe,
        updateByField,
        update: updateStore
    }))
}

export const globalStore = createGlobalStore()
