<script lang="ts">
    import classNames from 'classnames';

    export let articleClass =
        ' bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<article class={classNames(articleClass, $$props.classArticle)}>
    <slot/>
</article>
