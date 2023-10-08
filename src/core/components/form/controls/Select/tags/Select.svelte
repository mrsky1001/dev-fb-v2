<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import Option from '../../../../../models/form/control/select/Option'
    import type { TOptionSettings } from '../../../../../models/types'
    import { afterUpdate } from 'svelte'
    import { Img } from 'flowbite-svelte'

    /**
     *  Компонент выбора данных
     */
    const defaultParams = {
        optionSettings: { idField: 'id', valueField: 'id', textField: 'name' }
    }

    export let id = ''
    export let title = ''
    export let placeholder = ''
    export let options: Option[] = []
    export let value
    export let disabled = false
    export let required = false
    export let onChange = undefined
    export let optionSettings: TOptionSettings = defaultParams.optionSettings

    /**
     * Обработка параметров компонента
     */
    optionSettings = Object.assign({}, defaultParams.optionSettings, optionSettings)

    title = title.length ? title : placeholder

    const getImgValue = () => {
        return value[optionSettings.imgField]
    }

    const getText = (o: Option) => {
        if (Array.isArray(optionSettings.textField)) {
            return optionSettings.textField.map((f) => o[f]).join(' | ')
        } else {
            return o[optionSettings.textField]
        }
    }

    let listOptions = options.map((o) => {
        return new Option({
            id: o[optionSettings.idField],
            img: o[optionSettings.imgField],
            text: getText(o)
        })
    })

    let disabledCSS = ''
    let btnTagParams = {
        text: placeholder,
        img: '',
        colorClasses: 'text-gray',
        classes:
            'relative bg-[white] border border-[transparent] rounded-lg  text-sm z-0 ' +
            'ring-1 ring-gray-300 focus:shadow-outline focus:ring-blue-600 focus:border-blue-600 w-full mt-[1px] px-[12px] py-[7px] ' +
            'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
    }

    /**
     * Обработка параметров после обновления
     */
    afterUpdate(() => {
        if (value && value.id) {
            if (String(value.id).startsWith('empty_')) {
                value = undefined
            }
        }

        btnTagParams.colorClasses = value ? ' text-gray-900' : ''
        btnTagParams.img = value ? getImgValue() : ''

        listOptions = [...listOptions]

        if (disabled === true) {
            disabledCSS += ' bg-gray-100 focus:bg-[white]'
            btnTagParams.text = '-'
        } else {
            btnTagParams.text = value ? getText(value) : placeholder
            disabledCSS = ''
        }
    })

    const getOptionColorClass = (option: Option) => {
        if (value && option.id === value[optionSettings.idField]) {
            return ' text-white bg-primary-500 '
        }

        return ' hover:bg-gray-200'
    }
    /**
     * Обработка показа выпадающего меню
     */
    let isShow = false
    let btnRef

    const onWindowClick = (e) => {
        if (btnRef.contains(e.target) == false) {
            isShow = false
        }
    }

    /**
     * Функции обработки событий
     */
    const onSelect = (option: Option) => {
        value = options.find((o) => o.id === option.id)
    }
</script>

<svelte:window on:click={onWindowClick} />

<button
    id="dropdownDefaultButton"
    class={btnTagParams.classes + btnTagParams.colorClasses + disabledCSS}
    type="button"
    {title}
    {disabled}
    bind:this={btnRef}
    on:click={() => (isShow = !isShow)}
>
    <div class="relative z-1 bg-[transparent] inline-flex justify-between items-center">
        {#if value && btnTagParams.img}
            <div class="divide-x-2 pr-2 mr-2 border-r">
                <Img class="w-9 h-9  rounded-full bg-gray-100 text-green-500" src={btnTagParams.img} alt={btnTagParams.text} />
            </div>
        {/if}
        <input class="z-[-1] w-full bg-white {disabledCSS}" value={btnTagParams.text} disabled />
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
    </div>
</button>
<div
    id="dropdown"
    hidden={!isShow}
    class="    w-auto absolute z-10 bg-[white] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
>
    <ul class=" text-sm py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        {#each listOptions as option}
            <li>
                <a
                    href="#"
                    class=" flex items-center px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white {getOptionColorClass(
                        option
                    )}"
                    on:click={() => onSelect(option)}
                >
                    <div hidden={!option.img} class="divide-x-2 pr-2 mr-2 border-r">
                        <Img class="w-9 h-9  rounded-full bg-gray-100 text-green-500" src={option.img} alt={option.text} />
                    </div>
                    {option.text}</a
                >
            </li>
        {/each}
    </ul>
</div>

<style>
</style>
