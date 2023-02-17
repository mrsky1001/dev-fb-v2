<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import anime from "animejs/lib/anime";
	let editor;
	import { onMount } from 'svelte';

	onMount(() => {
		// we need to use onMount because the div hasn't
		// been created by the time the init code runs
		anime({
			targets: '.menu-bar',
			translateX: 250,
			rotate: '1turn',
			backgroundColor: '#FFF',
			duration: 800
		});
		return () => {
			// any cleanup code goes here
		};
		editor()
	});


</script>

<svelte:head>
	<title>Home</title>
<!--	<meta name="description" content="Svelte demo app" />-->
</svelte:head>

<section>
	<div class="container-menu">
	<h1 transition:fade>
		FOMA-BLOG
	</h1>
		<ul class="menu-bar" >
			<li>О нас</li>
			<li>Разделы</li>
			<li>Контакты</li>
			<li>Лавка</li>
		</ul>
	</div>

<!--	<h2>-->
<!--		try editing <strong>src/routes/+page.svelte</strong>-->
<!--	</h2>-->

<!--	<Counter />-->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		height: 100%;
		padding: 0 10% ;
	}

	.menu-bar{
		list-style: none;
		font-size: 50px;
	}

	.menu-bar li{
		padding: 15px;
	}

	h1 {
		font-size: 120px;
	}


	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	@keyframes show-up-animation {
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
</style>
