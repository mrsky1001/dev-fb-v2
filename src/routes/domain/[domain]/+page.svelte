<script lang="ts">
    import { createAllSectionStore } from '../../../core/stores/section/all-sections.store'
    import ScrollSpy from '../../../core/components/scrollspy/ScrollSpy.svelte'
    import { globalStore } from '../../../core/stores/global.store'
    import { subscribeAll } from '../../../core/stores/subscribe-all'
    import { subscribe } from 'svelte/internal'
    import { SectionHeader } from '../../../core/components/utils'
    export let data

    $: data && changingData()

    let activeSection, activeDomain, sections

    const changingData = () => {
        globalStore.update({ allSectionsStore: createAllSectionStore(data.sections) })

        activeSection = globalStore.self().allSectionsStore.getActive()
        sections = globalStore.self().allSectionsStore.all()
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
</script>

<div class="w-full px-4 mx-auto max-w-8xl">
    <div class="lg:flex">
        <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div class="flex w-full">
                <div class="flex-auto max-w-8xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
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
