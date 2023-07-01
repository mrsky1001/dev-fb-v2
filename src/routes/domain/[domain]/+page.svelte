<script lang="ts">
  import ScrollSpy from '../../../core/components/scrollspy/ScrollSpy.svelte'
  import { SectionHeader } from '../../../core/components/utils'
  import Section from '../../../core/stores/section/section'
  import type Domain from '../../../core/stores/domain/domain'

  export let data: { promiseSections: Promise<Section[]>; promiseActiveDomain: Promise<Domain> }

  $: promiseActiveDomain = data.promiseActiveDomain
  $: promiseSections = data.promiseSections
</script>

<div class="w-full px-4 mx-auto max-w-8xl">
  <div class="lg:flex">
    <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
      <div class="flex w-full">
        <div class="flex-auto max-w-8xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
          {#await promiseActiveDomain then activeDomain}
            <SectionHeader domain={activeDomain.name} textDomain={activeDomain.text} descriptionDomain={activeDomain.description} />
          {/await}
        </div>
        <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
          <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
            {#await promiseSections then sections}
              <ScrollSpy {sections} />
            {/await}
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

<style lang="scss">
</style>
