<script lang="ts">
    import Post from '../../../../../../../core/stores/post/post'
    import Page from '../../../../../../../core/components/blog/Page.svelte'

    export let data: { post: Post }

    $: activePost = data.activePost
    // $: activeSection = data.activeSection
    // $: sections = data.sections
    // $: posts = data.posts
</script>

<!--<div>{post?.url}</div>-->

<Page postStore={post} />

<style lang="scss">
</style>
