<script lang="ts">
    import Post from '../../../../../../../core/stores/post/post'
    import Page from '../../../../../../../core/components/blog/Page.svelte'

    export let data: { promisePost: Promise<Post> }

    // $: activeSection = data.activeSection
    // $: sections = data.sections
    // $: posts = data.posts
</script>

<!--<div>{post?.url}</div>-->

{#await data.promisePost then post}
    <Page {post} />
{/await}

<style lang="scss">
</style>
