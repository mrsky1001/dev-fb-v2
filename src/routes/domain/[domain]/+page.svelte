<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { createAllSectionStore } from '../../../core/stores/section/all-sections.store'
    import ScrollSpy from '../../../core/components/scrollspy/ScrollSpy.svelte'
    import BlogSection from '../../../core/components/blog/BlogSection.svelte'
    import { beforeNavigate } from '$app/navigation'
    import { customRandom, random } from 'nanoid'
    import { globalStore } from '../../../core/stores/global.store'
    export let data

    $: data && changingData()
    let activeSection
    const changingData = () => {
        console.log('changingData')
        data.sections[0].isActive = true
        globalStore.update({ allSectionsStore: createAllSectionStore(data.sections) })
        activeSection = globalStore.self().allSectionsStore.getActive()
    }

    // const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), () => {
    //         posts = allSectionsStore.getActive()?.allPostStore.all() ?? []
    //     })

    const change = () => {
        console.log(customRandom('012345678', 1, random)())
        // allSectionsStore.getStore(data.sections[Number(customRandom('012345678', 1, random)())]?._id)?.setActive(true)
    }

    onMount(() => {
        console.log('onMount domain data +page.svelte')
        console.log(globalStore.self().allDomainsStore)
    })

    beforeNavigate(async () => {
        console.log('beforeNavigate domain data +page.svelte')
    })
</script>

<div class="w-full px-4 mx-auto max-w-8xl">
    <div class="lg:flex">
        <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div class="flex w-full">
                <div
                    class="flex-auto max-w-8xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16"
                    on:click={() => change()}
                >
                    <!--{#each posts as post }-->
                    <BlogSection {activeSection} />
                    <!--            <Card img="{img}">-->
                    <!--                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>-->
                    <!--                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">-->
                    <!--                    {post.annotationStore.self().text}-->
                    <!--                </p>-->
                    <!--                <Button>-->
                    <!--                    Read more-->
                    <!--                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">-->
                    <!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>-->
                    <!--                    </svg>-->
                    <!--                </Button>-->
                    <!--            </Card>-->
                    <!--        {/each}-->
                </div>
                <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
                    <div
                        class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]"
                    >
                        <ScrollSpy />
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<style lang="scss">
</style>
