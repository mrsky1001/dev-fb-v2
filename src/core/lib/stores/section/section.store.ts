import {get, type Unsubscriber, writable} from "svelte/store";
import type {ISection} from "./section";
import Section from "./section";
import {allSectionsStore} from "./all-sections.store";

export interface SectionStore {
    set(): void;

    self(): Section;

    setActive(val: boolean): void;

    subscribe(v: any): Unsubscriber;
}

export const createSectionStore = (s: ISection): SectionStore => {
    const store = writable(new Section(s))

    return {
        set: (s: ISection) => store.set(new Section(s)),

        setActive: (val: any) => {
            allSectionsStore.resetActiveMark()
            store.update(s => {
                s.isActive = val
                return s
            })
        },

        self: () => get(store),

        subscribe: store.subscribe,
    } as SectionStore
}


