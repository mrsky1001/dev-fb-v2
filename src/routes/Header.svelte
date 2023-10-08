<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * NavBar компонент для сайта
     * @Component
     */
    import type { INavItem } from '../core/server/models/entitys'
    import PhotoSVG from '../core/components/svg/page-icons/PhotoSVG.svelte'
    import HomeSVG from '../core/components/svg/page-icons/HomeSVG.svelte'
    import TravelSVG from '../core/components/svg/page-icons/TravelSVG.svelte'
    import StoreSVG from '../core/components/svg/page-icons/StoreSVG.svelte'
    import AboutSVG from '../core/components/svg/page-icons/AboutSVG.svelte'
    import ContactsSVG from '../core/components/svg/page-icons/ContactsSVG.svelte'
    import { Button, Navbar, NavHamburger, NavUl, Radio, Search } from 'flowbite-svelte'
    import DropdownNavItem from '../core/components/navbar/DropdownNavItem/DropdownNavItem.svelte'
    import NavItem from '../core/components/navbar/NavItem/NavItem.svelte'
    import NavBrand from '../core/components/navbar/NavBrand/NavBrand.svelte'
    import config from '../config/config'

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
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
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
            <NavItem href="/login">Войти</NavItem>
            <NavHamburger on:click={toggle} />
        </div>
    </Navbar>
</header>
