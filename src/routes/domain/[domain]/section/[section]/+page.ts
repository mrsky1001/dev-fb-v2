// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../../../core/server/services/sections.services'
import Section, { type ISectionProps } from '../../../../../core/stores/section/section'

type TParams = { params: { domain: string; section: string } }

export const load = async ({ params }: TParams) => {
    const sections: Section[] = (await getSections(params.domain)).map((rawS: ISectionProps) => new Section(rawS))

    return {
        domain: params.domain,
        sectionId: params.section,
        sections: sections
    }
}
