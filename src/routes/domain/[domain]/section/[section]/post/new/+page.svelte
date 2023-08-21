<script lang="ts">
    /**
     * Компонент создания новой статьи
     * @Component
     */
    import Editor from '@tinymce/tinymce-svelte'
    import type Section from '../../../../../../../core/stores/section/section'
    import Domain from '../../../../../../../core/stores/domain/domain'
    export let data: { section: Section; domain: Domain }
    let { section, domain } = { ...data }

    let apiKey = 'a0ijmuegf97wcitfcjbqekt4zuq9huhhxhs82hblex68xzkd'
    let conf = {
        height: 500,
        plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount'
        ],
        paste_data_images: true,
        images_file_types: 'jpg,svg,webp',
        // block_unsupported_drop: false,
        toolbar: 'undo redo |  casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | ' + 'bullist numlist outdent indent | removeformat | code table help'
    }
</script>

<main>
    <h1>Редактор статьи для раздела "{section.name}" домена "{domain.text}"</h1>
    <Editor {apiKey} {conf} value="Welcome to TinyMCE Svelte" />
</main>
