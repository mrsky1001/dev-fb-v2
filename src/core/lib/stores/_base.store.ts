import {get} from "svelte/store";
import type {Writable} from "svelte/store";

export interface IBase {
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

export interface WrapperPropsForList<F extends IBase, T extends WrapperProps<F>> extends Writable<T[]> {
    add: (s: T) => void;
    all: () => F[];
    init: (s: T[]) => void;
    getStore: (id: string) => (T | undefined);
    allStores: () => T[]
}

export function _baseStoreForList<F extends IBase, T extends WrapperProps<F>, I>(
    stores: Writable<T[]>,
    wrapperFn: (args: WrapperPropsForList<F, T>) => I
): I {
    const {set, update, subscribe} = stores;

    const init = (s: T[]): void => {
        set(s)
    }

    const add = (s: T): void => {
        update((old) => [...old, s])
    }

    const all = (): F[] => {
        return get(stores).map(s => s.self())
    }

    const getStore = (id: string): T | undefined => {
        return get(stores).find(s => s.self().id === id)
    }
    const allStores = (): T[] => {
        return get(stores);
    }

    return wrapperFn({...stores, init, add, all, getStore, allStores});
}