<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент выбора данных
     */
    import Label from '../../Label/Label.svelte'
    import Select from './tags/Select.svelte'
    import type { TOptionSettings } from '../../../form.control/types'

    export let id = ''
    export let placeholder = ''
    export let value
    export let title = ''
    export let error: string
    export let disabled = false
    export let options: any[] = []
    export let required = false
    export let onChange = undefined
    export let optionSettings: TOptionSettings

    export let label = ''
</script>

<Label forName={id} text={label} {disabled} />
<Select {id} bind:value bind:error {title} {disabled} {placeholder} {options} {required} {onChange} {optionSettings} />
