<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import SuccessSVG from '../../../svg/toast-svg/SuccessSVG.svelte'
    import WarningSVG from '../../../svg/toast-svg/WarningSVG.svelte'
    import InfoSVG from '../../../svg/toast-svg/InfoSVG.svelte'
    import ErrorSVG from '../../../svg/toast-svg/ErrorSVG.svelte'
    import { onMount } from 'svelte'

    export let type

    let iconClasses = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg'
    const color = ' text-green-500 bg-green-100 dark:bg-green-700 dark:text-green-200'

    onMount(() => {
        switch (type) {
            case 'info':
                iconClasses += color.replaceAll('green', 'blue')
                break
            case 'warning':
                iconClasses += color.replaceAll('green', 'yellow')
                break
            case 'error':
                iconClasses += color.replaceAll('green', 'red')
                break
            default:
                iconClasses += color
        }
    })
</script>

<div class={iconClasses}>
    {#if type === 'info'}
        <InfoSVG />
    {:else if type === 'warning'}
        <WarningSVG />
    {:else if type === 'success'}
        <SuccessSVG />
    {:else if type === 'error'}
        <ErrorSVG />
    {/if}
</div>
