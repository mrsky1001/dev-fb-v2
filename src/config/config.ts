/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import urls from '$lib/collections/urls'

interface IConfig {
    mainStorageName: string
    front: {
        host: string
        homeName: string
        homeText: string
        metaTitle: string
        metaDescription: string
        homeIcon: string
    }
    server: {
        fullHost: string
        domain: string
    }
    paths: {
        footerImgs: string
    }
    excludedURLForShowMsg: string[]
}

const isProd = false
const isTestProd = false
const serverPort = isProd ? 8081 : 3000
const frontPort = 5173

export const config: IConfig = {
    excludedURLForShowMsg: [urls.IS_AUTHORIZED],
    mainStorageName: '__foma_blog_ru',
    front: {
        homeName: 'DEV',
        host: isProd || isTestProd ? `https://foma-blog.ru` : `http://localhost:${frontPort}`,
        homeText: 'Разработка',
        homeIcon: 'mdi-code-braces',
        metaTitle: 'Веб-разработка и программирование',
        metaDescription: 'Заметки на тему веб-разработки, программирования (JavaScript, TypeScript, NodeJS, ReactJs, VueJS, Java, Scala) и др'
    },
    server: {
        domain: 'dev',
        fullHost: isProd || isTestProd ? `https://foma-blog.ru:${serverPort}` : `http://localhost:${serverPort}`
    },
    paths: {
        footerImgs: 'https://dev.foma-blog.ru/assets/footer-imgs/'
    }
}
export default config
