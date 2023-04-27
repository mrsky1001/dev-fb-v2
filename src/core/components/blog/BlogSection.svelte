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
    import { onDestroy } from 'svelte'
    import type { IPost } from '../../server/stores/post/post'
    import type { ISection } from '../../server/stores/section/section'
    import ArticleImg from '../flowbite/blog/ArticleImg.svelte'
    import ArticleContent from '../flowbite/blog/ArticleContent.svelte'

    const breadcrumb_title = 'Blog Sections'
    const title = 'Разработка'
    const dir = 'marketing'
    const description =
        'Раздел посвящен веб-разработке, программированию и другими аспектами IT. Здесь вы найдете полезные статьи, которые помогут вам узнать о новейших технологиях, изучить лучшие практики разработки и получить ответы на вопросы, связанные с программированием и сферой IT в целом. '

    const subTitle = 'Давай с нами!'
    const subDescription = 'Присоединяйтесь к нашему сообществу и станьте частью мира IT-разработки!'
    let activeSection: ISection | undefined
    let posts: IPost[]

    const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), () => {
        activeSection = allSectionsStore.getActive()
        posts = activeSection?.allPostStore.all() ?? []
    })

    console.log(activeSection)

    onDestroy(() => allUnsubscribe())
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->

<SectionHeader category="marketing" {title} {breadcrumb_title} {description} />

<SectionBlock title={subTitle}>
    {subDescription}
</SectionBlock>

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
                        <ArticleImg src={post.annotationStore.self().imgUrl} />

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
                                    <a href="/dev-fb-v2/static">{post.title} </a>
                                </svelte:fragment>
                                <svelte:fragment slot="paragraph">
                                    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                                        {post.annotationStore.self().text}
                                    </p>
                                </svelte:fragment>
                            </ArticleBody>
                            <ArticleAuthor>
                                <svelte:fragment slot="author">
                                    <img
                                        class="w-7 h-7 rounded-full"
                                        src={post.authorStore.self().avatar}
                                        alt="Jese Leos avatar"
                                    />
                                    <span class="font-medium dark:text-white">
                                        {post.authorStore.self().username}
                                    </span>
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
                {/each}
            </BlogBodyWrapper>
        </Section>
    {/if}
</ExampleDiv>
