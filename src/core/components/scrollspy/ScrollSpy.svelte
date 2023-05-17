<script lang="ts">
    import { allSectionsStore } from '../../server/stores/section/all-sections.store.js'
    import { onDestroy, onMount } from 'svelte'
    import { subscribeAll } from '../../server/stores/subscribe-all'
    import Section from '../../server/stores/section/section'
    import { subscribe } from 'svelte/internal'

    let sections = []

    const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), (values) => {
        sections = values
    })

    onMount(() => {
        console.log(allSectionsStore.all())
    })

    const activeClass = (section: Section) => {
        return section.isActive ? 'font-semibold border-l-[0.125rem]  text-primary' : ''
    }

    const setActive = (section: Section) => {
        const href = window.location.href
        const sectionIdx = href.lastIndexOf('section/')
        const url = sectionIdx >= 0 ? href.substring(0, sectionIdx) + 'section/' : href + '/section/'
        console.log(sectionIdx)
        console.log(href)
        console.log(url)
        window.history.replaceState(history.state, '', url + section.id)
        return allSectionsStore.getStore(section.id)?.setActive(true)
    }

    onDestroy(() => allUnsubscribe())
</script>

<div class="mb-8">
    <h4 class="pl-[5px] mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">
        Темы
    </h4>
    <nav id="TableOfContents">
        <ul id="mainScrollSpy">
            {#each sections as section}
                <li id={section.name} on:click={() => setActive(section)} class="py-1">
                    <a
                        class="{activeClass(
                            section
                        )} bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 dark:!text-primary-400 border-solid border-primary dark:border-primary-400"
                        >{section.name}</a
                    >
                </li>
                <!--{#if section.arr.length}-->
                <!--    <li class="py-1">-->
                <!--        <a class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200" href="#example-3">Section 3</a>-->
                <!--        <ul class="pl-3">-->
                <!--            {#each section.arr as section}-->
                <!--                <li class="py-1">-->
                <!--                    <a class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200" href="#example-sub-A">Subsection A</a>-->
                <!--                </li>-->
                <!--            {/each}-->
                <!--        </ul>-->
                <!--    </li>-->
                <!--{/if}-->
            {/each}
        </ul>
    </nav>
</div>

<style lang="scss">
</style>
