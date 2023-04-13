<script lang="ts">
    import {onMount} from "svelte";
    import {Button, Card} from "flowbite-svelte";
    import img from "../testdata/image-1.webp"

    import ScrollSpy from "../core/components/ScrollSpy/ScrollSpy.svelte";

    export let data

    onMount(() => {
        console.log(data)
    })

    const cards = [{img: img, name: 'ss'}]
</script>

<section class="flex flex-col justify-center items-center w-full ">
    <div class="flex w-full">
        <div class="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
            {#each _sections as section }
                <Card img="{img}">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <Button>
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </Button>
                </Card>
            {/each}
        </div>
        <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
            <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                <ScrollSpy arr="{_getSectionsLikeScrollSpyArr()}"/>
            </div>
        </div>
    </div>
</section>

<style lang="scss">

</style>
