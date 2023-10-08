<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import CustomComponent from '../../custom/CustomComponent.svelte'
    import LogoSVG from '../../svg/btn-icons/LogoSVG.svelte'
    import { NavBrand } from 'flowbite-svelte'

    export let type = ''
    export let name = ''
    export let href = ''
</script>

{#if type.includes('mobile')}
    <a rel="noreferrer" {href} target="_blank" class="-m-1.5 p-1.5">
        <span class="sr-only">{name}</span>
        <CustomComponent component={LogoSVG} />
    </a>
{:else}
    <NavBrand {href} class="group" target="_blank">
        <LogoSVG />
        <span><slot /></span>
    </NavBrand>
    <!--    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">-->
    <!--    FOMA-BLOG-->
    <!--    </span>-->
    <!--    -->
    <!--    <a rel="noreferrer" href="{href}" target="_blank" class="btn btn-ghost normal-case text-xl">-->
    <!--        <span class="sr-only">{name}</span>-->
    <!--        <custom component="{LogoSVG}"/>-->
    <!--    </a>-->
{/if}

<style>
</style>
