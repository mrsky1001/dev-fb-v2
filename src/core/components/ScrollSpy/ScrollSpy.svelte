<script lang="ts">

    import {ScrollSpyArr} from "./scroll-spy";

    export const arr: ScrollSpyArr[] = [
        new ScrollSpyArr('1asdasda', false),
        new ScrollSpyArr('2asdasda', false),
        new ScrollSpyArr('3asdasda', false, [
            new ScrollSpyArr('3asdasda', false),
            new ScrollSpyArr('4asdasda', false),
            new ScrollSpyArr('5asdasda', false),
        ]),
        new ScrollSpyArr('4asdasda', false),
        new ScrollSpyArr('5asdasda', false),
    ]

    console.log(arr)
</script>
<div class="mb-8">
    <h4 class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs">On this page</h4>
    <nav id="TableOfContents">
        <ul id="mainScrollSpy">
            {#each arr as item}
                <li class="py-1">
                    <a class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 !text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
                       href="#example-1">{item.name}</a>
                </li>
                {#if item.arr.length}
                    <li class="py-1">
                        <a class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200" href="#example-3">Section 3</a>
                        <ul class="pl-3">
                            {#each item.arr as item}
                                <li class="py-1">
                                    <a class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200" href="#example-sub-A">Subsection A</a>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {/if}
            {/each}
        </ul>
    </nav>
</div>
<style lang="scss">

</style>
