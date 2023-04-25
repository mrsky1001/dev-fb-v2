/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 10.10.2021, 15:26
 */

// const checkAuth = (to, from, next, role = roles.USER) => {
//   User.checkRole(role) && services.isAuthorized() ? next() : next(routesObj.LOGIN)
// }


// const checkAuth = (to: any, from: any, next: any, role = roles.USER) => {
//     isAuthorized(true)
//         .then((result) => {
//             if (result && vxc.auth.checkRole(role)) {
//                 next()
//             } else {
//                 next(routesObj.LOGIN)
//             }
//         })
//         .catch(() => {
//             next(routesObj.LOGIN)
//         })
// }

import roles from "./collections/roles";
import config from "../../config/config";

export const routesObj = {
    STORE: {
        path: 'https://foma-blog.ru/#productsPage',
        name: 'STORE',
        text: 'Лавка',
        icon: 'mdi-storefront-outline',
        hasIcon: true,
        onMainBar: true,
        isHref: true,
        // isSection: true,
        // onCenterSidebar: true,
        hasSubLine: true,
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Лавка',
            description:
                'В нашей лавке вы найдете авторские открытки, принты, футболки, сумки, мешочки и многое другое',
        },
    },
    HOME: {
        path: '/',
        name: config.router.homeName,
        text: config.router.homeText,
        icon: config.router.homeIcon,
        onMainBar: true,
        isSection: true,
        role: roles.UNAUTHORIZED,

        meta: {
            title: config.router.metaTitle,
            description: config.router.metaDescription,
        },
    },
    ABOUT: {
        path: 'https://foma-blog.ru/#aboutPage',
        name: 'ABOUT',
        text: 'О нас',
        icon: 'mdi-panda',
        onMainBar: true,
        isHref: true,
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'О нас и истории создании блога',
            description: 'Повествование о том как мы дошли дожни такой и кто мы есть',
        },
        // redirect: {
        //     name: 'POST',
        //     params: {
        //         title: 'Alokha_vsem_sluchainim_putnikam_zaglyanuvshim_v_nash_ugolok_tvorchestva',
        //     },
        // },
    },

    // SEARCH: {
    //     path: '/search/:text',
    //     name: 'SEARCH',
    //     text: 'Поиск',
    //     icon: 'mdi-code-braces',
    //     role: roles.UNAUTHORIZED,
    //
    //     meta: {
    //         title: 'Блог',
    //         description:
    //             'Заметки на тему веб-разработки, дизайна, фотографии, арт, а так же жизненный опыт, которым мы делимся с Вами',
    //     },
    // },
    // DEV: {
    //     path: '/',
    //     name: 'DEV',
    //     text: 'Разработка',
    //     icon: 'mdi-code-braces',
    //     onMainBar: true,
    //     isSection: true,
    //     role: roles.UNAUTHORIZED,
    //
    //     meta: {
    //         title: 'Веб-разработка и программирование',
    //         description:
    //             'Заметки на тему веб-разработки, программирования (JavaScript, TypeScript, NodeJS, ReactJs, VueJS, Java, Scala) и др',
    //     },
    // },
    DESIGN: {
        path: 'https://design.foma-blog.ru',
        name: 'DESIGN',
        text: 'Дизайн',
        icon: 'mdi-palette-outline',
        isSection: true,
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Графический дизайн и веб-дизайн',
            description:
                'Заметки на тему графического дизайна, веб-дизайна, работе в программах Adobe Illustrator, Figma и др',
        },
    },
    NOTES: {
        path: '',
        text: 'Заметки',
        icon: 'mdi-camera',
        isGroup: true,
        name: 'NOTES',
        role: roles.UNAUTHORIZED,
    },
    PHOTO: {
        path: 'https://photo.foma-blog.ru',
        name: 'PHOTO',
        text: 'Фотография',
        isSection: true,
        icon: 'mdi-camera',
        group: 'NOTES',
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Фотография и обработка фото',
            description: 'Заметки на тему фотографии, обработки фотографии, работа в программе Adobe Photoshop и др',
        },
    },
    TRAVEL: {
        path: 'https://travel.foma-blog.ru',
        name: 'TRAVEL',
        text: 'Путешествия',
        isSection: true,
        hasSubLine: true,
        icon: 'mdi-airballoon',
        group: 'NOTES',
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Путешествия',
            description:
                'Заметки на тему путешествия, фотографии и видео из путешествий, с какими трудностями пришлось столкнуться и др',
        },
    },
    YOUTUBE: {
        path: '/youtube',
        name: 'YOUTUBE',
        text: 'YouTube',
        isSection: true,
        isCenterSidebar: true,
        group: 'NOTES',
        icon: 'mdi-youtube',

        role: roles.UNAUTHORIZED,
        meta: {
            title: 'YOUTUBE',
            description: 'Заметки на тему монтажа видео и работы на сервисе YOUTUBE',
        },
    },
    FLOWER: {
        path: '/flower',
        name: 'FLOWER',
        text: 'Про цветы',
        isSection: true,
        group: 'NOTES',
        icon: 'mdi-flower',
        hasSubLine: true,
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Про цветы',
            description: 'Заметки на тему разведения комнатных цветов (фиалки, замиокулькас, каланхое) и др',
        },
    },
    ART: {
        path: '/art',
        name: 'ART',
        text: 'АРТ',
        isSection: true,
        group: 'NOTES',
        icon: 'mdi-palette',
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'АРТ',
            description: 'Заметки на тему истории искусств, арт объектов и в целом об искусстве',
        },
    },

    EMBROIDERY: {
        path: '/embroidery',
        name: 'EMBROIDERY',
        text: 'Рукоделие',
        isSection: true,
        group: 'NOTES',
        icon: 'mdi-signature-freehand',
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Рукоделие',
            description: 'Заметки на тему рукоделия, вышивки и др',
        },
    },
    GADGETS: {
        path: '/gadgets',
        name: 'GADGETS',
        text: 'Про технику',
        hasSubLine: true,
        isSection: true,
        group: 'NOTES',
        icon: 'mdi-monitor-cellphone',
        role: roles.UNAUTHORIZED,

        meta: {
            title: 'Про технику',
            description: 'Заметки на тему смартфонов, персональных компьютеров и других устройствах помогающих в жизни',
        },
    },
    POST: {
        path: '/post/:title',
        name: 'POST',
        text: 'Статья',
        icon: 'mdi-post-outline',
        role: roles.UNAUTHORIZED,
    },
    POST_BY_ID: {
        path: '/post-id/:postId',
        name: 'POST',
        text: 'Статья',
        icon: 'mdi-post-outline',
        role: roles.UNAUTHORIZED,
    },
    SECTION: {
        path: '/section/:sectionId',
        name: 'SECTION',
        text: 'Раздел',
        icon: 'mdi-post-outline',
        role: roles.UNAUTHORIZED,
    },
    SEARCH: {
        path: '/search/:searchText',
        name: 'SEARCH',
        text: 'Поиск',
        icon: 'mdi-code-braces',
        role: roles.UNAUTHORIZED,
    },
    NEW_POST: {
        path: '/new',
        name: 'NEW_POST',
        text: 'Новая статья',
        icon: 'mdi-note-plus-outline',
        onAvatarBar: true,
        role: roles.EDITOR,

        // beforeEnter: (to, from, next) => checkAuth(to, from, next, roles.EDITOR),
        meta: {
            title: 'Новая статья',
            description: 'Страница создания новой статьи',
        },
    },
    EDIT_POST: {
        path: '/post/:title/:postId',
        name: 'EDIT_POST',
        text: 'Редактировать',
        icon: 'mdi-note-edit-outline',
        role: roles.EDITOR,

        // beforeEnter: (to, from, next) => checkAuth(to, from, next, roles.EDITOR),
        meta: {
            title: 'Редактирование статьи',
            description: 'Страница редактирования статьи',
        },
    },
    LOGIN: {
        path: '/loginST',
        name: 'LOGIN',
        text: 'Войти',
        icon: 'mdi-login-variant',
        onAvatarBar: true,
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'Вход',
            description: 'Страница входа на сайт',
        },
    },
    ACCOUNT: {
        path: '/account',
        name: 'ACCOUNT',
        text: 'Учетная запись',
        icon: 'mdi-account-circle',
        onAvatarBar: true,
        role: roles.USER,
        meta: {
            title: 'Учетная запись',
            description: 'Страница настроек учетной записи',
        },
    },
    REGISTRATION: {
        path: '/registration',
        name: 'REGISTRATION',
        text: 'Зарегистрироваться',
        icon: 'mdi-account-plus-outline',
        role: roles.UNAUTHORIZED,
        onAvatarBar: true,
        meta: {
            title: 'Регистрация',
            description: 'Страница регистрации на сайте',
        },
    },
    LOGOUT: {
        path: '/logout',
        name: 'LOGOUT',
        text: 'Выйти',
        icon: 'mdi-logout',

        onAvatarBar: true,
        role: roles.USER,
        meta: {
            title: 'Выход',
            description: 'Страница выхода на сайте',
        },
    },
    DELETE_ACCOUNT: {
        path: '/deleteAccount',
        name: 'DELETE_ACCOUNT',
        text: 'Удалить аккаунт',
        icon: 'mdi-account-off-outline',
        role: roles.USER,
        meta: {
            title: 'Удаление аккаунта',
            description: 'Страница удаления аккаунта на сайте',
        },
    },
    CONDITIONS: {
        path: '/conditions',
        name: 'CONDITIONS',
        text: 'Условия предоставления информации',
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'Условия предоставления информации',
            description: 'Страница об условиях предоставления информации',
        },
    },
    DISCLAIMER: {
        path: '/disclaimer',
        name: 'DISCLAIMER',
        text: 'Отказ от ответственности',
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'Отказ от ответственности',
            description: 'Страница об отказе от ответственности',
        },
    },
    COPYRIGHT_HOLDERS: {
        path: '/copyrightHolders',
        name: 'COPYRIGHT_HOLDERS',
        text: 'Правообладателям',
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'Правообладателям',
            description: 'Страница для правообладателей',
        },
    },
    AGREEMENT: {
        path: '/agreement',
        name: 'AGREEMENT',
        text: 'Согласие на обработку персональных данных',
        role: roles.UNAUTHORIZED,
        meta: {
            title: 'Согласие на обработку персональных данных',
            description: 'Страница с условиями согласия на обработку персональных данных',
        },
    },
    ALL: {
        path: '/*',
        name: 'ALL',
        text: 'Всё',
        icon: 'mdi-airballoon',
        redirect: '/',
        role: roles.UNAUTHORIZED,
    },
}

export default routesObj
