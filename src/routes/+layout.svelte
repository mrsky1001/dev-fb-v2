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
</script>

<Header />
<Toaster />
<slot />

<style lang="scss">
</style>
