/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import { globalStore } from '../stores/global.store'
import Domain, { type IDomain } from '../../modules/blog/domain/domain'
import Section, { type ISection, type ISectionProps } from '../../modules/blog/section/section'
import Post, { type IPost } from '../../modules/blog/post/post'
import { getDomains } from '../services/domains.services'
import { getSections } from '../services/sections.services'
import { createAllSectionStore } from '../../modules/blog/section/deps/all-sections.store'
import { getPostByTitle, getPosts } from '../services/post.services'
import type { IDomainStore } from '../../modules/blog/domain/domain.store'

/**
 * Класс загрузки данных в store's
 * @Class
 */
class StoreLoader {
    /**
     * Получить список всех store's доменов
     * @returns {IAllDomainStore}
     */
    private _getAllDomainStore = () => globalStore.self()?.allDomainStore

    /**
     * Получить список всех store's разделов активного домена
     * @returns {IAllSectionStore}
     */
    private _getAllSectionStore = () => globalStore.self()?.allSectionStore

    /**
     * Получить список всех store's статей активного раздела
     * @returns {IAllPostStore}
     */
    private _getAllPostStore = () => globalStore.self()?.allSectionStore?.getActiveStore()?.self().allPostStore

    /**
     * Загрузка и получение выбранного домена
     * @param {string} domain
     * @returns {Promise<IDomain | undefined>}
     */
    async getActiveDomain(domain?: string): Promise<IDomain | undefined> {
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

    /**
     * Загрузка и получение выбранного раздела
     * @param {string} domain
     * @param {string} sectionId
     * @returns {Promise<IDomain | undefined>}
     */
    async getActiveSection(domain?: string, sectionId?: string): Promise<ISection | undefined> {
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

    /**
     * Загрузка и получение выбранной статьи
     * @param {string} domain
     * @param {string} sectionId
     * @param {string} postUrlTitle
     * @returns {Promise<IDomain | undefined>}
     */
    async getActivePost(domain?: string, sectionId?: string, postUrlTitle?: string): Promise<IPost | undefined> {
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

    private _domains: IDomain[] = []
    private _sections: ISection[] = []
    private _posts: IPost[] = []

    /**
     * Загрузка списка доменов
     * @returns {Promise<IDomain[]>}
     */
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

    /**
     * Загрузка списка разделов активного домена
     * @returns {Promise<ISection[]>}
     */
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

    /**
     * Загрузка списка статьей активного раздела
     * @returns {Promise<IPost[]>}
     */
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

    get domains() {
        return this._domains
    }

    get sections() {
        return this._sections
    }

    get posts() {
        return this._posts
    }
}

const storeLoader = new StoreLoader()

export default storeLoader
