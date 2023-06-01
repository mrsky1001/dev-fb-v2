import { globalStore } from '../stores/global.store'
import { getDomains } from './services/domains.services'
import Domain, { type IDomain } from '../stores/domain/domain'
import { createAllDomainStore } from '../stores/domain/all-domain.store'

export const initApp = () => {
    getDomains().then((rawDomains: IDomain[]): void => {
        console.log(rawDomains)
        const domains: Domain[] = rawDomains.map((d: IDomain) => new Domain(d))
        globalStore.update({ allDomainsStore: createAllDomainStore(domains) })
    })
}
