/*
 * Copyright (©) 15.10.2021, 17:34. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 12.09.2021, 15:42
 */
interface IConfig {
    router: {
        siteName: string
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
}

const isProd = false
const isTestProd = false
const port = isProd ? 8081 : 8082

export const config: IConfig = {
    router: {
        homeName: 'DEV',
        siteName: 'foma-blog.ru/dev',
        homeText: 'Разработка',
        homeIcon: 'mdi-code-braces',
        metaTitle: 'Веб-разработка и программирование',
        metaDescription: 'Заметки на тему веб-разработки, программирования (JavaScript, TypeScript, NodeJS, ReactJs, VueJS, Java, Scala) и др',
    },
    server: {
        domain: 'dev',
        fullHost: isProd || isTestProd ? `https://foma-blog.ru:${port}` : `http://localhost:${port}`
    },
    paths: {
        footerImgs: 'https://dev.foma-blog.ru/assets/footer-imgs/'
    }
}
export default config
