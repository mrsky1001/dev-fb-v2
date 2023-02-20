<script>
    import fomka from '$lib/images/fomka.svg'
    import anime from 'animejs/lib/anime'
    import {onMount} from "svelte";

    onMount(() => {
        /* anime({
             targets: '.fomka',
             left: '240px',
             backgroundColor: '#FFF',
             borderRadius: ['0%', '50%'],
             easing: 'easeInOutQuad'
         });*/
    })
</script>

<section>
    <img class="fomka" src="{fomka}" alt="">
</section>

<style lang="scss">

</style>
