<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { createAllSectionStore } from '../../../core/stores/section/all-sections.store'
    import ScrollSpy from '../../../core/components/scrollspy/ScrollSpy.svelte'
    import BlogSection from '../../../core/components/blog/BlogSection.svelte'
    import { beforeNavigate } from '$app/navigation'
    import { customRandom, random } from 'nanoid'
    import { globalStore } from '../../../core/stores/global.store'
    import { subscribeAll } from '../../../core/stores/subscribe-all'
    import { subscribe } from 'svelte/internal'
    import { SectionHeader } from '../../../core/components/utils'
    export let data

    $: data && changingData()

    let activeSection, activeDomain, sections

    const changingData = () => {
        console.log('changingData')
        globalStore.update({ allSectionsStore: createAllSectionStore(data.sections) })
        activeSection = globalStore.self().allSectionsStore.getActive()
        sections = globalStore.self().allSectionsStore.all()

        // if (globalStore.self()?.allDomainsStore) {
        //     activeDomain = globalStore.self().allDomainsStore.getStoreByField('name', data.domain)?.self()
        //
        //     if (!activeDomain) {
        //         subscribeAll(globalStore.self().allDomainsStore.allStores(), () => {
        //             activeDomain.setActive()
        //         })
        //     } else {
        //         activeDomain.setActive()
        //     }
        // }
    }

    subscribe(globalStore, () => {
        if (globalStore.self()?.allDomainsStore) {
            activeDomain = globalStore.self().allDomainsStore.getStoreByField('name', data.domain)?.self()

            if (!activeDomain) {
                subscribeAll(globalStore.self().allDomainsStore.allStores(), () => {
                    activeDomain.setActive()
                })
            } else {
                activeDomain.setActive()
            }
        }
    })

    const change = () => {
        console.log(customRandom('012345678', 1, random)())
        // allSectionsStore.getStore(data.sections[Number(customRandom('012345678', 1, random)())]?._id)?.setActive(true)
    }

    onMount(() => {
        console.log('onMount domain data +page.svelte')
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
                    {#if activeDomain}
                        <SectionHeader
                            domain={activeDomain.name}
                            textDomain={activeDomain.text}
                            descriptionDomain={activeDomain.description}
                        />
                    {/if}
                </div>
                <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
                    <div
                        class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]"
                    >
                        <ScrollSpy {sections} />
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<style lang="scss">
</style>
