<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * NavBar компонент для сайта
     * @Component
     */
    import type { INavItem, TAuthItem } from '../core/models/entitys'
    import PhotoSVG from '../core/components/svg/page-icons/PhotoSVG.svelte'
    import HomeSVG from '../core/components/svg/page-icons/HomeSVG.svelte'
    import TravelSVG from '../core/components/svg/page-icons/TravelSVG.svelte'
    import StoreSVG from '../core/components/svg/page-icons/StoreSVG.svelte'
    import AboutSVG from '../core/components/svg/page-icons/AboutSVG.svelte'
    import ContactsSVG from '../core/components/svg/page-icons/ContactsSVG.svelte'
    import { Button, Dropdown, DropdownItem, Helper, Img, Navbar, NavHamburger, NavUl, Radio, Search } from 'flowbite-svelte'
    import DropdownNavItem from '../core/components/navbar/DropdownNavItem/DropdownNavItem.svelte'
    import NavItem from '../core/components/navbar/NavItem/NavItem.svelte'
    import NavBrand from '../core/components/navbar/NavBrand/NavBrand.svelte'
    import config from '../config/config'
    import { afterUpdate, onDestroy, onMount } from 'svelte'
    import { subscribe } from 'svelte/internal'
    import { authStore } from '../stores/init-store'
    import routes from '$lib/collections/routes'
    import authService from '../modules/auth/auth.service'
    import Routes from '$lib/collections/routes'

    let showMenu = false

    function toggleNavbar() {
        showMenu = !showMenu
    }

    const navItems: INavItem[] = [
        {
            name: 'Дизайн',
            description: 'Заметки на тему дизайна. Интересные кейсы и работы',
            // icon: DesignSVG,
            href: config.front.host + '/domain/design'
        },
        {
            name: 'Разработка',
            description: 'Заметки на тему веб-разработки и программирования. Решения интересных задач',
            // icon: DevSVG,
            href: config.front.host + '/domain/dev'
        }
    ]

    const otherNavItems: INavItem[] = [
        {
            name: 'Фото',
            description: 'Жанровая фотография и фото из путешествий',
            icon: PhotoSVG,
            href: config.front.host + '/domain/photo'
        },
        {
            name: 'Лавка',
            description: 'В лавке представлены товары, сделанные нами',
            icon: StoreSVG,
            href: config.front.host + '/domain/store'
        },
        {
            name: 'Путешествия',
            description: 'Истории из наших путешествий и рассказы у костра',
            icon: TravelSVG,
            href: config.front.host + '/domain/travel'
        },
        {
            name: 'Дом и техника',
            description: 'Заметки на тему ремонта, техники и про цветы',
            icon: HomeSVG,
            href: config.front.host + '/domain/home'
        }
    ]

    const otherSubNavButtons: INavItem[] = [
        {
            name: 'О нас',
            icon: AboutSVG,
            href: config.front.host + '/#about'
        },
        {
            name: 'Контакты',
            icon: ContactsSVG,
            href: config.front.host + '/#contacts'
        }
    ]

    const logo = { name: 'FOMA-BLOG', href: config.front.host + '/' }

    const authItems = {
        login: {
            id: 'login',
            name: 'Войти',
            description: 'Страница входа',
            // icon: DesignSVG,
            href: routes.LOGIN,
            user: null
        },
        logout: {
            id: 'logout',
            name: 'Выйти',
            description: 'Страница выхода',
            // icon: DesignSVG,
            href: routes.LOGOUT,
            user: null
        }
    }

    let authItem: TAuthItem = authItems.login

    const checkAuth = async () => {
        const isAuth = await authService.isAuthorized()

        if (isAuth) {
            authItem = authItems.logout
            authItem.user = authStore.self().user

            console.log(authItem.user.avatarPath)
        } else {
            authItem = authItems.login
            authItem.user = null
        }
    }
    const allUnsubscribe = subscribe(authStore, async () => {
        checkAuth()
    })

    // afterUpdate(() => {
    //     checkAuth()
    // })

    /**
     * Список кнопок-ссылок заголовка страницы
     */

    onDestroy(() => {
        allUnsubscribe()
    })
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200">
    <Navbar let:hidden let:toggle>
        <NavBrand href={logo.href} />
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}>
            {#each navItems as navItem}
                <NavItem href={navItem.href} icon={navItem.icon}>{navItem.name}</NavItem>
            {/each}

            <DropdownNavItem navItems={otherNavItems} subNavButtons={otherSubNavButtons}>Другие</DropdownNavItem>
        </NavUl>
        <div>
            <Search size="sm" placeholder="Поиск" />
        </div>
        <div class="flex">
            {#if authItem.user}
                <div class="animate__animated animate__fadeIn flex items-center gap-4 cursor-pointer">
                    <Img class="w-10 h-10 rounded-full bg-gray-100 text-green-500" src={authItem.user.avatarPath} alt={authItem.user.name} />
                    <div class="font-medium dark:text-white">
                        <div>{authItem.user.name}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{authItem.user.email}</div>
                    </div>
                </div>
                <Dropdown class="bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                    <DropdownItem>
                        <div class=" py-1 text-sm text-gray-900 dark:text-white">
                            <div>Профиль</div>
                            <Helper color="gray-200">Личный кабинет пользователя</Helper>
                        </div>
                    </DropdownItem>
                    <DropdownItem href={authItem.href}>
                        <div class=" py-1 text-sm text-gray-900 dark:text-white">
                            <div>{authItem.name}</div>
                            <Helper color="gray-200">{authItem.description}</Helper>
                        </div>
                    </DropdownItem>
                </Dropdown>
            {:else}
                <NavItem href={authItem.href}>{authItem.name}</NavItem>
            {/if}
            <NavHamburger on:click={toggle} />
        </div>
    </Navbar>
</header>
