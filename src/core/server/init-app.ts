import { globalStore } from '../stores/global.store'
import { getDomains } from './services/domains.services'
import Domain, { type IDomain } from '../stores/domain/domain'
import { createAllDomainStore } from '../stores/domain/all-domain.store'
import storeLoader from '../subscriber/storeLoader'

export const initApp = () => {
    storeLoader.loadDomains()
    // getDomains().then((rawDomains: IDomain[]): void => {
    //     const domains: Domain[] = rawDomains.map((d: IDomain) => new Domain(d))
    //
    //     globalStore.update({ allDomainStore: createAllDomainStore(domains) })
    // })
}
