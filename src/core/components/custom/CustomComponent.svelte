<script>
    export let component

    let instance

    $: if (instance && component.listeners) {
        for (let [key, listener] of Object.entries(component.listeners)) {
            instance.$on(key, listener)
        }
    }
</script>

<svelte:component this={component} {...component.props} bind:this={instance} />
