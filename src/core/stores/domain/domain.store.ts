import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IDomain } from './domain'
import Domain from './domain'
import { globalStore } from '../global.store'

export interface IDomainStore extends WrapperProps<IDomain> {
    setActive(val: boolean): void
}

export const createDomainStore = (s?: IDomain): IDomainStore => {
    const store = writable<IDomain>(new Domain(s))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        subscribe,
        init,
        self,
        updateByField,

        setActive: (val = true): void => {
            // const section = get(store)

            globalStore.self().allDomainStore.resetActiveMark()

            store.update((s) => {
                s.isActive = val
                return s
            })
        }
    }))
}
