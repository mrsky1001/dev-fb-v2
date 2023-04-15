import {get} from "svelte/store";
import type {Writable} from "svelte/store";

interface WrapperProps<T> extends Writable<T> {
    _set: (args: Partial<T>) => void;
    _get: () => T;
}

export default function _baseStore<T, I>(
    store: Writable<T>,
    wrapperFn: (args: WrapperProps<T>) => I
): I {
    const {update, subscribe} = store;

    function _set(args: Partial<T>) {
        store.update((st) => ({
            ...st,
            ...args,
        }));
    }

    function _get(): T {
        return get(store);
    }

    // function _syncToLocal(key: string) {
    //     return subscribe((val) => {
    //         localStorage.setItem(key, JSON.stringify(val));
    //     });
    // }

    return wrapperFn({...store, _set, _get});
}
