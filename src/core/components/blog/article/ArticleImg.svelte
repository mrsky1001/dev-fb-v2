<script lang="ts">
    export let href = '#'
    export let src = ''
</script>

{#if src}
    <a {href} class="w-full">
        <img class="rounded-t" {src} alt="Post image" />
    </a>
{/if}
