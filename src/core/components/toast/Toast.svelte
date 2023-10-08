<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import type { TToastTypes } from '../../models/types.js'
    import { onDestroy, onMount } from 'svelte'
    import ToastIcon from './ToastIcon.svelte'

    export let type: TToastTypes = 'info'
    export let text = ''
    export let id: string
    export let close: (id: string) => void

    let classesContainer =
        'animate__animated animate__backInDown mt-2 w-full flex items-center max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 '

    onMount(() => {
        setTimeout(() => {
            classesContainer += 'animate__animated animate__bounceOutUp'
        }, 4000)

        setTimeout(() => {
            close(id)
        }, 5000)
    })

    onDestroy(() => {})
</script>

<div id="toast{id}" class={classesContainer} role="alert">
    <ToastIcon {type} />
    <div class="ml-3 font-normal">{text}</div>
    <button
        type="button"
        class="  ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Закрыть"
        title="Закрыть"
        on:click={() => close(id)}
    >
        <span class="sr-only">Закрыть</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
        </svg>
    </button>
</div>
