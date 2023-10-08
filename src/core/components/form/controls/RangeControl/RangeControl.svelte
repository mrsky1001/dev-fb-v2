<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент ввода данных
     */
    import Label from '../../Label/Label.svelte'
    import RangeInput from './tags/RangeInput.svelte'

    export let id = ''
    export let label = ''
    export let required = false
    export let disabled = false
    export let value
    export let inputClasses = ''
    export let min = -10
    export let max = 10
    export let step = 1

    let className = ''
    export { className as class }
</script>

<div class={className}>
    <Label forName={id} text={label} {disabled} />
    <RangeInput {id} bind:value class={inputClasses} {min} {max} {step} {disabled} {required} />
</div>
