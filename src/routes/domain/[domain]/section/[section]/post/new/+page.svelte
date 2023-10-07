<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент создания новой статьи
     * @Component
     */
    import Editor from '@tinymce/tinymce-svelte'
    import type Section from '../../../../../../../core/stores/section/section'
    import Domain from '../../../../../../../core/stores/domain/domain'
    import ContentEditor from '../../../../../../../core/components/contentEditor/ContentEditor.svelte'
    export let data: { section: Section; domain: Domain }
    let { section, domain } = { ...data }
</script>

<main class="mt-28 pb-16 xl:pb-24 bg-white">
    <div class="flex relative z-20 justify-between p-7 O7PVNyZQb9PCjpNKbt_t mx-4 container bg-white rounded w-article-container arrNNfkSdu1f3lPZlfMG mx-auto">
        <article class="w-article container max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div class="flex flex-row justify-between">
                <h1>Редактор статьи для раздела "{section.name}" домена "{domain.text}"</h1>
            </div>
            <ContentEditor />
        </article>
    </div>
</main>
