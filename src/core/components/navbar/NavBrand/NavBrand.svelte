<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент кнопки-лого заголовка
     *  @component
     */
    import CustomComponent from '../../custom/CustomComponent.svelte'
    import { NavBrand } from 'flowbite-svelte'
    import LogoSVG from '../../../../components/svg-icons/btn-icons/LogoSVG.svelte'

    export let type = ''
    export let name = ''
    export let href = ''
</script>

{#if type.includes('mobile')}
    <a rel="noreferrer" {href} title={name} target="_blank" class="-m-1.5 p-1.5">
        <span class="sr-only">{name}</span>
        <CustomComponent component={LogoSVG} />
    </a>
{:else}
    <NavBrand {href} class="group" target="_blank">
        <LogoSVG />
        <span><slot /></span>
    </NavBrand>
{/if}
