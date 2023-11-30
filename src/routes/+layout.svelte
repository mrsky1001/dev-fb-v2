<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script>
    /**
     * Компонент обертка применяемый для всех маршрутов
     * @component
     */

    import './styles.css'
    import Toaster from '../core/components/toast/Toaster.svelte'
    import Header from './Header.svelte'
    import { onMount } from 'svelte'
    import { authStore } from '../stores/init-store'

    let isLoaded = false
    onMount(() => {
        isLoaded = true
        authStore.initFromLS()
    })
</script>

<Header />
<Toaster />
{#if isLoaded}
    <slot />
{/if}

<style lang="scss">
</style>
