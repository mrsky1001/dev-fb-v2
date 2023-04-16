import type {Readable, Unsubscriber} from 'svelte/store';

/** List of Readable stores */
type Stores = [Readable<any>, ...Array<Readable<any>>] | Array<Readable<any>>;

/** Values from a list of Readable stores */
type StoresValues<T> = {
    [K in keyof T]: T[K] extends Readable<infer U> ? U : never;
};

/** Does nothing (no operation) */
function noop() {
}

/**
 * Subscribe to multiple svelte stores at once.
 * @param stores - List of stores to subscribe to.
 * @param callback - Callback that is called with the store values each time one of stores was updated.
 */
export function subscribeAll<S extends Stores>(stores: S, callback: (values: StoresValues<S>) => Unsubscriber | void): Unsubscriber {
    // Most of the logic was taken from the derived function in `svelte/stores`

    let initiated = false; // This prevents sync before all stores where subscribed
    const values = new Array(stores.length);

    let pending = 0; // Binary with one bit for each store
    let cleanup: Unsubscriber = noop; // Cleanup function

    const sync = () => {
        if (pending) return;

        cleanup();
        const result = callback(values as StoresValues<S>);

        cleanup = typeof result == 'function' ? result : noop;
    };

    const unsubscribeFunctions = stores.map((store, i) => store.subscribe(
        value => {
            values[i] = value;
            pending &= ~(1 << i);

            if (initiated) {
                sync();
            }
        },
        () => {
            pending |= (1 << i);
        },
    ));

    initiated = true;
    sync();

    return function unsubscribeAll() {
        for (const unsubscribe of unsubscribeFunctions) {
            unsubscribe();
        }

        cleanup();
    };
}