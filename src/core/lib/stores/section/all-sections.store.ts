import type {SectionStore} from "./section.store";
import type {ISection, ISectionProps} from "./section";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createSectionStore} from "./section.store";
import type {WrapperPropsForList} from "../_base.store";
import Section from "./section";

export interface IAllSectionStore extends WrapperPropsForList<SectionStore []> {
    getStore(sectionId: string): SectionStore;

    getActive(): ISection;

    add(s: SectionStore): void;

    set(sections: ISectionProps[]): void;

    resetActiveMark(): void;

}

const createAllSectionStore = () => {
    const stores = writable<SectionStore[]>([])

    return {
        getStore: (sectionId: string) => {
            return get(stores).find(s => s.self().id === sectionId)
        },
        getActive: () => get(stores)?.find(s => s.self().isActive)?.self(),
        add: (s: SectionStore) => {
            stores.update(old => [...old, s])
        },
        set: (sections: ISectionProps[]) => {
            stores.set(sections.map(s => createSectionStore(s)))
        },
        resetActiveMark: () => stores.update(all => all.map(s => {
            s.self().isActive = false;
            return s
        })),
        all: () => get(stores).map(s => s.self()),
        allStores: () => get(stores),
        subscribe: stores.subscribe,
    } as IAllSectionStore
}

export const allSectionsStore = createAllSectionStore()