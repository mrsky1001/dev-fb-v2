<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import { onMount } from 'svelte'
    import InfoSVG from '../../../components/svg-icons/toast-svg/InfoSVG.svelte'
    import WarningSVG from '../../../components/svg-icons/toast-svg/WarningSVG.svelte'
    import SuccessSVG from '../../../components/svg-icons/toast-svg/SuccessSVG.svelte'
    import ErrorSVG from '../../../components/svg-icons/toast-svg/ErrorSVG.svelte'

    export let type: string

    let iconClasses = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg'
    const color = ' text-green-500 bg-green-100  '

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
