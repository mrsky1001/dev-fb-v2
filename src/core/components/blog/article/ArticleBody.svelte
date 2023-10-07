<script lang="ts">
    import classNames from 'classnames'

    export let h3Class = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
</script>

{#if $$slots.h3}
    <h2 class={classNames(h3Class, $$props.classH3)}>
        <slot name="h3" />
    </h2>
{/if}
{#if $$slots.paragraph}
    <slot name="paragraph" />
{/if}
