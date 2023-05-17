// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import type { ISectionProps } from '../../../core/server/stores/section/section'
import { getSections } from '../../../core/server/services/sections.services'
import { allSectionsStore } from '../../../core/server/stores/section/all-sections.store'

export const load = async (info) => {
    console.log('info domain')
    console.log(info)
    const sections: ISectionProps[] = await getSections(info.params.domain)
    console.log(sections)

    allSectionsStore.setLikeStores(sections)

    allSectionsStore.getStore(sections[0]?._id)?.setActive(true)

    const activeSection = allSectionsStore.all().find((s) => s.id === sections[0]?._id)

    return {
        activeSection: activeSection,
        posts: activeSection?.allPostStore.all()
    }
}
