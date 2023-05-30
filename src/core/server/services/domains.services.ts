/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import urls from '../collections/urls'
import { apiGet } from './api'

export const getDomain = (domainId: string) => apiGet('domain', urls.GET_DOMAIN_BY_ID, domainId)

export const getDomains = () => apiGet('domains', urls.GET_DOMAINS)
