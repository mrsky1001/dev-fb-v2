<script lang="ts">
    import {allSectionsStore} from "../../lib/stores/section/all-sections.store.js";
    import {onDestroy, onMount} from "svelte";
    import Section from "../../lib/stores/section/section";
    import {subscribeAll} from "../../lib/stores/subscribeAll";

    let sections = []
    const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), (values) => {
        sections = values
    })

    onMount(() => {
        console.log(allSectionsStore.all())
    })

    const activeClass = (section: Section) => {
        console.log(section.isActive)
        return section.isActive ? 'font-semibold border-l-[0.125rem]  text-primary' : ''
    }

    const setActive = (section: Section) => {
        console.log(allUnsubscribe)
        return allSectionsStore.getStore(section).setActive(true)
    }

    // onDestroy(() =>
    //     allUnsubscribe.forEach(us => us())
    // )
</script>
<div class="mb-8">
    <h4 class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">Темы</h4>
    <nav id="TableOfContents">
        <ul id="mainScrollSpy">
            {#each sections as section}
                <li id="{section.name}" on:click={()=>setActive(section)} class="py-1">
                    <a class="{activeClass(section)} bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 dark:!text-primary-400 border-solid border-primary dark:border-primary-400"
                       href="#example-1">{section.name}</a>
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
