<script>
    import { NavLi } from 'flowbite-svelte'
    import CustomComponent from '../../custom/CustomComponent.svelte'

    export let icon = ''
    export let type = ''
    export let href = '/'
</script>

{#if type.includes('mobile')}
    <li>
        <a href="#{href}" class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-50">
            <slot />
        </a>
    </li>
{:else}
    <a
        {href}
        class="block py-2 pr-4 pl-3 rounded md:border-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base font-semibold flex flex-row items-center"
    >
        {#if icon}
            <div class="flex flex-none items-center justify-center">
                <CustomComponent component={icon} />
            </div>
        {/if}
        <span><slot /></span>
    </a>
{/if}

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
