import type {AnnotationStore} from "./annotation.store";
import type {IPost} from "./post";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createPostStore} from "./annotation.store";

export interface IAllPostStore {
    add(s: AnnotationStore): void;

    getStore(post: IPost): AnnotationStore;

    set(posts: IPost[]): void;

    all(): IPost[];

    allStores(): AnnotationStore[];


    subscribe(v: any): Unsubscriber;
}

export const createAllPostStore = () => {
    const stores = writable<AnnotationStore[]>([])

    return {
        getStore: (post: IPost) => {
            return get(stores).find(s => s.self().id === post.id)
        },
        add: (s: AnnotationStore) => {
            stores.update(old => [...old, s])
        },
        set: (posts: IPost[]) => {
            stores.set(posts.map(s => createPostStore(s)))
        },
        allStores: () => get(stores),
        all: () => get(stores).map(s => s.self()),
        subscribe: stores.subscribe,
    } as IAllPostStore
}

