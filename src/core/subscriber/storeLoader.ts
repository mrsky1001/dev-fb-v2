import { globalStore } from '../stores/global.store'
import Domain, { type IDomain } from '../stores/domain/domain'
import Section, { type ISection, type ISectionProps } from '../stores/section/section'
import Post, { type IPost } from '../stores/post/post'
import { getDomains } from '../server/services/domains.services'
import { getSections } from '../server/services/sections.services'
import { createAllSectionStore } from '../stores/section/all-sections.store'
import { getPosts } from '../server/services/post.services'
import type { IDomainStore } from '../stores/domain/domain.store'

class StoreLoader {
    private _getAllDomainStore = () => globalStore.self()?.allDomainStore

    private _getAllSectionStore = () => globalStore.self()?.allSectionStore

    private _getAllPostStore = () => globalStore.self()?.allSectionStore?.getActiveStore()?.self().allPostStore

    getActiveDomain = async (domain?: string) => {
        const savedDomain = this._getAllDomainStore()?.getActive()

        if (!savedDomain) {
            await this.loadDomains()
            return this._domains.find((d) => d.name === domain)
        }

        return savedDomain
    }

    getActiveSection = async (domain?: string, sectionId?: string) => {
        const savedSection = this._getAllSectionStore()?.getActive()

        if (!savedSection && domain) {
            await this.loadSections(domain)
            return this._sections.find((s) => s.id === sectionId)
        }

        return savedSection
    }

    getActivePost = async (domain?: string, sectionId?: string) => {
        const savedPost = this._getAllPostStore()?.getActive()

        if (!savedPost && domain) {
            await this.loadPosts(domain, sectionId)
            return this._sections.find((s) => s.id === sectionId)
        }

        return savedPost
    }

    get domains() {
        return this._domains
    }
    get sections() {
        return this._sections
    }
    get posts() {
        return this._posts
    }

    private _domains: IDomain[] = []
    private _sections: ISection[] = []
    private _posts: IPost[] = []

    async loadDomains(): Promise<IDomain[]> {
        if (this._getAllDomainStore()?.all().length) {
            this._domains = this._getAllDomainStore()?.all() as Domain[]
        } else {
            this._domains = (await getDomains()).map((rawD: IDomain) => new Domain(rawD))
        }

        return this._domains
    }

    async loadSections(domain: string): Promise<ISection[]> {
        if (this._getAllSectionStore()?.all().length) {
            this._sections = this._getAllSectionStore()?.all()
        } else {
            this._sections = (await getSections(domain)).map((rawS: ISectionProps) => new Section(rawS))
            globalStore.update({ allSectionStore: createAllSectionStore(this._sections as ISectionProps[]) })
        }

        const domainStore = this._getAllDomainStore()
            ?.allStores()
            .find((d: IDomainStore) => d.self().name === domain)
        domainStore?.setActive(true)

        return this._sections
    }

    async loadPosts(domain: string, sectionId: string): Promise<IPost[]> {
        if (this._getAllPostStore()?.all().length) {
            this._posts = this._getAllPostStore()?.all() as Post[]
        } else {
            this._posts = (await getPosts(domain, sectionId)).map((raw: IPost) => new Post(raw))
            globalStore.self().allSectionStore.getActive()?.allPostStore.init(this._posts)
        }

        // const domainStore = this._getAllDomainStore()?.allStores().find((d: IDomainStore) => d.self().name === domain)
        // domainStore?.setActive(true)

        return this._posts
    }
}

const storeLoader = new StoreLoader()

export default storeLoader
