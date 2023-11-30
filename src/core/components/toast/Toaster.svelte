<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->
<script lang="ts">
    import Toast from './Toast.svelte'
    import { subscribe } from 'svelte/internal'
    import { onDestroy } from 'svelte'
    import type { IToast } from '../../../modules/app/toast/toast.js'
    import allToastStore from '../../../modules/app/toast/deps/all-toast.store.js'

    let toasts: IToast[]

    const allUnsubscribe = subscribe(allToastStore, () => {
        // toasts?.forEach((t) => {
        //     console.log('t.id')
        //     console.log(t.id)
        //     setTimeout(() => {
        //         t.id && document.getElementById(t.id.toString())?.remove()
        //     }, 5000)
        // })
        toasts = allToastStore.all()
    })

    const removeToast = (id: number) => {
        allToastStore.remove(id)
        document.getElementById(String(id))?.remove()
    }

    onDestroy(() => {
        allUnsubscribe()
    })
</script>

<div class="text-sm fixed items-end z-10 min-w-[300px] flex flex-col right-0 pr-5">
    {#each toasts as toast}
        <Toast {...toast} close={removeToast} />
    {/each}
</div>
