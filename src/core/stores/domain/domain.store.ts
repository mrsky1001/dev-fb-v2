import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IDomain } from './domain'
import Domain from './domain'

export type IDomainStore = WrapperProps<IDomain>

export const createDomainStore = (s?: IDomain): IDomainStore => {
    const store = writable<IDomain>(new Domain(s))

    return _baseStore(store, ({ init, self }) => ({
        ...store,
        init,
        self
    }))
}
