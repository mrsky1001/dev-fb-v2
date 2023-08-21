// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../../../../../core/server/services/sections.services'
import type { ISectionProps } from '../../../../../../../core/stores/section/section'
import Section from '../../../../../../../core/stores/section/section'
import storeLoader from '../../../../../../../core/subscriber/storeLoader'

type TParams = { params: { domain: string; section: string; post: string } }

export const load = async ({ params }: TParams) => {
    return {
        domain: await storeLoader.getActiveDomain(params.domain),
        section: await storeLoader.getActiveSection(params.domain, params.section)
    }
}
