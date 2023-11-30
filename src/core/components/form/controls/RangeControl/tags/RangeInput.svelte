<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    /**
     *  Компонент тега input
     */
    export let id = ''
    export let title = ''
    export let placeholder = ''
    export let disabled = false
    export let required = false
    export let value
    export let min = -10
    export let max = 10
    export let step = 1

    let className = ''
    export { className as class }

    let disabledCSS = ''
    let classesCSS = `${className}
                     w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                     `
</script>

<input {id} type="range" name={id} {disabled} {required} {min} {max} {step} {placeholder} title={title.length ? title : placeholder} bind:value class={classesCSS + disabledCSS} />
