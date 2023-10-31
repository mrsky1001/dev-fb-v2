<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент для входа
     * @Component
     */
    import InputControl from '../../../core/components/form/controls/Input/InputControl.svelte'
    import SelectControl from '../../../core/components/form/controls/Select/SelectControl.svelte'
    import { registration } from '../../../core/services/auth.services'
    import type { TErrorData, TErrorObj, TRegistrationResult } from '../../../core/models/types'
    import { type IRegistrationData, RegistrationData } from '../../../core/models/auth/RegistrationData'
    import { authStore } from '../../../stores/init-store'
    import toaster from '../../../core/stores/toast/all-toast.store'
    import { createToastStore } from '../../../core/stores/toast/toast.store'
    import messages from '../../../lib/collections/messages'
    import type { IUserType } from '../../../core/models/userType/UserType'
    import Toast from '../../../core/stores/toast/toast'
    import routes from '$lib/collections/routes'

    export let data: { userTypes: IUserType[] }
    const { userTypes } = data

    const registrationData = new RegistrationData()

    const errorData: TErrorData<IRegistrationData> = { email: '', password: '', login: '', name: '', type: '' }
    let errorText = ''

    const onRegistration = () => {
        errorText = ''
        registration(registrationData)
            .then((res: TRegistrationResult) => {
                authStore.updateLoginData(res)
                toaster.add(createToastStore(messages.REGISTRATION_SUCCESS))

                setTimeout(() => {
                    window.location.href = '/'
                }, 1000)
            })
            .catch((error) => {
                try {
                    let errorsText = ''
                    const errors: string | TErrorObj<typeof errorData>[] = JSON.parse(error.request.response).message

                    toaster.add(createToastStore(messages.REGISTRATION_ERROR))

                    if (typeof errors === 'string') {
                        errorText = errors
                        toaster.add(createToastStore(new Toast(errors)))
                    } else {
                        errors.forEach((errObj) => {
                            if (errObj.property in errorData) {
                                errorData[errObj.property] = errObj.message
                                errorsText += `\n${errObj.message}`
                            }
                        })

                        toaster.add(createToastStore(new Toast(errorsText)))
                    }
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
                <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Регистрация</h1>
                {#if userTypes.length}
                    <div class="space-y-4 md:space-y-6">
                        <div>
                            <InputControl id="name" type="text" label="Имя" bind:error={errorData.name} placeholder="Введите ваше имя..." bind:value={registrationData.name} />
                        </div>
                        <div>
                            <InputControl id="login" type="text" label="Логин" bind:error={errorData.login} placeholder="Введите ваш логин..." bind:value={registrationData.login} />
                        </div>
                        <div>
                            <InputControl id="email" type="email" label="E-mail" bind:error={errorData.email} placeholder="Введите ваш E-mail..." bind:value={registrationData.email} />
                        </div>
                        <div>
                            <InputControl id="password" type="password" label="Пароль" title="Пароль" bind:error={errorData.password} placeholder="••••••••" bind:value={registrationData.password} />
                        </div>
                        <div>
                            <SelectControl
                                id="type"
                                label="Роль"
                                bind:error={errorData.type}
                                placeholder="Выберите роль..."
                                bind:value={registrationData.type}
                                options={userTypes}
                                optionSettings={{
                                    idField: 'value',
                                    textField: 'name',
                                    valueField: 'value',
                                    typeValue: 'valueType'
                                }}
                            />
                        </div>
                        <!--                    <div class="flex items-center justify-between">-->
                        <!--                        <div class="flex items-start">-->
                        <!--                            <div class="flex items-center h-5">-->
                        <!--                                <input-->
                        <!--                                    id="remember"-->
                        <!--                                    aria-describedby="remember"-->
                        <!--                                    type="checkbox"-->
                        <!--                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"-->
                        <!--                                    required=""-->
                        <!--                                />-->
                        <!--                            </div>-->
                        <!--                            <div class="ml-3 text-sm">-->
                        <!--                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <!--                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>-->
                        <!--                    </div>-->
                        <div class="flex justify-between items-end">
                            <p class="pr-2 text-sm font-light text-gray-500 dark:text-gray-400">
                                Уже есть аккаунт? <a href={routes.LOGIN} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Войти</a>
                            </p>
                            <button
                                on:click={onRegistration}
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                        <p class="p-0 m-0 text-xs text-red-600 dark:text-red-500">{errorText}</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
