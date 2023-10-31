/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { get } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { Readable } from 'svelte/types/runtime/store'
import type { IBase } from '../models/base/Base'

/**
 * Функция автоматического определения идентификатора
 * @param {IBase} obj
 * @returns {string}
 */
export function setId(obj: IBase): number {
    if (obj._id) {
        return obj._id
    } else {
        return obj.id
    }
}

/**
 * Интерфейс параметров callback методов для _baseStore
 */
export interface WrapperProps<TClass extends IBase> extends Readable<TClass> {
    init: (s: TClass) => void
    self: () => TClass
    updateByField: (field: keyof TClass, value: TClass[keyof TClass]) => void
}

/**
 * Базовый шаблон для любого store
 * @param {<TClass extends IBase, TStore> Writable<TClass>} store
 * @param {<TClass extends IBase, TStore> (args: WrapperProps<TClass>) => TStore} wrapperFn
 * @returns {<TClass extends IBase, TStore>: TStore}
 */
export default function _baseStore<TClass extends IBase, TStore>(store: Writable<TClass>, wrapperFn: (args: WrapperProps<TClass>) => TStore): TStore {
    const { set, update } = store

    /**
     * Метод инициализации store
     * @param {<TClass extends IBase, TStore> TClass} rawStore
     */
    function init(rawStore: TClass): void {
        set(rawStore)
    }

    /**
     * Метод возврата текущего состояния
     * @returns {<TClass extends IBase, TStore>: TClass}
     */
    function self(): TClass {
        return get(store)
    }

    /**
     * Метод обновления поля по ключу
     * @param {<TClass extends IBase, TStore> keyof TClass} field
     * @param {<TClass extends IBase, TStore> TClass[keyof TClass]} value
     */
    function updateByField(field: keyof TClass, value: TClass[keyof TClass]): void {
        update((s) => {
            s[field] = value
            return s
        })
    }

    return wrapperFn({ ...store, init, self, updateByField })
}

/**
 * Интерфейс параметров callback методов для _baseStoreForList
 */
export interface WrapperPropsForList<TClass extends IBase, TStore extends WrapperProps<TClass>> extends Writable<TStore[]> {
    add: (s: TStore) => void
    all: () => TClass[]
    remove: (id: number) => void
    set: (s: TStore[]) => void
    getStore: (id: number) => TStore | undefined
    getStoreByField: (field: keyof TClass, value: TClass[keyof TClass]) => TStore | undefined
    allStores: () => TStore[]
}

/**
 * Базовый шаблон store в виде списка
 * @param {<TClass extends IBase, TStore extends WrapperProps<TClass> Writable<TStore[]>} stores
 * @param {<TClass extends IBase, TStore extends WrapperProps<TClass> (args: WrapperPropsForList<TClass, TStore>) => TAllStore} wrapperFn
 * @returns {<TClass extends IBase, TStore extends WrapperProps<TClass> TAllStore}
 */
export function _baseStoreForList<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore>(
    stores: Writable<TStore[]>,
    wrapperFn: (args: WrapperPropsForList<TClass, TStore>) => TAllStore
): TAllStore {
    const { set, update } = stores

    /**
     * Метод получения списка данных в store
     * @returns {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TClass[]}
     */
    function all(): TClass[] {
        return get(stores).map((s) => s.self())
    }

    /**
     * Метод получения store по id
     * @param {number} id
     * @returns {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TStore | undefined}
     */
    function getStore(id: number): TStore | undefined {
        return get(stores).find((s) => s.self().id === id)
    }

    /**
     * Метод получения store по ключу
     * @param {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> keyof TClass} field
     * @param {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TClass[keyof TClass]} value
     * @returns {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TStore | undefined}
     */
    function getStoreByField(field: keyof TClass, value: TClass[keyof TClass]): TStore | undefined {
        return get(stores).find((s: TStore) => s.self()[field] === value)
    }

    /**
     * Метод всех store
     * @returns {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TStore[]}
     */
    function allStores(): TStore[] {
        return get(stores)
    }

    /**
     * Метод добавления store в список
     * @param {<TClass extends IBase, TStore extends WrapperProps<TClass>, TAllStore> TStore} rawStore
     */
    function add(rawStore: TStore): void {
        update((old) => [...old, rawStore])
    }

    /**
     * Метод удаления store из списка
     * @param {number} id
     */
    const remove = (id: number): void => {
        return stores.set([...get(stores).filter((s) => s.self().id !== id)])
    }

    return wrapperFn({ ...stores, set, add, remove, all, getStore, getStoreByField, allStores })
}
