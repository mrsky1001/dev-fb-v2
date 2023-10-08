<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import type { TNumSettingsInput } from '../../../../../models/types'
    import { afterUpdate } from 'svelte'

    /**
     *  Компонент тега input
     */
    export let id = ''
    export let placeholder = ''
    export let title = ''
    export let type = 'text'
    export let group
    export let disabled = false
    export let numSettings: TNumSettingsInput
    export let required = false
    export let value
    export let onChange = undefined

    export let classes

    /**
     * Функция для задания динамического типа
     * @param node
     */
    const typeAction = (node) => {
        node.type = type
    }

    const isValidValue = (value: string | number) => {
        if (numSettings) {
            if (numSettings.min !== undefined && Number(value) < numSettings.min) {
                return false
            }

            if (numSettings.max !== undefined && Number(value) > numSettings.max) {
                return false
            }
        }

        return true
    }

    let disabledCSS = ''
    let classesCSS = `border border-gray-300 text-sm
                     focus:ring-primary-600 focus:border-primary-600 block
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                     `

    if (type === 'checkbox' || type === 'radio') {
        classesCSS += ' mr-2  text-blue-600 w-4 h-4 rounded'
        if (type === 'radio') {
            classesCSS += 'rounded-full'
        }
    } else {
        classesCSS += ' w-full text-gray-900 rounded-lg'
    }

    const _onChange = (target, val: string) => {
        const redAlertClasses = ' text-red-800 border border-red-300'
        let newValue: string | number = type === 'number' ? Number(val) : val

        if (type === 'checkbox') {
            value = !value
            target.checked = value
        } else if (isValidValue(newValue)) {
            if (type === 'radio') {
                group = value
            } else {
                value = newValue
            }
        } else {
            if (!isValidValue(newValue)) {
                if (!classesCSS.includes(redAlertClasses)) {
                    classesCSS += redAlertClasses

                    setTimeout(() => {
                        classesCSS = classesCSS.replace(redAlertClasses, '')
                    }, 1000)
                }
            }
        }
        if (type === 'radio') {
            group = value
        } else {
            target.value = value
        }
    }

    afterUpdate(() => {
        if (disabled === true) {
            disabledCSS += ' bg-gray-100 focus:bg-[white]'
        } else {
            disabledCSS = ''
        }
    })
</script>

{#if type === 'checkbox'}
    <input
        {id}
        type="checkbox"
        name={id}
        {disabled}
        {required}
        {placeholder}
        title={title.length ? title : placeholder}
        bind:checked={value}
        on:input={(e) => _onChange(e.target, e.target.value)}
        class={classesCSS + disabledCSS}
    />
{:else if type === 'radio'}
    <input
        {id}
        type="radio"
        name={id}
        {disabled}
        {required}
        {placeholder}
        title={title.length ? title : placeholder}
        bind:group
        {value}
        on:input={(e) => _onChange(e.target, e.target.value)}
        class={classesCSS + disabledCSS}
    />
{:else}
    <input
        {id}
        type="text"
        use:typeAction
        name={id}
        {disabled}
        {required}
        {placeholder}
        title={title.length ? title : placeholder}
        {value}
        on:change={(e) => _onChange(e.target, e.target.value)}
        class={classesCSS + disabledCSS}
    />
{/if}
