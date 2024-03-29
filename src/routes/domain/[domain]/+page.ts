// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import type { ISectionProps } from '../../../core/stores/section/section'
import { getSections } from '../../../core/server/services/sections.services'
import type { IDomain } from '../../../core/stores/domain/domain'
import type Section from '../../../core/stores/section/section'
import { globalStore } from '../../../core/stores/global.store'

export const load = async (info) => {
    const sections: Section[] = await getSections(info.params.domain)

    // allSectionsStore.setLikeStores(sections)
    // allSectionsStore.getStore(sections[0]?._id)?.setActive(true)

    // const activeSection = allSectionsStore.all().find((s) => s.id === sections[0]?._id)
    //
    // console.log('posts')
    // console.log(activeSection)
    // console.log(activeSection?.allPostStore.all())

    return {
        domain: info.params.domain,
        sections: sections
    }
}
