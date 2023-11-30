<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import { afterUpdate } from 'svelte'
    import { Img } from 'flowbite-svelte'
    import Option from '../../../../form.control/select/Option'
    import type { TOptionSettings } from '../../../../form.control/types'

    /**
     *  Компонент выбора данных
     */
    const defaultParams: { optionSettings: TOptionSettings } = {
        optionSettings: { idField: 'id', valueField: 'id', textField: 'name', typeValue: 'valueType' }
    }

    export let id = ''
    export let title = ''
    export let placeholder = ''
    export let options: Option[] = []
    export let value: any
    export let error: string
    export let disabled = false
    export let required = false
    export let onChange = undefined
    export let optionSettings: TOptionSettings = defaultParams.optionSettings

    /**
     * Обработка параметров компонента
     */
    optionSettings = Object.assign({}, defaultParams.optionSettings, optionSettings)

    title = title.length ? title : placeholder
    let errorText = error ?? ''

    const getImgValue = (value: any) => {
        if (optionSettings.imgField) {
            return value[optionSettings.imgField]
        }

        return undefined
    }

    const getText = (value: any) => {
        if (Array.isArray(optionSettings.textField)) {
            return optionSettings.textField.map((f) => value[f]).join(' | ')
        } else {
            return value[optionSettings.textField]
        }
    }

    let listOptions = options.map((o) => {
        return new Option({
            id: o[optionSettings.idField],
            img: optionSettings.imgField ? o[optionSettings.imgField] : '',
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
            '      '
    }

    /**
     * Обработка параметров после обновления
     */
    afterUpdate(() => {
        const valueObj = optionSettings.typeValue === 'valueType' ? options.find((o) => o[optionSettings.valueField] === value) : value

        if (valueObj && valueObj.name) {
            if (String(valueObj.name).startsWith('empty_')) {
                value = undefined
            }
        }

        btnTagParams.colorClasses = valueObj ? ' text-gray-900' : ''
        btnTagParams.img = valueObj ? getImgValue(valueObj) : undefined

        if (!btnTagParams.img) {
            btnTagParams.classes += ' flex'
        }

        listOptions = [...listOptions]

        if (disabled === true) {
            disabledCSS += ' bg-gray-100 focus:bg-[white]'
            btnTagParams.text = '-'
        } else {
            btnTagParams.text = valueObj ? getText(valueObj) : placeholder
            disabledCSS = ''
        }

        errorText = error ?? ''
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
        //todo for number and strings lists
        const selectedOption = options.find((o) => o[optionSettings.idField] === option.id)

        if (selectedOption && optionSettings.typeValue === 'valueType') {
            value = selectedOption[optionSettings.valueField]
        } else {
            value = selectedOption
        }

        error = ''
    }
</script>

<svelte:window on:click={onWindowClick} />

<button id="dropdownDefaultButton" class={btnTagParams.classes + btnTagParams.colorClasses + disabledCSS} type="button" {title} {disabled} bind:this={btnRef} on:click={() => (isShow = !isShow)}>
    <div class="relative z-1 bg-[transparent] w-full inline-flex justify-between items-center">
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
<div id="dropdown" hidden={!isShow} class=" w-auto absolute z-10 bg-[white] divide-y divide-gray-100 rounded-lg shadow w-44">
    <ul class=" text-sm py-2 text-gray-700" aria-labelledby="dropdownDefaultButton">
        {#each listOptions as option}
            <li>
                <a href="#" class=" flex items-center px-4 py-2 {getOptionColorClass(option)}" on:click={() => onSelect(option)}>
                    <div hidden={!option.img} class="divide-x-2 pr-2 mr-2 border-r">
                        <Img class="w-9 h-9  rounded-full bg-gray-100 text-green-500" src={option.img} alt={option.text} />
                    </div>
                    {option.text}</a
                >
            </li>
        {/each}
    </ul>
</div>
<p class="ml-1 mt-1 text-xs text-red-600">{errorText}</p>
