import type { IAnnotationStore } from './annotation.store'
import { get, type Unsubscriber, writable } from 'svelte/store'
import { createAnnotationStore } from './annotation.store'
import type { IAnnotation } from './annotation'

export interface IAllAnnotationStore {
    add(s: IAnnotationStore): void

    getStore(annotation: IAnnotation): IAnnotationStore

    init(annotations: IAnnotation[]): void

    all(): IAnnotation[]

    allStores(): IAnnotationStore[]

    subscribe(v: any): Unsubscriber
}

export const createAllAnnotationStore = () => {
    const stores = writable<IAnnotationStore[]>([])

    return {
        getStore: (annotation: IAnnotation) => {
            return get(stores).find((s) => s.self().id === annotation.id)
        },
        add: (s: IAnnotationStore) => {
            stores.update((old) => [...old, s])
        },
        init: (annotations: IAnnotation[]) => {
            stores.set(annotations.map((s) => createAnnotationStore(s)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map((s) => s.self()),
        subscribe: stores.subscribe
    } as IAllAnnotationStore
}
