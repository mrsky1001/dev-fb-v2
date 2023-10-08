<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент создания новой статьи
     * @Component
     */
    import type Section from '../../../../../../../core/stores/section/section'
    import Domain from '../../../../../../../core/stores/domain/domain'
    import ContentEditor from '../../../../../../../core/components/contentEditor/ContentEditor.svelte'
    import DocBlank from '../../../../../../../core/components/svg/btn-icons/DocBlankSVG.svelte'
    import ContentSVG from '../../../../../../../core/components/svg/btn-icons/ContentSVG.svelte'
    import DocBlankSVG from '../../../../../../../core/components/svg/btn-icons/DocBlankSVG.svelte'
    import ConfirmationSVG from '../../../../../../../core/components/svg/btn-icons/ConfirmationSVG.svelte'
    import InputControl from '../../../../../../../core/components/form/controls/Input/InputControl.svelte'
    export let data: { section: Section; domain: Domain }
    let { section, domain } = { ...data }
    const inFocusStep = (id: string) => {
        console.log(id)
    }

    const outFocusStep = (id: string) => {
        console.log(id)
    }

    let article = { title: '', annotation: '', content: 'Кто много видел, тот много знает' }
</script>

<div class="w-full px-4 mx-auto max-w-8xl">
    <div class="lg:flex">
        <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div class="w-full mt-20">
                <h1 class="inline-block my-10 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Новая статья</h1>
                <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                            <DocBlankSVG />
                        </span>
                        <h3 class="font-medium leading-tight">Основная информация</h3>
                        <p class="text-sm">Заголовок, краткое описание</p>
                        <form>
                            <div class="my-6">
                                <InputControl id="title-article" type="text" label="Название статьи" value={article.title} />
                            </div>
                            <div class="mb-6">
                                <InputControl id="title-article" type="text" label="Аннотация(краткое описание)" value={article.annotation} />
                            </div>
                        </form>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                            <ContentSVG />
                        </span>
                        <h3 class="font-medium leading-tight">Содержание статьи</h3>
                        <p class="text-sm" />
                        <div class="flex-auto max-w-8xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                            <ContentEditor value={article.content} />
                        </div>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                            <ConfirmationSVG />
                        </span>
                        <h3 class="font-medium leading-tight">Публикация</h3>
                        <p class="text-sm" />
                    </li>
                </ol>
            </div>
        </main>
    </div>
</div>
