<script lang="ts">
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
    console.log(config.front.host)
</script>

<header
    class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800"
>
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
            <Button size="sm">Войти</Button>
            <NavHamburger on:click={toggle} />
        </div>
    </Navbar>
    <!--    <nav id="navbar" class="navbar mx-auto flex max-w-7xl items-center justify-between p-4  lg:px-8" aria-label="Global">-->
    <!--        <div class="flex lg:flex-1">-->
    <!--            <LogoNav name="{logo.name}" href="{logo.href}"></LogoNav>-->
    <!--        </div>-->
    <!--        <div class="flex lg:hidden">-->
    <!--            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">-->
    <!--                <span class="sr-only">Open main menu</span>-->
    <!--                <custom component="{BarsSVG}"/>-->
    <!--            </button>-->
    <!--        </div>-->
    <!--        <ul class="hidden  menu menu-horizontal px-1 lg:flex lg:gap-x-12">-->
    <!--            {#each navItems as navItem}-->
    <!--                <NavItem href="{navItem.href}">{navItem.name}</NavItem>-->
    <!--            {/each}-->
    <!--            <DropdownNavItem navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}"> Другие</DropdownNavItem>-->
    <!--        </ul>-->
    <!--        <div class="hidden lg:flex lg:flex-1 lg:justify-end">-->
    <!--            <RightNavItem href="https://foma-blog.ru/login">Войти</RightNavItem>-->
    <!--        </div>-->
    <!--    </nav>-->
    <!--    &lt;!&ndash; Mobile menu, show/hide based on menu open state. &ndash;&gt;-->
    <!--    <div id="mobile-navbar" class="lg:hidden" role="dialog" aria-modal="true">-->
    <!--        &lt;!&ndash; Background backdrop, show/hide based on slide-over state. &ndash;&gt;-->
    <!--        <div class="fixed inset-0 z-10">-->
    <!--            <LogoNav type="mobile" name="{logo.name}" href="{logo.href}"></LogoNav>-->
    <!--        </div>-->
    <!--        <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">-->
    <!--            <div class="flex items-center justify-between">-->

    <!--                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">-->
    <!--                    <span class="sr-only">Close menu</span>-->
    <!--                    <custom component="{BarsSVG}"/>-->
    <!--                </button>-->
    <!--            </div>-->
    <!--            <div class="mt-6 flow-root">-->
    <!--                <div class="-my-6 divide-y divide-gray-500/10">-->
    <!--                    <div id="other-section-container" class="space-y-2 py-6">-->
    <!--                        <DropdownNavItem type="mobile" navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}">Другие</DropdownNavItem>-->
    <!--                        <NavItem href="http://foma-blog/design/" type="mobile">Дизайн</NavItem>-->
    <!--                        <NavItem href="http://foma-blog/dev/" type="mobile">Програмирование</NavItem>-->
    <!--                    </div>-->
    <!--                    <div class="py-6">-->
    <!--                        <RightNavItem href="https://foma-blog.ru/login" type="mobile">Войти</RightNavItem>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
</header>

<style>
    /*header {*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    position: absolute;*/
    /*    width: 100%;*/
    /*}*/

    /*.corner a {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*}*/

    /*.corner img {*/
    /*    width: 8em;*/
    /*    height: 8em;*/
    /*    object-fit: contain;*/
    /*}*/

    /*svg {*/
    /*    width: 2em;*/
    /*    height: 3em;*/
    /*    display: block;*/
    /*}*/

    /*path {*/
    /*    fill: var(--background);*/
    /*}*/

    /*ul {*/
    /*    position: relative;*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*    height: 3em;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    list-style: none;*/
    /*    background: var(--background);*/
    /*    background-size: contain;*/
    /*}*/

    /*li {*/
    /*    position: relative;*/
    /*    height: 100%;*/
    /*}*/

    /*li[aria-current='page']::before {*/
    /*    --size: 6px;*/
    /*    content: '';*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: calc(50% - var(--size));*/
    /*    border: var(--size) solid transparent;*/
    /*    border-top: var(--size) solid var(--color-theme-1);*/
    /*}*/

    /*nav a {*/
    /*    display: flex;*/
    /*    height: 100%;*/
    /*    align-items: center;*/
    /*    padding: 0 0.5rem;*/
    /*    color: var(--color-text);*/
    /*    font-weight: 700;*/
    /*    font-size: 0.8rem;*/
    /*    text-transform: uppercase;*/
    /*    letter-spacing: 0.1em;*/
    /*    text-decoration: none;*/
    /*    transition: color 0.2s linear;*/
    /*}*/

    /*a:hover {*/
    /*    color: var(--color-theme-1);*/
    /*}*/
</style>
