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

type TParams = { params: { domain: string } }

export const load = async ({ params }: TParams) => {
    console.log('load [  domain] =================')

    let domains = []
    let sections: ISection[] = []

    if (globalStore.self()?.allDomainStore?.all().length) {
        console.log('load [ EXISTS domains] =================')
        domains = globalStore.self()?.allDomainStore?.all() as Domain[]
    } else {
        domains = (await getDomains()).map((rawD: IDomain) => new Domain(rawD))
    }

    if (globalStore.self()?.allSectionStore?.all().length) {
        console.log('load [ section EXISTS sections] =================')
        sections = globalStore.self()?.allSectionStore?.all()
    } else {
        sections = (await getSections(params.domain)).map((rawS: ISectionProps) => new Section(rawS))
        globalStore.update({ allSectionStore: createAllSectionStore(sections as ISectionProps[]) })
    }

    return {
        activeDomain: domains.find((d: IDomain) => d.name === params.domain),
        sections: sections
    }
}
