<script lang="ts">
    import Tooltip from 'flowbite-svelte/Tooltip.svelte';

    export let href = '';
    export let tooltip = '';
    export let aClass =
        'inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600';
</script>

<a {href} class={aClass}>
    <slot/>
</a>
{#if tooltip}
    <Tooltip arrow={false}>{tooltip}</Tooltip>
{/if}
