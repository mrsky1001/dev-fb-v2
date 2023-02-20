<script>
	import './styles.css';
</script>

<div class="app">
<!--	<Header />-->

	<main>
		<slot />
	</main>

<!--	<footer>-->
<!--		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>-->
<!--	</footer>-->
</div>

<style>
	.app{
		width: 100%;
		height: 100vh;
	}

	main{
		width: 100%;
		height: 100%;
	}
</style>
