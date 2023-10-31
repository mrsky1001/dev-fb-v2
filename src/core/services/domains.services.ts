/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import urls from '../../lib/collections/urls'
import { apiGet } from './api'
import type { IDomain } from '../stores/domain/domain'

export const getDomain = (domainId: string): Promise<IDomain[]> => apiGet<IDomain[]>('domain', urls.GET_DOMAIN_BY_ID, domainId)

export const getDomains = (): Promise<IDomain[]> => apiGet<IDomain[]>('domains', urls.GET_DOMAINS)
