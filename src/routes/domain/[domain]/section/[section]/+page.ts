// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../../../core/server/services/sections.services'
import Section, { ISection, type ISectionProps } from '../../../../../core/stores/section/section'
import { globalStore } from '../../../../../core/stores/global.store'
import Domain, { type IDomain } from '../../../../../core/stores/domain/domain'
import { getDomains } from '../../../../../core/server/services/domains.services'
import { createAllSectionStore } from '../../../../../core/stores/section/all-sections.store'
import type { IPost } from '../../../../../core/stores/post/post'
import { getPost, getPosts } from '../../../../../core/server/services/post.services'
import Post from '../../../../../core/stores/post/post'

type TParams = { params: { domain: string; section: string } }

export const load = async ({ params }: TParams) => {
    console.log('load [ section domain] =================')

    const allDomainStore = globalStore.self()?.allDomainStore
    const allSectionStore = globalStore.self()?.allSectionStore

    let domains: IDomain[] = []
    let sections: ISection[] = []
    let posts: IPost[] = []

    if (allDomainStore?.all().length) {
        console.log('load [ EXISTS domains] =================')
        domains = allDomainStore?.all() as Domain[]
    } else {
        domains = (await getDomains()).map((rawD: IDomain) => new Domain(rawD))
    }

    if (allSectionStore?.all().length) {
        console.log('load [ section EXISTS sections] =================')
        sections = allSectionStore?.all()
    } else {
        sections = (await getSections(params.domain)).map((rawS: ISectionProps) => new Section(rawS))
        globalStore.update({ allSectionStore: createAllSectionStore(sections as ISectionProps[]) })
    }

    const activeDomain = domains.find((d: IDomain) => d.name === params.domain)
    const activeSection = sections.find((d: ISection) => d.name === params.section)
    allSectionStore?.allStores()

    const allPostStore = activeSection?.allPostStore

    if (allPostStore?.all().length) {
        console.log('load [ section EXISTS posts] =================')
        posts = allPostStore?.all()
    } else {
        posts = (await getPosts(params.domain, params.section)).map((raw: IPost) => new Post(raw))
    }

    return {
        activeDomain: domains.find((d: IDomain) => d.name === params.domain),
        activeSection: sections.find((d: ISection) => d.name === params.section),
        sections: sections,
        posts: posts
    }
}
