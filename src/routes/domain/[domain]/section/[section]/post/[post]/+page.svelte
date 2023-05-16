<script lang="ts">
    import { onMount } from 'svelte'
    import type { IPostStore } from '../../../../../../../core/server/stores/post/post.store'
    import Page from '../../../../../../../core/components/blog/Page.svelte'
    import type { IPost } from '../../../../../../../core/server/stores/post/post.js'
    // let posts: IPost[] = []
    //
    // const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), () => {
    //     posts = allSectionsStore.getActive()?.allPostStore.all() ?? []
    // })
    //
    export let data: { postStore: IPostStore; latestPosts: IPost[] }

    onMount(() => {
        console.log(data)
        console.log(data.postStore)
        console.log(data.postStore.self().authorStore.self())
        console.log(data.latestPosts)
    })
    //     console.log(posts[0]?.annotationStore.self().text)
    //     console.log(allSectionsStore.getActive())
    //     // console.log($allPostsStore)
    //
    //     // allUnsubscribe = subscribeAll(allSectionsStore.getActive().allPostStore.allStores(), (values) => {
    //     //     posts = values
    //     // })
    // })
    //
    // onDestroy(() => allUnsubscribe())
</script>

{#if data.postStore}
    <Page postStore={data.postStore} latestPosts={data.latestPosts} />
{/if}

<style lang="scss">
</style>
