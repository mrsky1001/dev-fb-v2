import {get, writable} from "svelte/store";
import type {ISection, ISectionProps} from "./section";
import Section from "./section";
import {allSectionsStore} from "./all-sections.store";
import {getPosts} from "../../services/post.services";
import _baseStore, {type WrapperProps} from "../_base.store";

export interface ISectionStore extends WrapperProps<ISection> {
    setActive(val: boolean): void;
}

export const createSectionStore = (s: ISectionProps): ISectionStore => {
    const store = writable<ISection>(new Section(s))

    return _baseStore(store, ({init, self}) => ({
        ...store, init, self,
        setActive: (val: boolean) => {
            const section = get(store)

            allSectionsStore.resetActiveMark()

            getPosts(section.id, new Date()).then(posts => {
                store.update(s => {
                    s.isActive = val
                    s.setPosts(posts)
                    return s
                })
            })
        }
    }))
}


