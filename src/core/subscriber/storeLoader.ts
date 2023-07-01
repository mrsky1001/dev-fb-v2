import { globalStore } from '../stores/global.store'
import Domain, { type IDomain } from '../stores/domain/domain'
import Section, { type ISection, type ISectionProps } from '../stores/section/section'
import Post, { type IPost } from '../stores/post/post'
import { getDomains } from '../server/services/domains.services'
import { getSections } from '../server/services/sections.services'
import { createAllSectionStore } from '../stores/section/all-sections.store'
import { getPostByTitle, getPosts } from '../server/services/post.services'
import type { IDomainStore } from '../stores/domain/domain.store'
import { P } from 'flowbite-svelte'

class StoreLoader {
  private _getAllDomainStore = () => globalStore.self()?.allDomainStore

  private _getAllSectionStore = () => globalStore.self()?.allSectionStore

  private _getAllPostStore = () => globalStore.self()?.allSectionStore?.getActiveStore()?.self().allPostStore

  getActiveDomain = async (domain?: string) => {
    return new Promise((resolve, reject) => {
      const savedDomain = this._getAllDomainStore()?.getActive()

      if (!savedDomain) {
        this.loadDomains()
          .then((domains) => {
            resolve(domains.find((d) => d.name === domain))
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(savedDomain)
      }
    })
  }

  getActiveSection = async (domain?: string, sectionId?: string) => {
    return new Promise((resolve, reject) => {
      const savedSection = this._getAllSectionStore()?.getActive()

      if (!savedSection && domain) {
        this.loadSections(domain)
          .then((sections) => {
            resolve(sections.find((s) => s.id === sectionId))
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(savedSection)
      }
    })
  }

  getActivePost = async (domain?: string, sectionId?: string, postUrlTitle?: string) => {
    return new Promise((resolve, reject) => {
      const savedPost = this._getAllPostStore()?.getActive()

      if (!savedPost && domain && sectionId && postUrlTitle) {
        getPostByTitle(postUrlTitle)
          .then((rawPost) => {
            const post = new Post(rawPost)
            this._posts = [post]

            resolve(post)
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(savedPost)
      }
    })
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
    return new Promise((resolve, reject) => {
      if (this._getAllDomainStore()?.all().length) {
        this._domains = this._getAllDomainStore()?.all() as Domain[]

        resolve(this._domains)
      } else {
        getDomains()
          .then((rawDomains) => {
            this._domains = rawDomains.map((rawD: IDomain) => new Domain(rawD))

            resolve(this._domains)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }

  async loadSections(domain: string): Promise<ISection[]> {
    return new Promise((resolve, reject) => {
      const allStores = this._getAllDomainStore()?.allStores()
      const domainStore = allStores?.find((d: IDomainStore) => d.self().name === domain)

      domainStore?.setActive(true)

      const allSectionStore = this._getAllSectionStore()?.all()
      const savedDomain = allSectionStore?.find((s) => s.domain === domain)

      if (savedDomain) {
        this._sections = this._getAllSectionStore()?.all()
        resolve(this._sections)
      } else {
        getSections(domain)
          .then((rawSections) => {
            this._sections = rawSections.map((rawS: ISectionProps) => new Section(rawS))

            globalStore.update({
              allSectionStore: createAllSectionStore(this._sections as ISectionProps[])
            })

            resolve(this._sections)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }

  async loadPosts(domain: string, sectionId: string): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
      if (this._getAllPostStore()?.all().length) {
        this._posts = this._getAllPostStore()?.all() as Post[]
        resolve(this._posts)
      } else {
        getPosts(domain, sectionId)
          .then((rawPosts) => {
            this._posts = rawPosts.map((raw: IPost) => new Post(raw))
            globalStore.self()?.allSectionStore?.getActive()?.allPostStore?.init(this._posts)

            resolve(this._posts)
          })
          .catch((err) => {
            reject(err)
          })
      }

      // const domainStore = this._getAllDomainStore()?.allStores().find((d: IDomainStore) => d.self().name === domain)
      // domainStore?.setActive(true)
    })
  }
}

const storeLoader = new StoreLoader()

export default storeLoader
