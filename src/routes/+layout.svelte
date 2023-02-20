<script>
    import './styles.css';
    import anime from 'animejs/lib/anime'
    import {onMount} from "svelte";
    import Header from "./Header.svelte";

    onMount(() => {
        anime({
            targets: '.title>h1',
            opacity: '1',
            easing: 'easeInOutQuad',
            translateY: '0px'
        });
    })

</script>

<div class="app">
    <Header/>

    <main>
        <section>
            <div class="title-container">
                <div class="title">
                    <h1>
                        FOMA-BLOG
                    </h1>
                </div>
                <ul class="menu-bar">
                    <li> О нас</li>
                    <li> Разделы</li>
                    <li> Контакты</li>
                    <li> Лавка</li>
                </ul>
            </div>

        </section>
        <div class="side-container">
            <slot/>
        </div>
    </main>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 890" xmlns="http://www.w3.org/2000/svg"
         class="transition duration-300 ease-in-out delay-150">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
        </defs>
        <path d="M 0,700 C 0,200 0,350 0,350 C 116.1531100478469,360.8516746411483 232.3062200956938,
        371.70334928229664 326,383 C 419.6937799043062,394.29665071770336 490.92822966507174,406.0382775119617 566,
        393 C 641.0717703349283,379.9617224880383 719.9808612440193,342.14354066985646 811,
        307 C 902.0191387559807,271.85645933014354 1005.1483253588517,239.38755980861245 1112,247 C 1218.8516746411483,254.61244019138755 1329.4258373205741,302.3062200956938 1440,
        350 C 1440,350 1440,400 900,1500 Z"
              stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
    </svg>
    <!--	<footer>-->
    <!--		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>-->
    <!--	</footer>-->
</div>

<style lang="scss">
  #svg {
    transform: scale(1.5) rotateY(45deg);
    position: absolute;
    z-index: -1;
    top: 0;
  }

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

  section {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title-container {
      position: relative;
      width: 50%;
      height: 40vw;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      //border-radius: 0 30px  30px 0;
      //box-shadow: 30px 30px 30px 10px rgba(0,0,0,.15),
      //inset 15px 15px 10px rgba(255,255,255,.75),
      //15px 15px 30px 35px rgba(255,255,255,.55),
      //inset -1px -1px 10px rgba(0,0,0,.2);

      .title {
        position: relative;
        font-size: 6vw;
        border-bottom: .3vw solid;
        padding: 0 0 0 10%;

        > * {
          opacity: 0;
          transform: translateY(200px);
        }
      }

      .menu-bar {
        position: relative;
        font-size: 1.8vw;
        padding: 5% 10%;
        display: flex;
        flex-direction: column;

        > * {

          padding-bottom: 3%;
        }
      }
    }

    .side-container {
      width: 50%;
      height: 50%;
      border: 4px solid var(--color-text);
      //background: url("../lib/images/we.jpg");


    }
  }
</style>
