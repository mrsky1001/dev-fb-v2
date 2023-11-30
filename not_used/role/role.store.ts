import type { WrapperProps } from '../../src/core/stores/_base.store'
import type { IRole } from './role'
import Role from './role'
import { writable } from 'svelte/store'
import _baseStore from '../../src/core/stores/_base.store'

export type IRoleStore = WrapperProps<IRole>

/**
 * Функция создания store для типа данных Role
 * @param {IRole} rawRole
 * @returns {IRoleStore}
 */
export function createRoleStore(rawRole?: IRole): IRoleStore {
    const store = writable<IRole>(new Role(rawRole))

    return _baseStore(store, ({ init, subscribe, updateByField, self }) => ({
        init,
        subscribe,
        updateByField,
        self
    }))
}
