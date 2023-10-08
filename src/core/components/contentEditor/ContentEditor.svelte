<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import Editor from '@tinymce/tinymce-svelte'

    export let value = ''

    let apiKey = 'a0ijmuegf97wcitfcjbqekt4zuq9huhhxhs82hblex68xzkd'
    let conf = {
        height: 500,
        plugins: [
            'advlist',
            'autolink',
            'autoresize',
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
        language: 'ru',
        // block_unsupported_drop: false,
        toolbar: 'undo redo |  casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | ' + 'bullist numlist outdent indent | removeformat | code table help'
    }
</script>

<div class="content-editor">
    <Editor {apiKey} {conf} {value} cssClass="content-editor" />
</div>

<style lang="scss" global>
    .tox.tox-tinymce {
        border: none !important;
        .tox-editor-header,
        .tox-statusbar {
            opacity: 0.4;
            transition: 0.3s all !important;

            &:hover {
                opacity: 1;
                transition: 0.3s opacity;
            }
        }
    }
</style>
