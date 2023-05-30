import { writable } from 'svelte/store'
import _baseStore, { type WrapperProps } from '../_base.store'
import type { IAnnotation } from './annotation'
import Annotation from './annotation'

export type IAnnotationStore = WrapperProps<IAnnotation>

export const createAnnotationStore = (s?: IAnnotation): IAnnotationStore => {
    const store = writable<IAnnotation>(new Annotation(s))

    return _baseStore(store, ({ init, self }) => ({
        init,
        self
    }))
}
