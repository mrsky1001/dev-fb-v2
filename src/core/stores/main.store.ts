import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import _baseStore from './_base.store'
import type { IBase, WrapperProps } from './_base.store'
import type { IAllSectionStore } from './section/all-sections.store'
interface IMain extends IBase {
    allSectionsStore: IAllSectionStore
}

export type IMainStore = WrapperProps<IMain>
const createMainStore = (): IMainStore => {
    const store = writable<IMain>()

    return _baseStore(store, ({ init, self }) => ({
        ...store,
        init,
        self
    }))
}

export const mainStore = createMainStore()
