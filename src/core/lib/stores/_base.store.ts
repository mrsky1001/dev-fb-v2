import {get, Readable, Updater} from "svelte/store";
import type {Writable} from "svelte/store";

interface IBase {
    id: string
}

export interface WrapperProps<T extends IBase> extends Writable<T> {
    init: (s: T) => void;
    self: () => T;
}

export default function _baseStore<T extends IBase, I>(
    store: Writable<T>,
    wrapperFn: (args: WrapperProps<T>) => I
): I {
    const {set} = store;

    const init = (s: T) => {
        set(s)
    }

    const self = () => {
        return get(store);
    }

    return wrapperFn({...store, init, self});
}

export interface WrapperPropsForList<F extends IBase, T extends WrapperProps<F>> extends Writable<T> {
    init: (s: T[]) => void;
    add: (s: T) => void;
    all: () => T[];

    getStore: (id: string) => T | undefined;
    allStores: () => T[];
}

export function _baseStoreForList<F extends IBase, T, I>(
    stores: Writable<T[]>,
    wrapperFn: (args: WrapperPropsForList<F, T extends WrapperProps<F>>) => I
): I {
    const {set, update, subscribe} = stores;

    const init = (s: T[]) => {
        set(s)
    }

    const add = (s: T): void => {
        update((old) => [...old, s])
    }

    const all = () => {
        return get(stores);
    }

    const getStore = (id: string) => {
        return get(stores).find(s => s.self().id === id)
    }
    const allStores = (): Writable<T[]> => {
        return stores;
    }

    return wrapperFn({...stores, init, add, all, getStore, allStores});
}
