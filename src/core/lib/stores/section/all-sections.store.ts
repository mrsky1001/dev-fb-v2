import type {SectionStore} from "./section.store";
import type {ISection} from "./section";
import {get, type Unsubscriber, writable} from "svelte/store";
import {createSectionStore} from "./section.store";

export interface IAllSectionStore {
    add(s: SectionStore): void;

    getStore(section: ISection): SectionStore;

    set(sections: ISection[]): void;

    all(): ISection[];

    allStores(): SectionStore[];

    resetActiveMark(): void;

    subscribe(v: any): Unsubscriber;
}

const createAllSectionStore = () => {
    const stores = writable<SectionStore[]>([])

    return {
        getStore: (section: ISection) => {
            return get(stores).find(s => s.self().id === section.id)
        },
        add: (s: SectionStore) => {
            stores.update(old => [...old, s])
        },
        set: (sections: ISection[]) => {
            stores.set(sections.map(s => createSectionStore(s)))
        },
        resetActiveMark: () => stores.update(all => all.map(s => {
            s.self().isActive = false;
            return s
        })),
        allStores: () => get(stores),
        all: () => get(stores).map(s => s.self()),
        subscribe: stores.subscribe,
    } as IAllSectionStore
}

export const allSectionsStore = createAllSectionStore()