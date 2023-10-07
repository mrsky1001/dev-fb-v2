<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import { ExampleDiv } from '../utils/index.ts'
    import { ArrowSmallRight } from 'svelte-heros'
    import Post from '../../stores/post/post'
    import ArticleImg from './article/ArticleImg.svelte'
    import ArticleContent from './article/ArticleContent.svelte'
    import Section from '../section/Section.svelte'
    import BlogHead from './article/BlogHead.svelte'
    import BlogBodyWrapper from './article/BlogBodyWrapper.svelte'
    import ArticleWrapper from './article/ArticleWrapper.svelte'
    import ArticleHead from './article/ArticleHead.svelte'
    import ArticleBody from './article/ArticleBody.svelte'
    import ArticleAuthor from './article/ArticleAuthor.svelte'

    export let activeDomain
    export let activeSection: Section

    export let posts: Post[] = []
    $: descriptionDomain = activeDomain?.description

    const buildRoute = (urlTitle: string) => {
        return `/domain/${activeDomain.name}/section/${activeSection.id}/post/${urlTitle}`
    }
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->
{#if activeDomain}
    <!--<SectionBlock title={subTitle}>-->
    <!--    {subDescription}-->
    <!--</SectionBlock>-->

    <ExampleDiv>
        {#if activeSection}
            <Section name="blog">
                <BlogHead>
                    <svelte:fragment slot="h2">{activeSection.name}</svelte:fragment>
                    <svelte:fragment slot="paragraph">
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            {activeSection.description}
                        </p>
                    </svelte:fragment>
                </BlogHead>
                <BlogBodyWrapper>
                    {#each posts as post}
                        <ArticleWrapper>
                            <ArticleImg src={post.annotationStore.self().imgUrl} href={buildRoute(post.urlTitle)} />

                            <ArticleContent>
                                <ArticleHead>
                                    <span
                                        class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex
                                    items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                                    >
                                        Tutorial
                                    </span>
                                    <span class="text-sm">{post.getFormattedPublishDate()}</span>
                                </ArticleHead>
                                <ArticleBody>
                                    <svelte:fragment slot="h3">
                                        <a href={buildRoute(post.urlTitle)}>{post.title} </a>
                                    </svelte:fragment>
                                    <svelte:fragment slot="paragraph">
                                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                                            {post.annotationStore.self().text}
                                        </p>
                                    </svelte:fragment>
                                </ArticleBody>
                                <ArticleAuthor>
                                    <svelte:fragment slot="author">
                                        <img class="w-7 h-7 rounded-full" src={post.authorStore.self().avatar} alt="Jese Leos avatar" />
                                        <span class="font-medium dark:text-white">
                                            {post.authorStore.self().username}
                                        </span>
                                    </svelte:fragment>
                                    <a href={buildRoute(post.urlTitle)} class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        Прочитать
                                        <ArrowSmallRight class="ml-2" />
                                    </a>
                                </ArticleAuthor>
                            </ArticleContent>
                        </ArticleWrapper>
                    {/each}
                </BlogBodyWrapper>
            </Section>
        {/if}
    </ExampleDiv>
{/if}
