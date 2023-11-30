<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     *  Компонент тега label
     */
    import Input from '../controls/Input/tags/Input.svelte'

    export let forName
    export let text
    export let disabled
    export let classes = 'font-medium'

    $: getCSSClasses = () => {
        let classesCSS = `text-sm block mb-2 text-gray-900  ${classes}`

        if (disabled) {
            classesCSS += ' opacity-70'
        }

        return classesCSS
    }
</script>

<label for={forName} class={getCSSClasses()}>{text}</label>
