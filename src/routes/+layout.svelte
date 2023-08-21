<script>
    /**
     * Базовый компонент - основа
     * @Component
     */
    import './styles.css'
    import Header from './Header.svelte'
    import { initApp } from '../core/server/init-app'
    import { onMount } from 'svelte'

    onMount(() => {
        initApp()
    })
</script>

<Header />
<slot />

<style lang="scss">
</style>
