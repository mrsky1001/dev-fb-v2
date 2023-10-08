<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import type { TNumSettingsInput } from '../../../../../models/types'

    /**
     *  Компонент тега textarea
     */
    export let id = ''
    export let placeholder = ''
    export let title = ''
    export let disabled = false
    export let required = false
    export let value
    export let onChange = undefined

    export let classes

    let classesCSS = `border border-gray-300 text-gray-900   rounded-lg focus:bg-[white] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                                         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                                                          ${classes}`
    if (disabled) {
        classesCSS += ' bg-gray-100'
    }

    const _onChange = (val: string) => {
        value = val
    }
</script>

<textarea
    {id}
    name={id}
    {disabled}
    {required}
    {placeholder}
    title={title.length ? title : placeholder}
    on:change={(e) => _onChange(e.target.value)}
    class={classesCSS}>{value ?? ''}</textarea
>
