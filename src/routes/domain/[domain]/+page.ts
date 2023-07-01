// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../core/server/services/sections.services'
import Section, { type ISection } from '../../../core/stores/section/section'
import type { ISectionProps } from '../../../core/stores/section/section'
import { globalStore } from '../../../core/stores/global.store'
import { getDomains } from '../../../core/server/services/domains.services'
import type { IDomain } from '../../../core/stores/domain/domain'
import Domain from '../../../core/stores/domain/domain'
import { createAllSectionStore } from '../../../core/stores/section/all-sections.store'
import storeLoader from '../../../core/subscriber/storeLoader'

type TParams = { params: { domain: string } }

export const load = async ({ params }: TParams) => {
    return {
        promiseSections: storeLoader.loadSections(params.domain),
        promiseActiveDomain: storeLoader.getActiveDomain(params.domain)
    }
}
