// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getSections} from "../core/lib/services/sections.services";
import type Section from "../core/lib/stores/section/section";
import {ScrollSpyArr} from "../core/components/ScrollSpy/scroll-spy";
import {allSectionsStore} from "../core/lib/stores/section/all-sections.store";

// export const prerender = true;


export const load = async () => {
    const sections: Section[] = await getSections()
    allSectionsStore.set(sections)

    return {}
}

