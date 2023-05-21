// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import type { ISectionProps } from '../../../../../core/stores/section/section'
import { getSections } from '../../../../../core/server/services/sections.services'

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
    // console.log('info')
    // console.log(params)
    // const sections: ISectionProps[] = await getSections(params.domain)
    //
    // allSectionsStore.setRawData(sections)
    //
    // sections.length && allSectionsStore.getStore(params.section)?.setActive(true)
    // return { params }
}
