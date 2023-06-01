<script lang="ts">
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'

    export let home = ''
    export let domain = ''
    export let textDomain = ''
    export let section = ''
    export let textSection = ''
    export let descriptionDomain = ''
    // const capitalized = `${first.toUpperCase()}${rest.join('')}`;
</script>

<section class="pt-3 md:pt-5">
    <div class="px-4 mx-auto max-w-8xl">
        <div class="grid pb-6 border-b border-gray-200 md:pb-10 lg:gap-8 lg:grid-cols-3 dark:border-gray-800">
            <div class="col-span-2 mb-2 lg:mb-0">
                <Breadcrumb navClass="flex mb-3">
                    <BreadcrumbItem href="/" home>{home}</BreadcrumbItem>
                    <BreadcrumbItem href="/{domain}">{textDomain}</BreadcrumbItem>
                    {#if textSection}<BreadcrumbItem href="/{domain}/{section}">{textSection}</BreadcrumbItem>{/if}
                </Breadcrumb>
                <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {textDomain}
                </h1>
                <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
                    {descriptionDomain}
                </p>
            </div>
        </div>
    </div>
</section>
