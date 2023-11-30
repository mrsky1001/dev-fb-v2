/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import urls from '../../src/lib/collections/urls'
import { apiGet } from '../../src/core/modules/api/api.services'
import type { IDomain } from '../../src/core/stores/domain/domain'

export const getDomain = (domainId: string): Promise<IDomain[]> => apiGet<IDomain[]>('domain', urls.GET_DOMAIN_BY_ID, domainId)

export const getDomains = (): Promise<IDomain[]> => apiGet<IDomain[]>('domains', urls.GET_DOMAINS)
