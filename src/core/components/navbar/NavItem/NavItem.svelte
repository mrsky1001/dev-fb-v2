<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script>
    /**
     *  Компонент кнопки-ссылки заголовка
     */
    import CustomComponent from '../../custom/CustomComponent.svelte'

    export let icon = ''
    export let type = ''
    export let title = ''
    export let href = '/'
</script>

{#if type.includes('mobile')}
    <li>
        <a {title} {href} class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-50">
            <slot />
        </a>
    </li>
{:else}
    <a
        {href}
        {title}
        data-sveltekit-preload-data="off"
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
