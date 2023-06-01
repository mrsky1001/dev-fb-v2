import { writable } from 'svelte/store'
import _baseStore from './_base.store'
import type { IBase, WrapperProps } from './_base.store'
import type { IAllSectionStore } from './section/all-sections.store'
import type { IAllDomainStore } from './domain/all-domain.store'

interface IGlobal extends IBase {
    allDomainsStore: IAllDomainStore
    allSectionsStore: IAllSectionStore
}

export interface IGlobalStore extends WrapperProps<IGlobal> {
    update(rawStore: Partial<IGlobal>): void
}

const createGlobalStore = (): IGlobalStore => {
    const store = writable<IGlobal>()

    // const _initGlobal = (s: IGlobal, init: (s: IGlobal) => void) => {
    //     init(s)
    // }

    const updateStore = (rawStore: Partial<IGlobal>) => {
        store.update((s) => {
            return { ...s, ...rawStore }
        })
    }

    return _baseStore(store, ({ init, subscribe, self }) => ({
        subscribe,
        init,
        // init: (s) => _initGlobal(s, init),
        self,
        update: updateStore
    }))
}

export const globalStore = createGlobalStore()
