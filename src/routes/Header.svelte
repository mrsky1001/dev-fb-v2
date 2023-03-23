<script lang="ts">
    import logo from '../assets/images/logo.svg'
    import NavItem from "../core/components/navbar/NavItem/NavItem.svelte";
    import FlyoutNavItem from "../core/components/navbar/flyout/FlyoutNavItem.svelte";
    import type {INavItem} from "../lib/entitys";
    import PhotoSVG from "../components/svg/page-icons/PhotoSVG.svelte";
    import HomeSVG from "../components/svg/page-icons/HomeSVG.svelte";
    import TravelSVG from "../components/svg/page-icons/TravelSVG.svelte";
    import StoreSVG from "../components/svg/page-icons/StoreSVG.svelte";
    import AboutSVG from "../components/svg/page-icons/AboutSVG.svelte";
    import ContactsSVG from "../components/svg/page-icons/ContactsSVG.svelte";
    import DesignSVG from "../components/svg/page-icons/DesignSVG.svelte";
    import DevSVG from "../components/svg/page-icons/DevSVG.svelte";
    import BarsSVG from "../components/svg/btn-icons/BarsSVG.svelte";
    import CustomComponent from "../core/components/CustomComponent/CustomComponent.svelte";
    import RightNavItem from "../core/components/navbar/NavItem/RightNavItem.svelte";

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

    const flyoutNavItems: INavItem[] = [{
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
</script>
<header class="bg-white">
    <nav id="navbar" class="navbar mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="https://foma-blog.ru/" target="_blank" class="btn btn-ghost normal-case text-xl -m-1.5 p-1.5">
                <span class="sr-only">FOMA-BLOG</span>
                <img class="h-16 w-auto" src="{logo}" alt="">
            </a>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <CustomComponent component="{BarsSVG}"/>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <NavItem href=""> Дизайн</NavItem>
            <NavItem> Програмирование</NavItem>
            <FlyoutNavItem navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}"> Другие</FlyoutNavItem>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <RightNavItem href="https://foma-blog.ru/login">Войти</RightNavItem>
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div id="mobile-navbar" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-10"></div>
        <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">FOMA-BLOG</span>
                    <img class="h-16 w-auto" src="{logo}" alt="">
                </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <CustomComponent component="{BarsSVG}"/>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div id="other-section-container" class="space-y-2 py-6">
                        <FlyoutNavItem type="mobile" navItems="{flyoutNavItems}" subNavButtons="{flyoutSubNavButtons}">Другие</FlyoutNavItem>
                        <NavItem href="http://foma-blog/design/" type="mobile">Дизайн</NavItem>
                        <NavItem href="http://foma-blog/dev/" type="mobile">Програмирование</NavItem>
                    </div>
                    <div class="py-6">
                        <RightNavItem href="https://foma-blog.ru/login" type="mobile">Войти</RightNavItem>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
