// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getSections} from "../core/lib/services/sections.services";
import {allSectionsStore} from "../core/lib/stores/section/all-sections.store";
import type {ISection, ISectionProps} from "../core/lib/stores/section/section";

// export const prerender = true;


export const load = async () => {
    const sections: ISectionProps[] = await getSections()
    allSectionsStore.set(sections)
    sections.length && allSectionsStore.getStore(sections[0]._id).setActive(true)

    return {}
}

