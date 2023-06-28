<script lang="ts">
    import { createAllSectionStore } from '../../../../../core/stores/section/all-sections.store'
    import ScrollSpy from '../../../../../core/components/scrollspy/ScrollSpy.svelte'
    import BlogSection from '../../../../../core/components/blog/BlogSection.svelte'
    import { globalStore } from '../../../../../core/stores/global.store'
    import { subscribeAll } from '../../../../../core/stores/subscribe-all'
    import { subscribe } from 'svelte/internal'
    import type { ISection, ISectionProps } from '../../../../../core/stores/section/section'
    import Section from '../../../../../core/stores/section/section'
    import { SectionHeader } from '../../../../../core/components/utils'

    export let data: { sections: Section[]; domain: string; sectionId: string }

    $: data && changingData()

    let activeSection: ISection | undefined, activeDomain, sections, posts

    const changingData = () => {
        data.sections.find((s) => s.id === data.sectionId).setActive()
        globalStore.update({ allSectionsStore: createAllSectionStore(data.sections as ISectionProps[]) })
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

            const activeSectionStore = globalStore.self().allSectionsStore.getActiveStore()
            if (activeSectionStore) {
                subscribe(activeSectionStore, () => {
                    posts = activeSectionStore.self().allPostStore.all()
                    console.log(posts)
                })
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
                            sectionId={activeSection.id}
                            textSection={activeSection.name}
                        />
                    {/if}
                    <BlogSection {activeSection} {activeDomain} {posts} />
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
                        <ScrollSpy {sections} />
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<style lang="scss">
</style>
