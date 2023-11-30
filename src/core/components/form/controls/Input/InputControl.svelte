<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент ввода данных
     */
    import Label from '../../Label/Label.svelte'
    import Input from './tags/Input.svelte'
    import type { TNumSettingsInput } from '../../../form.control/types'

    export let id = ''
    export let placeholder = ''
    export let type = 'text'
    export let required = false
    export let group = undefined
    export let disabled = false
    export let error = ''
    export let value
    export let onChange = undefined
    export let title = ''
    export let classes = ''
    export let inputClasses = ''
    export let numSettings: TNumSettingsInput | undefined = undefined

    export let label = ''

    placeholder = placeholder.length ? placeholder : label

    let containerClassesCSS = classes

    if (type === 'checkbox' || type === 'radio') {
        containerClassesCSS = 'flex'
    }
</script>

<div class={containerClassesCSS}>
    {#if type === 'checkbox'}
        <Input {id} {type} {title} bind:group bind:value bind:error {placeholder} bind:disabled classes={inputClasses} {numSettings} {required} {onChange} />
        <Label forName={id} text={label} {disabled} classes="font-medium" />
    {:else if type === 'radio'}
        <Input {id} {type} {title} bind:group bind:error {value} {placeholder} classes={inputClasses} {disabled} {numSettings} {required} {onChange} />
        <Label forName={id} text={label} {disabled} classes="font-medium" />
    {:else}
        <Label forName={id} text={label} {disabled} />
        <Input {id} {type} {title} bind:group bind:value bind:error {placeholder} {numSettings} classes={inputClasses} {disabled} {required} {onChange} />
    {/if}
</div>
