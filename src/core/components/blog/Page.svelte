<script lang="ts">
    import articleIcon from '../../../assets/images/article.svg'
    import { onDestroy, onMount } from 'svelte'
    import type { IPost } from '../../server/stores/post/post'
    import type { IPostStore } from '../../server/stores/post/post.store'
    import { subscribe } from 'svelte/internal'
    import type { IAnnotation } from '../../server/stores/annotation/annotation'
    import type { IUser } from '../../server/stores/user/user'
    import PageContent from './PageContent.svelte'
    import Post from '../../server/stores/post/post'
    import ArticleSVG from '../svg/ArticleSVG.svelte'
    import FacebookBTN from '../socials/FacebookBTN.svelte'
    import SocialBTN from '../socials/SocialBTN.svelte'
    import Twitter from '../utils/icons/Twitter.svelte'
    import VKSVG from '../svg/socials/VKSVG.svelte'
    import TelegramSVG from '../svg/socials/TelegramSVG.svelte'
    import InstagramSVG from '../svg/socials/InstagramSVG.svelte'
    import LinkSVG from '../svg/socials/LinkSVG.svelte'
    import KeepSVG from '../svg/socials/KeepSVG.svelte'
    import BehanceSVG from '../svg/socials/BehanceSVG.svelte'
    import FacebookSVG from '../svg/socials/FacebookSVG.svelte'
    import TwitterSVG from '../svg/socials/TwitterSVG.svelte'

    export let postStore: IPostStore | undefined = undefined
    export let latestPosts: Post[] | undefined = []
    let post: IPost | undefined
    let author: IUser | undefined
    let annotation: IAnnotation | undefined

    let url = '/'

    const unsubscribe = subscribe(postStore, () => {
        post = postStore?.self()
        author = post?.authorStore.self()
        annotation = post?.annotationStore.self()
    })

    onMount(() => (url = window.location.href))

    // const unsubscribePosts = subscribe(allSectionsStore, () => {
    //     latestPosts = allSectionsStore.getStore()?.allPostStore.all() ?? []
    // })
    onDestroy(() => {
        unsubscribe()
        // unsubscribePosts()
    })
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->

<!--<SectionHeader category="marketing" {title} {breadcrumb_title} {description} />-->

<!--<SectionBlock title={subTitle}>-->
<!--    {subDescription}-->
<!--</SectionBlock>-->

<main class="mt-10 pb-16 xl:pb-24 bg-white">
    <header
        style="background-image: {'url(' + annotation.imgUrl + ')'}"
        class=" h-header w-full bg-no-repeat bg-cover bg-center bg-blend-darken relative"
    >
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black" />
        <div class="container mx-auto">
            <div class=" items-center px-4 mx-auto translate-y-1/2 peer-placeholder-shown:-translate-y-1/2">
                <span class="block mb-4 text-gray-300">
                    Опубликовано на
                    <a href="#" class="font-semibold text-white _5zvlMLkN1qETxEl3IhT">FOMA-BLOG.RU</a>
                </span>
                <h1 class="mb-4 max-w-5xl text-5xl leading-tight font-extrabold text-white">
                    {post.title}
                </h1>
                <p class="sm:text-lg font-normal text-gray-300">
                    {annotation.text}
                </p>
            </div>
        </div>
    </header>
    <div
        class="flex relative z-20 justify-between p-7 O7PVNyZQb9PCjpNKbt_t mx-4 container bg-white rounded w-article-container arrNNfkSdu1f3lPZlfMG mx-auto"
    >
        <article
            class="w-article container max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
            <div class="flex flex-row justify-between items-center">
                <div class="flex items-center B1cgbA6Bb4LQo0qFJKck text-gray-500 text-base mb-2">
                    <span>
                        <a href="#" class="text-gray-900 _5zvlMLkN1qETxEl3IhT no-underline font-semibold">
                            {author.username}
                        </a>
                    </span>
                    <span class="ml-3 bg-gray-300 bg-gray-400 w-2 h-2 rounded-full" />
                    <span class="ml-3">
                        <time
                            class="font-normal text-gray-500 text-gray-400"
                            datetime={post.publishedDate}
                            title={post.getFormattedPublishDate()}>{post.getFormattedPublishDate()}</time
                        >
                    </span>
                </div>
                <aside aria-label="Share social media">
                    <div class="not-format">
                        <SocialBTN url="https://www.behance.net/foma_design"><BehanceSVG /></SocialBTN>
                        <SocialBTN url="https://www.facebook.com/sharer/sharer.php?u={url}"><FacebookSVG /></SocialBTN>
                        <SocialBTN url="https://twitter.com/share?url={url}"><TwitterSVG /></SocialBTN>
                        <SocialBTN url="https://vk.com/share.php?url={url}"><VKSVG /></SocialBTN>
                        <SocialBTN url="https://t.me/share/url?url={url}"><TelegramSVG /></SocialBTN>
                        <SocialBTN url="https://www.instagram.com/foma_des/"><InstagramSVG /></SocialBTN>
                        <SocialBTN><LinkSVG /></SocialBTN>
                        <SocialBTN><KeepSVG /></SocialBTN>
                        <button
                            id="dropdownMenuIconHorizontalButton"
                            data-dropdown-toggle="dropdownDotsHorizontal"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                                />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownDotsHorizontal"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1130px, 386px);"
                            data-popper-placement="bottom"
                        >
                            <ul
                                class="py-1 text-sm text-gray-700 text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9"
                                        >Add to collection</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9"
                                        >Report</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
            <PageContent postContent={post.content} />
        </article>
        <aside class="block" aria-labelledby="sidebar-label">
            <div class="w-aside sticky top-[8rem]">
                <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                <div class="mb-8">
                    <h4 class="mb-2 font-bold text-gray-900 uppercase">FOMA-BLOG - узнать первым</h4>
                    <p class="mb-4 font-light text-gray-500 text-gray-400">
                        Чтобы получать информацию о выходе новых статей, рекомендуем подписаться на нас
                    </p>
                    <button
                        type="button"
                        data-modal-toggle="newsletter-modal"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-center container"
                    >
                        Подписаться
                    </button>
                </div>
                <div class="md:mb-12">
                    <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase">Свежие статьи</h4>
                    {#each latestPosts.slice(0, 3) as p}
                        <div class="mb-6 flex items-center">
                            {#if p.annotationStore?.self().imgUrl}
                                <a href="#" class="shrink-0">
                                    <div
                                        style={'background-image: url(' + p.annotationStore?.self().imgUrl + ')'}
                                        class="mr-4 w-24 h-24 rounded-lg bg-center bg-cover"
                                        alt="Image 1"
                                    />
                                </a>
                            {:else}
                                <a href="#" class="shrink-0 flex w-28 h-24">
                                    <ArticleSVG classes="h-16 w-16" color="gray" />
                                </a>
                            {/if}
                            <div>
                                <h5 class="mb-2 sm:text-lg font-bold leading-tight text-gray-900">{p.title}</h5>
                                <p class="mb-2 font-light text-gray-500 text-gray-400">
                                    {p.annotationStore?.self().shortText ?? ''}
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center font-medium vjxcH6oRcT32j4R9BxSq aLkxBYrqOmZoa_nRh3yL text-primary-600 dark:text-primary-500 _LWmEJ3ddClfhUowkba_"
                                >
                                    Чтение в течение {p.readTime} мин.
                                </a>
                            </div>
                        </div>
                    {/each}
                </div>
                <!--                <div>-->
                <!--                    <a href="#" class="flex justify-center items-center mb-3 container h-48 bg-gray-100 rounded-lg">-->
                <!--                        <svg-->
                <!--                            aria-hidden="true"-->
                <!--                            class="w-8 h-8 text-gray-400"-->
                <!--                            fill="currentColor"-->
                <!--                            viewBox="0 0 20 20"-->
                <!--                            xmlns="http://www.w3.org/2000/svg"-->
                <!--                        >-->
                <!--                            <path-->
                <!--                                fill-rule="evenodd"-->
                <!--                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"-->
                <!--                                clip-rule="evenodd"-->
                <!--                            />-->
                <!--                        </svg>-->
                <!--                    </a>-->
                <!--                    <p class="mb-2 text-sm font-light text-gray-500 text-gray-400">-->
                <!--                        Students and Teachers, save up to 60% on Flowbite Creative Cloud.-->
                <!--                    </p>-->
                <!--                    <p class="text-xs font-light text-gray-400 uppercase text-gray-500">Ads placeholder</p>-->
                <!--                </div>-->
            </div>
        </aside>
    </div>
</main>

<style lang="scss">
    .w-article > :global {
        blockquote {
            font-weight: inherit;
            font-size: medium;
            color: var(--tw-format-body);
            padding-left: 3em;

            &::before {
                width: 2em;
                scale: 0.6;
            }
        }
    }
</style>
