/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../../../core/stores/_base.store'
import type { IDomain } from './domain'
import Domain from './domain'
import { globalStore } from '../../../core/stores/global.store'

export interface IDomainStore extends WrapperProps<IDomain> {
    setActive(val: boolean): void
}

/**
 * Функция создания store для типа данных Domain
 * @param {IDomain} rawDomain
 * @returns {IDomainStore}
 */
export function createDomainStore(rawDomain?: IDomain): IDomainStore {
    const store = writable<IDomain>(new Domain(rawDomain))

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
