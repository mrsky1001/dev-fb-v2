/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import urls from '../collections/urls'
import { apiGet } from './api'
import type { IDomain } from '../../stores/domain/domain'

export const getDomain = (domainId: string): Promise<IDomain[]> =>
    apiGet<IDomain[]>('domain', urls.GET_DOMAIN_BY_ID, domainId)

export const getDomains = (): Promise<IDomain[]> => apiGet<IDomain[]>('domains', urls.GET_DOMAINS)
