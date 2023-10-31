<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент для входа
     * @Component
     */
    import InputControl from '../../../core/components/form/controls/Input/InputControl.svelte'
    import { login } from '../../../core/services/auth.services'
    import { createToastStore } from '../../../core/stores/toast/toast.store'
    import toaster from '../../../core/stores/toast/all-toast.store'
    import { authStore } from '../../../stores/init-store'
    import messages from '../../../lib/collections/messages'
    import { LoginData } from '../../../core/models/auth/LoginData'
    import type { TLoginData } from '../../../core/models/types'
    import routes from '$lib/collections/routes'

    const loginData = new LoginData()

    const onLogin = () => {
        login(loginData)
            .then((res: TLoginData) => {
                authStore.updateLoginData(res)
                toaster.add(createToastStore(messages.LOGIN_SUCCESS))

                setTimeout(() => {
                    window.location.href = '/'
                }, 1000)
            })
            .catch(() => {
                try {
                    toaster.add(createToastStore(messages.LOGIN_ERROR))
                } catch (err) {
                    console.log(err)
                }
            })
    }
</script>

<section class="pt-[10%] bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Вход</h1>
                <div class="space-y-4 md:space-y-6">
                    <div>
                        <InputControl id="email" type="email" label="E-mail/Логин" placeholder="Введите ваш E-mail/Логин..." bind:value={loginData.email} />
                    </div>
                    <div>
                        <InputControl id="password" type="password" label="Пароль" title="Пароль" placeholder="••••••••" bind:value={loginData.password} />
                    </div>
                    <div class="flex justify-between items-end">
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            У вас нет аккаунта?
                            <a href={routes.LOGIN} class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Зарегистрироваться </a>
                        </p>
                        <button
                            on:click={onLogin}
                            class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
