import { writable } from 'svelte/store'
import _baseStore from './_base.store'
import type { IBase, WrapperProps } from './_base.store'
import type { IAllSectionStore } from './section/all-sections.store'
import type { IAllDomainStore } from './domain/all-domain.store'

/**
 * Интерфейс для общего store
 */
interface IGlobal extends IBase {
    allDomainStore: IAllDomainStore
    allSectionStore: IAllSectionStore
}

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
