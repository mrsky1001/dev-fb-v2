<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import { page } from '$app/stores'
    import { EditOnGithub, DocsLink } from './index'
    import Section from '../section/Section.svelte'

    export let title = ''
    const href = `https://github.com/shinokada/flowbite-svelte-blocks/blob/main/src/routes${$page.url.pathname}.svelte`
</script>

<Section name="none" classSection="py-6 sm:py-10" classDiv="px-4 mx-auto max-w-8xl">
    <div class="grid lg:grid-cols-2">
        <div>
            <h2 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h2>
            <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400 lg:max-w-2xl">
                <slot />
            </p>
        </div>
        <div class="flex items-center lg:justify-end mt-2 lg:mt-0">
            <!--            <EditOnGithub size="16" {href} iconClass="text-gray-500" target="_blank" />-->
            <!--            <DocsLink page={title.toLowerCase().replace(/\s+/g, '-')} target="_blank" />-->
        </div>
    </div>
</Section>
