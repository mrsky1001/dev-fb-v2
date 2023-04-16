import {get, type Unsubscriber, writable} from "svelte/store";
import type {IPost} from "./post";
import Post from "./post";
import _baseStore, {type  WrapperProps} from "../_base.store";

export type PostStore = WrapperProps<IPost>

export const createPostStore = (s: IPost): PostStore => {
    const store = writable<IPost>(new Post(s))

    return _baseStore(
        store,
        ({init, self}) => {

            return {
                ...store,
                init,
                self,
            };
        }
    );
}


