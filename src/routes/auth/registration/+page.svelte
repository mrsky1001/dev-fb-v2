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

    import type { TErrorData, TErrorObj } from '../../../core/models/types'
    import messages from '$lib/collections/messages'
    import { Button } from 'flowbite-svelte'
    import routes from '$lib/collections/routes'
    import { onMount } from 'svelte'
    import type UserType from '../../../modules/userType/userType.class'
    import { authStore } from '../../../stores/init-store'
    import allToastStore from '../../../modules/app/toast/deps/all-toast.store'
    import userTypeService from '../../../modules/userType/userType.service'
    import type { IUserForCreate } from '../../../modules/user/user.class'
    import authService from '../../../modules/auth/auth.service'
    import type { IAuth } from '../../../modules/auth/auth.class'

    let userTypes: UserType[] = []

    const registrationData: IUserForCreate = { login: '', avatarPath: '', email: '', password: '', name: '', typeId: -1 }

    const errorData: TErrorData<IUserForCreate> = { login: '', avatarPath: '', email: '', password: '', name: '', typeId: '' }
    let errorText = ''

    const onRegistration = () => {
        errorText = ''
        authService
            .registration(registrationData)
            .then((res: IAuth) => {
                authStore.updateLoginData(res)
                allToastStore.createFromObj(messages.REGISTRATION_SUCCESS)

                setTimeout(() => {
                    window.location.href = '/'
                }, 1000)
            })
            .catch((error) => {
                try {
                    let errorsText = ''
                    const errors: string | TErrorObj<typeof errorData>[] = JSON.parse(error.request.response).message

                    allToastStore.createFromObj(messages.REGISTRATION_ERROR)

                    if (typeof errors === 'string') {
                        errorText = errors
                        allToastStore.create(errors)
                    } else {
                        errors.forEach((errObj) => {
                            if (errObj.property in errorData) {
                                errorData[errObj.property] = errObj.message
                                errorsText += `\n${errObj.message}`
                            }
                        })

                        allToastStore.create(errorsText)
                    }
                } catch (err) {
                    console.log(err)
                }
            })
    }

    onMount(async () => {
        userTypes = await userTypeService.getAll()
    })
</script>

<section class="pt-[10%] bg-gray-50">
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Регистрация</h1>
                {#if userTypes.length}
                    <div class="space-y-4 md:space-y-6">
                        <div>
                            <InputControl id="name" type="text" label="Имя (ФИО)" bind:error={errorData.name} placeholder="Введите ваше имя..." bind:value={registrationData.name} />
                        </div>
                        <div>
                            <InputControl id="email" type="email" label="E-mail" bind:error={errorData.email} placeholder="Введите ваш E-mail..." bind:value={registrationData.email} />
                        </div>
                        <div>
                            <InputControl id="login" label="Логин" bind:error={errorData.login} placeholder="Введите ваш login..." bind:value={registrationData.login} />
                        </div>
                        <div>
                            <InputControl id="password" type="password" label="Пароль" title="Пароль" bind:error={errorData.password} placeholder="••••••••" bind:value={registrationData.password} />
                        </div>
                        <div>
                            <SelectControl
                                id="type"
                                label="Роль"
                                bind:error={errorData.typeId}
                                placeholder="Выберите роль..."
                                bind:value={registrationData.typeId}
                                options={userTypes}
                                optionSettings={{
                                    idField: 'id',
                                    textField: 'name',
                                    valueField: 'id',
                                    typeValue: 'valueType'
                                }}
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <p class="pr-2 text-sm font-light text-gray-500">
                                Уже есть аккаунт? <a href={routes.LOGIN} class="font-medium text-primary-600 hover:underline">Войти</a>
                            </p>
                            <Button
                                on:click={onRegistration}
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg
                             text-sm px-5 py-2.5 text-center   "
                            >
                                Зарегистрироваться
                            </Button>
                        </div>
                        <p class="p-0 m-0 text-xs text-red-600">{errorText}</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
