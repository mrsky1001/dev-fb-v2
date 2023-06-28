// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../../../../../core/server/services/sections.services'
import type { ISectionProps } from '../../../../../../../core/stores/section/section'
import Section from '../../../../../../../core/stores/section/section'

type TParams = { params: { domain: string; section: string; post: string } }

export const load = async ({ params }: TParams) => {
    const sections: Section[] = (await getSections(params.domain)).map((rawS: ISectionProps) => {
        rawS.isActive = rawS._id === params.section
        return new Section(rawS)
    })

    console.log('load [post section domain] =================')

    return {
        domain: params.domain,
        sectionId: params.section,
        postUrlTitle: params.post,
        sections: sections
    }
}
