<script>
    import './styles.css';
    import anime from 'animejs/lib/anime'
    import {onMount} from "svelte";
    import Header from "./Header.svelte";
</script>

<div class="app">
    <Header/>

    <div class="w-full px-4 mx-auto max-w-8xl ">
        <div class="flex w-full">
            <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
                <slot></slot>
            </main>
        </div>
    </div>
</div>

<style lang="scss">
  .app {
    width: 100%;
    height: 100vh;
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

</style>
