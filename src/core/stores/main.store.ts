import { writable } from 'svelte/store'
import _baseStore from './_base.store'
import type { IBase, WrapperProps } from './_base.store'
import type { IAllSectionStore } from './section/all-sections.store'
import { nanoid } from 'nanoid'
import { createAllSectionStore } from './section/all-sections.store'

interface IMain extends IBase {
    allSectionsStore: IAllSectionStore
}

export interface IMainStore extends WrapperProps<IMain> {
    updateAllSectionsStore(allSectionsStore: IAllSectionStore): void
}

const createMainStore = (): IMainStore => {
    const store = writable<IMain>()

    const updateAllSectionsStore = (allSectionsStore: IAllSectionStore) => {
        store.update((s) => {
            if (!s) {
                return { id: nanoid(), allSectionsStore }
            }

            s.allSectionsStore = allSectionsStore
            return s
        })
    }

    return _baseStore(store, ({ init, self }) => ({
        ...store,
        init,
        self,
        updateAllSectionsStore
    }))
}

export const mainStore = createMainStore()
