<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import allToastStore from '../../store/toast/all-toast.store.js'
    import type { IToast } from '../../store/toast/toast'
    import Toast from './Toast.svelte'
    import { subscribe } from 'svelte/internal'
    import { onDestroy } from 'svelte'

    let toasts: IToast[]

    const allUnsubscribe = subscribe(allToastStore, () => {
        toasts = allToastStore.all()
    })

    const removeToast = (id: string) => {
        allToastStore.remove(id)
        document.getElementById(id)?.remove()
    }

    onDestroy(() => {
        allUnsubscribe()
    })
</script>

<div class="text-sm fixed items-end z-10 min-w-[300px] flex flex-col right-0">
    {#each toasts as toast}
        <Toast {...toast} close={removeToast} />
    {/each}
</div>
