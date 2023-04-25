import type {SectionStore} from "./section.store";
import type {ISection, ISectionProps} from "./section";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createSectionStore} from "./section.store";
import type {IBase, WrapperProps, WrapperPropsForList} from "../_base.store";
import type Section from "./section";
import _baseStore, {_baseStoreForList} from "../_base.store";
import {getPosts} from "../../services/post.services";

export interface IAllSectionStore extends WrapperPropsForList<ISection, SectionStore> {
    getActive(): ISection | undefined;

    setLikeStores(rawSections: ISectionProps[]): void

    resetActiveMark(): void;
}

const createAllSectionStore = (): IAllSectionStore => {
    const stores = writable<SectionStore[]>([])

    return _baseStoreForList<ISection, SectionStore, IAllSectionStore>
    (stores, ({init, add, all, getStore, allStores}) => ({
        ...stores, init, add, all, getStore, allStores,

        getActive: () => all()?.find(s => s.isActive),

        setLikeStores: (rawSections: ISectionProps[]) => {
            stores.set(rawSections.map(s => createSectionStore(s)))
        },

        resetActiveMark: () => stores.update(all => all.map(s => {
            s.self().isActive = false;
            return s
        })),
    }))
}

export const allSectionsStore = createAllSectionStore()

