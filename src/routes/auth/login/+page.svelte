<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент для входа
     * @Component
     */
    import { authStore } from '../../../stores/init-store'
    import messages from '../../../lib/collections/messages'
    import { LoginData } from '../../../modules/auth/deps/loginData.class'
    import routes from '$lib/collections/routes'
    import type { IAuth } from '../../../modules/auth/auth.class'
    import authService from '../../../modules/auth/auth.service'
    import InputControl from '../../../core/components/form/controls/Input/InputControl.svelte'
    import { Button } from 'flowbite-svelte'
    import allToastStore from '../../../modules/app/toast/deps/all-toast.store'

    const loginData = new LoginData()
    let isRunLogin = false

    const onLogin = () => {
        if (!isRunLogin) {
            isRunLogin = true

            authService
                .login(loginData)
                .then((res: IAuth) => {
                    authStore.updateLoginData(res)
                    allToastStore.createFromObj(messages.LOGIN_SUCCESS)

                    setTimeout(() => {
                        history.back()
                    }, 1000)
                })
                .catch(() => {
                    try {
                        allToastStore.createFromObj(messages.LOGIN_ERROR)
                    } catch (err) {
                        console.log(err)
                    }
                })
                .finally(() => {
                    isRunLogin = false
                })
        }
    }
</script>

<section class="pt-[10%] bg-gray-50">
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Вход</h1>
                <div
                    class="space-y-4 md:space-y-6"
                    on:keyup={(e) => {
                        if (e.key === 'Enter') {
                            onLogin()
                        }
                    }}
                >
                    <div>
                        <InputControl id="email" type="email" label="E-mail" placeholder="Введите ваш E-mail..." bind:value={loginData.email} />
                    </div>
                    <div>
                        <InputControl id="password" type="password" label="Пароль" title="Пароль" placeholder="••••••••" bind:value={loginData.password} />
                    </div>
                    <div class="flex justify-between items-end">
                        <p class="text-sm font-light text-gray-500">
                            У вас нет аккаунта?
                            <a href={routes.REGISTRATION} class="font-medium text-primary-600 hover:underline"> Зарегистрироваться </a>
                        </p>
                        <Button
                            on:click={() => onLogin()}
                            class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center   "
                        >
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
