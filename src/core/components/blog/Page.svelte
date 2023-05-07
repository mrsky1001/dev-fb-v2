<script lang="ts">
    import {
        ArticleAuthor,
        ArticleBody,
        ArticleHead,
        ArticleWrapper,
        BlogBodyWrapper,
        BlogHead,
        Section
    } from '../flowbite'
    import { ExampleDiv, SectionBlock, SectionHeader } from '../utils/index.ts'
    import { ArrowSmallRight, Newspaper } from 'svelte-heros'
    import { allSectionsStore } from '../../server/stores/section/all-sections.store'
    import { subscribeAll } from '../../server/stores/subscribe-all'
    import { onDestroy, onMount } from 'svelte'
    import type { IPost } from '../../server/stores/post/post'
    import type { ISection } from '../../server/stores/section/section'
    import ArticleImg from '../flowbite/blog/ArticleImg.svelte'
    import ArticleContent from '../flowbite/blog/ArticleContent.svelte'
    import type { IPostStore } from '../../server/stores/post/post.store'

    export let postStore: IPostStore
    $: post = postStore?.self() ?? {}

    onMount(() => {
        console.log('ssssssssssssss')
        console.log(post)
    })
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->

<!--<SectionHeader category="marketing" {title} {breadcrumb_title} {description} />-->

<!--<SectionBlock title={subTitle}>-->
<!--    {subDescription}-->
<!--</SectionBlock>-->

<ExampleDiv>
    {#if post}
        <Section name="page">
            <ArticleWrapper>
                <!--            <ArticleImg />-->

                <ArticleContent>
                    <ArticleHead>
                        <span
                            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex
                                    items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                        >
                            Tutorial
                        </span>
                        <span class="text-sm" />
                    </ArticleHead>
                    <ArticleBody>
                        <svelte:fragment slot="h3">
                            <a>{post.title} </a>
                        </svelte:fragment>
                        <svelte:fragment slot="paragraph">
                            <p class="mb-5 font-light text-gray-500 dark:text-gray-400" />
                        </svelte:fragment>
                    </ArticleBody>
                    <ArticleAuthor>
                        <svelte:fragment slot="author">
                            <img class="w-7 h-7 rounded-full" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white" />
                        </svelte:fragment>
                        <a
                            href="/dev-fb-v2/static"
                            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        >
                            Прочитать
                            <ArrowSmallRight class="ml-2" />
                        </a>
                    </ArticleAuthor>
                </ArticleContent>
            </ArticleWrapper>
        </Section>
    {/if}
</ExampleDiv>
