<script>
    import {
        Section,
        ArticleAuthor,
        ArticleBody,
        ArticleHead,
        ArticleWrapper,
        BlogHead,
        BlogBodyWrapper
    } from '$lib';
    import {ExampleDiv, SectionHeader, SectionBlock} from '../utils/index.ts';
    import {ArrowSmallRight, VideoCamera, Newspaper} from 'svelte-heros';
    import {allSectionsStore} from "../../server/stores/section/all-sections.store";
    import {subscribeAll} from "../../server/stores/subscribe-all";
    import {onDestroy, onMount} from "svelte";

    const breadcrumb_title = 'Blog Sections';
    const title = 'Разработка';
    const dir = 'marketing';
    const description =
        'Раздел посвящен веб-разработке, программированию и другими аспектами IT. Здесь вы найдете полезные статьи, которые помогут вам узнать о новейших технологиях, изучить лучшие практики разработки и получить ответы на вопросы, связанные с программированием и сферой IT в целом. ';

    const subTitle = 'Давай с нами!'
    const subDescription = 'Присоединяйтесь к нашему сообществу и станьте частью мира IT-разработки!'
    let activeSection

    const allUnsubscribe = subscribeAll(allSectionsStore.allStores(), () => {
        activeSection = allSectionsStore.getActive() ?? {}
    })

    onDestroy(() =>
        allUnsubscribe()
    )
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->

<SectionHeader
        category="marketing"
        title="{title}"
        {breadcrumb_title}
        {description}
/>

<SectionBlock title="{subTitle}">
    {subDescription}
</SectionBlock>

<ExampleDiv>
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
            <ArticleWrapper>
                <ArticleHead>
          <span
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <VideoCamera variation="solid" size="14"/>
            Tutorial
          </span>
                    <span class="text-sm">14 days ago</span>
                </ArticleHead>
                <ArticleBody>
                    <svelte:fragment slot="h2"
                    ><a href="/dev-fb-v2/static">How to quickly deploy a static website</a></svelte:fragment
                    >
                    <svelte:fragment slot="paragraph">
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Static websites are now used to bootstrap lots of websites and are becoming the basis
                            for a variety of tools that even influence both web designers and developers influence
                            both web designers and developers.
                        </p>
                    </svelte:fragment>
                </ArticleBody>
                <ArticleAuthor>
                    <svelte:fragment slot="author">
                        <img
                                class="w-7 h-7 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="Jese Leos avatar"
                        />
                        <span class="font-medium dark:text-white"> Jese Leos </span>
                    </svelte:fragment>
                    <a
                            href="/dev-fb-v2/static"
                            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                        Read more
                        <ArrowSmallRight class="ml-2"/>
                    </a>
                </ArticleAuthor>
            </ArticleWrapper>

            <ArticleWrapper>
                <ArticleHead>
          <span
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <Newspaper variation="solid" size="14"/>
            Tutorial
          </span>
                    <span class="text-sm">14 days ago</span>
                </ArticleHead>
                <ArticleBody>
                    <svelte:fragment slot="h2"><a href="/dev-fb-v2/static">Our first project with React</a></svelte:fragment>
                    <svelte:fragment slot="paragraph">
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Static websites are now used to bootstrap lots of websites and are becoming the basis
                            for a variety of tools that even influence both web designers and developers influence
                            both web designers and developers.
                        </p>
                    </svelte:fragment>
                </ArticleBody>
                <ArticleAuthor>
                    <svelte:fragment slot="author">
                        <img
                                class="w-7 h-7 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                alt="Bonnie Green avatar"
                        />
                        <span class="font-medium dark:text-white"> Bonnie Green </span>
                    </svelte:fragment>
                    <a
                            href="/dev-fb-v2/static"
                            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                        Read more
                        <ArrowSmallRight class="ml-2"/>
                    </a>
                </ArticleAuthor>
            </ArticleWrapper>
        </BlogBodyWrapper>
    </Section>
</ExampleDiv>