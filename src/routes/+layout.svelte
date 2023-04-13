<script>
    import './styles.css';
    import anime from 'animejs/lib/anime'
    import {onMount} from "svelte";
    import Header from "./Header.svelte";
</script>

<div class="app">
    <Header/>

    <main>
        <slot></slot>
    </main>
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
