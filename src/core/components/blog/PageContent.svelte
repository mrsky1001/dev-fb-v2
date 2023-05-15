<script lang="ts">
    export let postContent: string | undefined = ''
</script>

{@html postContent}

<style lang="scss">
    .w-article > * :global(p) {
        color: red !important;
    }
</style>
