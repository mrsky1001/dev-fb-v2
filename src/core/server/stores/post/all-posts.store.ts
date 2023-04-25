import type {PostStore} from "./post.store";
import type {IPost} from "./post";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createPostStore} from "./post.store";

export interface IAllPostStore {
    add(s: PostStore): void;

    getStore(post: IPost): PostStore;

    set(posts: IPost[]): void;

    all(): IPost[];

    allStores(): PostStore[];


    subscribe(v: any): Unsubscriber;
}

export const createAllPostStore = () => {
    const stores = writable<PostStore[]>([])

    return {
        getStore: (post: IPost) => {
            return get(stores).find(s => s.self().id === post.id)
        },
        add: (s: PostStore) => {
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

