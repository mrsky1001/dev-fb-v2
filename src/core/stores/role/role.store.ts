import type { WrapperProps } from '../_base.store'
import type { IRole } from './role'
import Role from './role'
import { writable } from 'svelte/store'
import _baseStore from '../_base.store'

export type IRoleStore = WrapperProps<IRole>

export const createRoleStore = (s?: IRole): IRoleStore => {
    const store = writable<IRole>(new Role(s))

    return _baseStore(store, ({ init, subscribe, updateByField, self }) => ({
        init,
        subscribe,
        updateByField,
        self
    }))
}
