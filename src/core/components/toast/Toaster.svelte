<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import Toast from './Toast.svelte'
    import { subscribe } from 'svelte/internal'
    import { onDestroy } from 'svelte'
    import allToastStore from '../../stores/toast/all-toast.store'
    import type { IToast } from '../../stores/toast/toast'

    let toasts: IToast[]

    const allUnsubscribe = subscribe(allToastStore, () => {
        toasts?.forEach((t) => {
            setTimeout(() => {
                document.getElementById(t.id.toString())?.remove()
            }, 2000)
        })
        toasts = allToastStore.all()
    })

    const removeToast = (id: string) => {
        allToastStore.remove(Number(id))
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
