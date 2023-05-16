// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import type { ISectionProps } from '../../../core/server/stores/section/section'
import { getSections } from '../../../core/server/services/sections.services'
import { allSectionsStore } from '../../../core/server/stores/section/all-sections.store'

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
    console.log('info')
    console.log(params)
    const sections: ISectionProps[] = await getSections(params.domain)
    console.log(sections)

    allSectionsStore.setLikeStores(sections)

    sections.length && allSectionsStore.getStore(sections[0]?._id)?.setActive(true)
    return {}
}
