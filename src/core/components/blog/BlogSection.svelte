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
    import { subscribeAll } from '../../stores/subscribe-all'
    import { afterUpdate, onDestroy, onMount } from 'svelte'
    import type { IPost } from '../../stores/post/post'
    import type { ISection } from '../../stores/section/section'
    import ArticleImg from '../flowbite/blog/ArticleImg.svelte'
    import ArticleContent from '../flowbite/blog/ArticleContent.svelte'
    import { beforeNavigate } from '$app/navigation'
    import { globalStore } from '../../stores/global.store'
    import Post from '../../stores/post/post'

    //
    // const title = 'Разработка'
    // const dir = 'marketing'
    // const subTitle = 'Давай с нами!'
    // const subDescription = 'Присоединяйтесь к нашему сообществу и станьте частью мира IT-разработки!'
    //
    // let sections

    // subscribeAll(allSectionsStore.allStores(), (allStores) => {
    //     activeSection = allSectionsStore.getActive()
    //     sections = allStores
    //     console.log('after subscribeAll(allSectionsStore.allStores()')
    // })
    //

    export let activeDomain
    export let activeSection: Section

    export let posts: Post[] = []
    $: descriptionDomain = activeDomain?.description

    // const allUnsubscribe = subscribeAll(globalStore.self().allSectionsStore.getActive(), () => {
    //     domain = allSectionsStore.getActive()
    //     posts = activeSection?.allPostStore.all() ?? []
    // })

    onMount(() => {
        console.log('blog section')
        console.log(globalStore.self().allDomainsStore?.getActive())
        // console.log(allSectionsStore.getActive())
        // console.log(allSectionsStore.getActive()?.allPostStore.all())
        console.log(posts)
    })

    afterUpdate(() => {
        console.log('afterUpdate blog section')
        console.log(activeSection?.domain)
        console.log(posts)
    })

    // beforeNavigate(() => {
    //     activeSection = allSectionsStore.getActive()
    //     console.log(allSectionsStore.getActive())
    // })

    // onDestroy(() => allUnsubscribe())

    const buildRoute = (urlTitle: string) => {
        console.log(`/domain/${activeDomain.name}/sections/${activeSection.id}/${urlTitle}`)
        return `/domain/${activeDomain.name}/sections/${activeSection.id}/${urlTitle}`
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
                                        href={buildRoute(post.urlTitle)}
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
{/if}
