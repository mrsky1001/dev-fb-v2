import { get } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { Readable } from 'svelte/types/runtime/store'

export interface IBase {
    _id?: string
    id: string
}

export const setStore = (obj: IBase): string => {
    if (obj._id) {
        return obj._id
    } else {
        return obj.id
    }
}

export const setId = (obj: IBase): string => {
    if (obj._id) {
        return obj._id
    } else {
        return obj.id
    }
}

export interface WrapperProps<TClass extends IBase> extends Readable<TClass> {
    init: (s: TClass) => void
    self: () => TClass
    updateByField: (field: keyof TClass, value: TClass[keyof TClass]) => void
}

export default function _baseStore<TClass extends IBase, TStore>(
    store: Writable<TClass>,
    wrapperFn: (args: WrapperProps<TClass>) => TStore
): TStore {
    const { set, update } = store

    const init = (s: TClass) => {
        set(s)
    }

    const self = () => {
        return get(store)
    }

    const updateByField = (field: keyof TClass, value: TClass[keyof TClass]): void => {
        update((s) => {
            s[field] = value
            return s
        })
    }

    return wrapperFn({ ...store, init, self, updateByField })
}

export interface WrapperPropsForList<TClass extends IBase, TStore extends WrapperProps<TClass>>
    extends Writable<TStore[]> {
    add: (s: TStore) => void
    all: () => TClass[]
    set: (s: TStore[]) => void
    getStore: (id: string) => TStore | undefined
    getStoreByField: (field: keyof TClass, value: TClass[keyof TClass]) => TStore | undefined
    allStores: () => TStore[]
}

export function _baseStoreForList<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore>(
    stores: Writable<TStore[]>,
    wrapperFn: (args: WrapperPropsForList<TClass, TStore>) => TAllStore
): TAllStore {
    const { set, update, subscribe } = stores

    // const init = (s: F[]): void => {
    //     set(s)
    // }

    const add = (s: TStore): void => {
        update((old) => [...old, s])
    }

    const all = (): TClass[] => {
        return get(stores).map((s) => s.self())
    }

    const getStore = (id: string): TStore | undefined => {
        return get(stores).find((s) => s.self().id === id)
    }

    const getStoreByField = (field: keyof TClass, value: TClass[keyof TClass]): TStore | undefined => {
        return get(stores).find((s: TStore) => s.self()[field] === value)
    }

    const allStores = (): TStore[] => {
        return get(stores)
    }

    return wrapperFn({ ...stores, set, add, all, getStore, getStoreByField, allStores })
}
