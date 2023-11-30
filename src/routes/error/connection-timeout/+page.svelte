<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент для входа
     * @Component
     */
    import { Img } from 'flowbite-svelte'
</script>

<section class="h-[calc(100vh-6rem)] flex items-start pt-20 justify-center">
    <div class="flex flex-row items-center justify-center">
        <div class="flex flex-col gap-3">
            <h1 class="text-2xl font-bold text-primary-600">522 Connection Timed Out</h1>
            <p class="text-6xl font-bold">Упс, пропала связь с сервером :(</p>
            <p class="text-2xl font-bold">Мы уже работаем над решением проблемы!</p>
            <p class="text-gray-700">Попробуйте перезагрузить страницу позднее</p>
        </div>
        <div>
            <Img width="400" src={'/imgs/foma.png'} />
        </div>
    </div>
</section>

<style lang="scss">
</style>
