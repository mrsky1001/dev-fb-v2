<script>
    import { fade } from 'svelte/transition'

    export let range

    let rect = { absX: 0, absY: 0 }

    $: if (range) {
        rect = getRect(range)
    }

    function getRect(range) {
        const rect = range.getBoundingClientRect()
        rect.absX = window.scrollX + rect.x
        rect.absY = window.scrollY + rect.y
        return rect
    }
</script>

{#if range}
    <div class="menu-bubble" transition:fade={{ duration: 300 }} style="transform: translate({rect.absX}px, {rect.absY}px)"><slot /></div>
{/if}

<style>
    .menu-bubble {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        min-height: 2rem;
        margin-top: -2.6rem;
        margin-left: -1rem;
        min-width: 2.6em;
        user-select: none;
        box-sizing: border-box;
        z-index: 99;
        padding: 0.4em;
        color: #eee;
        background: #1b1616;
        border-radius: 2px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
        transition: opacity 0.2s;
    }

    .menu-bubble:after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 1em;
        width: 0;
        height: 0;
        border: 0.625em solid transparent;
        border-top-color: #1b1616;
        border-bottom: 0;
        margin-left: -0.312em;
        margin-bottom: -0.625em;
    }

    .menu-bubble > :global(button) {
        position: relative;
        display: inline-block;
        text-decoration: none;
        user-select: none;
        border: 0;
        outline: none;
        font: inherit;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        min-width: 1.2em;
        min-height: 1.2em;
        padding: 0.2em;
        margin: 0.2em;
    }

    .menu-bubble > :global(button):active {
        opacity: 0.7;
    }

    .menu-bubble > :global(input) {
        display: block;
        box-sizing: border-box;
        width: 100%;
        font: inherit;
        color: inherit;
        background: transparent;
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
    }
</style>
