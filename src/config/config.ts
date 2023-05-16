/*
 * Copyright (©) 15.10.2021, 17:34. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 12.09.2021, 15:42
 */
interface IConfig {
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
}

const isProd = false
const isTestProd = false
const serverPort = isProd ? 8081 : 8082
const frontPort = 5173

export const config: IConfig = {
    front: {
        homeName: 'DEV',
        host: isProd || isTestProd ? `https://foma-blog.ru` : `http://localhost:${frontPort}`,
        homeText: 'Разработка',
        homeIcon: 'mdi-code-braces',
        metaTitle: 'Веб-разработка и программирование',
        metaDescription:
            'Заметки на тему веб-разработки, программирования (JavaScript, TypeScript, NodeJS, ReactJs, VueJS, Java, Scala) и др'
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
