// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { getSections } from '../../../../../core/server/services/sections.services'
import Section, { type ISection, type ISectionProps } from '../../../../../core/stores/section/section'
import { globalStore } from '../../../../../core/stores/global.store'
import Domain, { type IDomain } from '../../../../../core/stores/domain/domain'
import { getDomains } from '../../../../../core/server/services/domains.services'
import { createAllSectionStore } from '../../../../../core/stores/section/all-sections.store'
import type { IPost } from '../../../../../core/stores/post/post'
import { getPost, getPosts } from '../../../../../core/server/services/post.services'
import Post from '../../../../../core/stores/post/post'
import storeLoader from '../../../../../core/subscriber/storeLoader'

type TParams = { params: { domain: string; section: string } }
export const load = async ({ params }: TParams) => {
    return {
        sections: await storeLoader.loadSections(params.domain),
        posts: await storeLoader.loadPosts(params.domain, params.section),
        activeDomain: await storeLoader.getActiveDomain(params.domain),
        activeSection: await storeLoader.getActiveSection(params.domain, params.section)
    }
}
