import {writable} from "svelte/store";
import _baseStore, {type WrapperProps} from "../_base.store";
import type {IAnnotation} from "./annotation";
import Annotation from "./annotation";

export type AnnotationStore = WrapperProps<IAnnotation>

export const createAnnotationStore = (s?: IAnnotation): AnnotationStore => {
    const store = writable<IAnnotation>(new Annotation(s))

    return _baseStore(store, ({init, self}) => ({
        ...store, init, self,
    }))
}
