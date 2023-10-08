<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент ввода данных
     */
    import Label from '../../Label/Label.svelte'
    import TextArea from './tags/TextArea.svelte'

    export let id = ''
    export let placeholder = ''
    export let required = false
    export let value
    export let onChange = undefined

    export let label = ''
</script>

<Label forName={id} text={label} />
<TextArea {id} bind:value {placeholder} {required} {onChange} />
