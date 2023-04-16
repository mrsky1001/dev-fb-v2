import {get, type Unsubscriber, writable} from "svelte/store";
import type {IAnnotation} from "./annotation";
import Annotation from "./annotation";

export interface AnnotationStore {
    set(): void;

    self(): Annotation;

    subscribe(v: any): Unsubscriber;
}

export const createAnnotationStore = (s: IAnnotation): AnnotationStore => {
    const store = writable(new Annotation(s))

    return {
        set: (s: IAnnotation) => store.set(new Annotation(s)),

        self: () => get(store),

        subscribe: store.subscribe,
    } as AnnotationStore
}


