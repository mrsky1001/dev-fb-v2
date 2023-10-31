<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент для входа
     * @Component
     */
    import { authStore } from '../../../app/store/init-store'
    import toaster from '../../../core/store/toast/all-toast.store'
    import { createToastStore } from '../../../core/store/toast/toast.store'
    import messages from '../../../app/collections/messages'

    const onReturn = () => {
        history.back()
    }

    const onLogout = () => {
        authStore.updateLoginData({ token: null, user: null })
        toaster.add(createToastStore(messages.LOGOUT_SUCCESS))

        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
    }
</script>

<section class="pt-[10%] bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Выход</h1>
                <div class="space-y-4 md:space-y-6">
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">Вы действительно хотите выйти?</p>
                    <div class="flex justify-between">
                        <button
                            on:click={onReturn}
                            type="button"
                            class="bg-white hover:text-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Нет, вернуться
                        </button>
                        <button
                            on:click={onLogout}
                            class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Да, выйти!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
