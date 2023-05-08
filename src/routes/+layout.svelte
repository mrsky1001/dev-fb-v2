<script>
    import './styles.css'
    import anime from 'animejs/lib/anime'
    import { onMount } from 'svelte'
    import Header from './Header.svelte'
</script>

<Header />

<!--        <aside id="sidebar" class="fixed inset-0 z-20 flex-none hidden h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"-->
<!--               aria-labelledby="sidebar-label">-->
<!--        </aside>-->
<slot />

<style lang="scss">
    //.app {
    //  width: 100%;
    //  height: 100vh;
    //}
    //
    //main {
    //  width: 100%;
    //  height: 100%;
    //  display: flex;
    //  flex-direction: row;
    //  justify-content: space-between;
    //  align-items: center;
    //}
</style>
