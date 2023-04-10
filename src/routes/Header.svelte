<script lang="ts">
    import type {INavItem} from "../lib/entitys";
    import PhotoSVG from "../components/svg/page-icons/PhotoSVG.svelte";
    import HomeSVG from "../components/svg/page-icons/HomeSVG.svelte";
    import TravelSVG from "../components/svg/page-icons/TravelSVG.svelte";
    import StoreSVG from "../components/svg/page-icons/StoreSVG.svelte";
    import AboutSVG from "../components/svg/page-icons/AboutSVG.svelte";
    import ContactsSVG from "../components/svg/page-icons/ContactsSVG.svelte";
    import DesignSVG from "../components/svg/page-icons/DesignSVG.svelte";
    import DevSVG from "../components/svg/page-icons/DevSVG.svelte";
    import LogoNav from "../core/components/navbar/Logo/LogoNav.svelte";
    import {
        Button,
        Chevron,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Group,
        GroupItem,
        Helper,
        Listgroup,
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
        Radio
    } from "flowbite-svelte";
    import CustomComponent from "../core/components/CustomComponent/CustomComponent.svelte";

    let showMenu = false;

    function toggleNavbar() {
        showMenu = !showMenu;
    }

    const navItems: INavItem[] = [
        {
            name: 'Дизайн',
            description: 'Заметки на тему дизайна. Интересные кейсы и работы',
            icon: DesignSVG,
            href: 'https://foma-blog.ru/design',
        }, {
            name: 'Программирование',
            description: 'Заметки на тему веб-разработки и программирования. Решения интересных задач',
            icon: DevSVG,
            href: 'https://foma-blog.ru/dev',
        },]

    const otherNavItems: INavItem[] = [{
        name: 'Фото',
        description: 'Жанровая фотография и фото из путешествий',
        icon: PhotoSVG,
        href: 'https://foma-blog.ru/photo',
    }, {
        name: 'Лавка',
        description: 'В нашей лавке показаны товары ручной работы',
        icon: StoreSVG,
        href: 'https://foma-blog.ru/store',
    }, {
        name: 'Путешествия',
        description: 'Истории из наших путешествий и рассказы у костра',
        icon: TravelSVG,
        href: 'https://foma-blog.ru/travel',
    }, {
        name: 'Дом и техника',
        description: 'Заметки на тему ремонта, техники и про цветы',
        icon: HomeSVG,
        href: 'https://foma-blog.ru/home',
    }]

    const flyoutSubNavButtons: INavItem[] = [{
        name: 'О нас',
        icon: AboutSVG,
        href: 'https://foma-blog.ru/#about',
    }, {
        name: 'Контакты',
        icon: ContactsSVG,
        href: 'https://foma-blog.ru/#contacts',
    }]

    const logo = {name: 'FOMA-BLOG', href: 'https://foma-blog.ru/'}
</script>
<header class="bg-white">
    <Navbar let:hidden let:toggle class="mx-auto">
        <NavBrand href="{logo.href}" target="_blank">
            <LogoNav name="{logo.name}" href="{logo.href}"></LogoNav>
        </NavBrand>
        <NavHamburger on:click={toggle}/>
        <NavUl {hidden}>
            <NavLi href="/dev" class="text-base font-semibold">Разработка</NavLi>
            <NavLi href="/design" class="text-base font-semibold">Дизайн</NavLi>
            <NavLi id="nav-menu-other" class="cursor-pointer text-base font-semibold">
                <Chevron aligned>Другие</Chevron>
            </NavLi>
            <Dropdown open={true} triggeredBy="#nav-menu-other" class="max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
                <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5  ">
                    <div class="p-4">
                        {#each otherNavItems as navItem}
                            <li class="">
                                <a rel="noreferrer" href="{navItem.href}" target="_blank" class="group flex  gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <CustomComponent component="{navItem.icon}"/>
                                    </div>
                                    <div class="flex-auto">
                                        <span class="font-semibold">{navItem.name}</span>
                                        <p class="mt-1 ">{navItem.description}</p>
                                    </div>
                                    <!--                                <Radio name="group3" value={1}>Enable notifications</Radio>-->
                                    <!--                                <Helper class="pl-6">Some helpful instruction goes over here.</Helper>-->
                                </a>

                            </li>
                        {/each}
                    </div>
                </div>

            </Dropdown>
        </NavUl>
        <div class="flex md:order-2">
            <Button size="sm">Войти</Button>
            <NavHamburger on:click={toggle}/>
        </div>
    </Navbar>
    <!--    <nav id="navbar" class="navbar mx-auto flex max-w-7xl items-center justify-between p-4  lg:px-8" aria-label="Global">-->
    <!--        <div class="flex lg:flex-1">-->
    <!--            <LogoNav name="{logo.name}" href="{logo.href}"></LogoNav>-->
    <!--        </div>-->
    <!--        <div class="flex lg:hidden">-->
    <!--            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">-->
    <!--                <span class="sr-only">Open main menu</span>-->
    <!--                <CustomComponent component="{BarsSVG}"/>-->
    <!--            </button>-->
    <!--        </div>-->
    <!--        <ul class="hidden  menu menu-horizontal px-1 lg:flex lg:gap-x-12">-->
    <!--            {#each navItems as navItem}-->
    <!--                <NavItem href="{navItem.href}">{navItem.name}</NavItem>-->
    <!--            {/each}-->
    <!--            <FlyoutNavItem navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}"> Другие</FlyoutNavItem>-->
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
    <!--                    <CustomComponent component="{BarsSVG}"/>-->
    <!--                </button>-->
    <!--            </div>-->
    <!--            <div class="mt-6 flow-root">-->
    <!--                <div class="-my-6 divide-y divide-gray-500/10">-->
    <!--                    <div id="other-section-container" class="space-y-2 py-6">-->
    <!--                        <FlyoutNavItem type="mobile" navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}">Другие</FlyoutNavItem>-->
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
