// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { getSections } from '../core/server/services/sections.services'
import { allSectionsStore } from '../core/server/stores/section/all-sections.store'
import type { ISectionProps } from '../core/server/stores/section/section'

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    return {}
}
