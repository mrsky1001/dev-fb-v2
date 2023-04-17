import type {ISectionStore} from "./ISectionStore";
import type {ISection, ISectionProps} from "./section";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createSectionStore} from "./ISectionStore";
import type {IBase, WrapperProps, WrapperPropsForList} from "../_base.store";
import type Section from "./section";
import _baseStore, {_baseStoreForList} from "../_base.store";
import {getPosts} from "../../services/post.services";

export interface IAllSectionStore extends WrapperPropsForList<ISection, ISectionStore> {
    getActive(): ISection | undefined;

    resetActiveMark(): void;
}

const createAllSectionStore = (): IAllSectionStore => {
    const stores = writable<ISectionStore[]>([])

    return _baseStoreForList<ISection, ISectionStore, IAllSectionStore>
    (stores, ({init, add, all, getStore, allStores}) => ({
        ...stores, init, add, all, getStore, allStores,
        getActive: () => all()?.find(s => s.isActive),

        resetActiveMark: () => stores.update(all => all.map(s => {
            s.self().isActive = false;
            return s
        })),
    }))
}

export const allSectionsStore = createAllSectionStore()

