<script lang="ts">
    import { onMount } from 'svelte'
    import type { IPostStore } from '../../../core/server/stores/post/post.store'
    import Page from '../../../core/components/blog/Page.svelte'
    // let posts: IPost[] = []
    //
    // const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), () => {
    //     posts = allSectionsStore.getActive()?.allPostStore.all() ?? []
    // })
    //
    export let data: { post: IPostStore }

    onMount(() => {
        console.log(data)
        console.log(data.post)
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

{#if data.post}
    asd
    <Page postStore={data.post} />
{/if}

<style lang="scss">
</style>
