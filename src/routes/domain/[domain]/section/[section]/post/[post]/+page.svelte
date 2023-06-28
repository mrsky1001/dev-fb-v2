<script lang="ts">
    import { globalStore } from '../../../../../../../core/stores/global.store'
    import { createAllSectionStore } from '../../../../../../../core/stores/section/all-sections.store'
    import type Section from '../../../../../../../core/stores/section/section'
    import type { ISection, ISectionProps } from '../../../../../../../core/stores/section/section'
    import { subscribe } from 'svelte/internal'
    import { subscribeAll } from '../../../../../../../core/stores/subscribe-all'
    import { getPostByTitle } from '../../../../../../../core/server/services/post.services.js'
    import Post from '../../../../../../../core/stores/post/post'
    import Page from '../../../../../../../core/components/blog/Page.svelte'
    import { createPostStore, type IPostStore } from '../../../../../../../core/stores/post/post.store'
    import { onMount } from 'svelte'

    export let data: { domain: string; sections: Section[]; sectionId: string; postUrlTitle: string }

    $: data && changingData()

    let activeSection: ISection | undefined, activeDomain, sections
    let activePostStore: IPostStore | undefined
    let currentUrl: string

    const initActiveSection = () => {
        data.sections.find((s) => s.id === data.sectionId).setActive()
        globalStore.update({ allSectionsStore: createAllSectionStore(data.sections as ISectionProps[]) })
        activeSection = globalStore.self().allSectionsStore.getActive()
    }

    const changingData = () => {
        initActiveSection()

        sections = globalStore.self().allSectionsStore.all()
    }

    onMount(() => (currentUrl = window.location.href))

    subscribe(globalStore, () => {
        console.log(currentUrl)
        const isCurrentUrl = currentUrl ? currentUrl.includes(data.postUrlTitle) : true

        if (isCurrentUrl && globalStore.self()?.allDomainsStore) {
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
                activeSectionStore.loadActivePost(data.postUrlTitle).then((postStore: IPostStore) => {
                    activePostStore = postStore
                })

                // subscribe(activeSectionStore, () => {
                //     activeSectionStore.loadActivePost(data.postUrlTitle).then((post: Post) => {
                //         console.log(post)
                //     })
                // })
            }
        }
    })
</script>

<!--<div>{post?.url}</div>-->

{#if activePostStore}
    <Page postStore={activePostStore} />
{/if}

<style lang="scss">
</style>
