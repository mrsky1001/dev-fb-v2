import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IAnnotation } from './annotation'
import Annotation from './annotation'

export type IAnnotationStore = WrapperProps<IAnnotation>

/**
 * Функция создания store для типа данных Annotation
 * @param {IAnnotation} rawAnnotation
 * @returns {IAnnotationStore}
 */
export function createAnnotationStore(rawAnnotation?: IAnnotation): IAnnotationStore {
    const store = writable<IAnnotation>(new Annotation(rawAnnotation))

    return _baseStore(store, ({ init, subscribe, self, updateByField }) => ({
        init,
        subscribe,
        updateByField,
        self
    }))
}
