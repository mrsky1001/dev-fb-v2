<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import { onMount } from 'svelte'
    import ToastIcon from './ToastIcon.svelte'
    import type { TToastTypes } from '../../../modules/app/toast/toast'

    export let type: TToastTypes = 'info'
    export let text = ''
    export let id: number
    export let close: (id: number) => void

    let classesContainer = 'animate__animated animate__backInDown mt-2 w-full flex items-center max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow   '

    onMount(() => {
        setTimeout(() => {
            classesContainer += 'animate__animated animate__bounceOutUp'
        }, 5000)

        setTimeout(() => {
            close(id)
        }, 5000)
    })
</script>

<div id={String(id)} class={classesContainer} role="alert">
    <ToastIcon {type} />
    <div class="ml-3 font-normal whitespace-pre-wrap">
        {text.trim().split('\n').join('\n\n')}
    </div>
    <button
        class="  ml-auto -mx-1.5 -my-1.5 text-gray-500 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-7 w-7"
        aria-label="Закрыть"
        title="Закрыть"
        on:click={() => close(id)}
    >
        <span class="sr-only">Закрыть</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
    </button>
</div>
