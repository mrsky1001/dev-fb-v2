<script lang="ts">
    /**
     * Компонент отображения разделов
     */
    import { afterUpdate } from 'svelte'
    import Section from '../../stores/section/section'

    export let sections = []

    let url = ''

    afterUpdate(() => {
        const href = window.location.href
        const lastSlashIdx = href.lastIndexOf('/')

        url = href.includes('section') ? href.substring(0, lastSlashIdx) + '/' : href + '/section/'
    })

    const activeClass = (section: Section) => {
        return section.isActive ? 'font-semibold border-l-[0.125rem]  text-primary' : ''
    }
</script>

<div class="mb-8 px-[5px]">
    <h4 class=" mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">Темы</h4>
    <nav id="TableOfContents">
        <ul id="mainScrollSpy">
            {#each sections as section}
                <li id={section.name} class="py-1">
                    <a
                        class="{activeClass(section)} hover:font-medium bg-transparent text-neutral-600 shadow-none dark:text-neutral-200 border-solid border-primary dark:border-primary-400"
                        href={url + section.id}
                        data-sveltekit-preload-data="tap">{section.name}</a
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
