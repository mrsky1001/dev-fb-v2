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

    export let postStore: IPostStore | undefined = undefined
    export let latestPosts: Post[] | undefined = []
    let post: IPost | undefined
    let author: IUser | undefined
    let annotation: IAnnotation | undefined

    const unsubscribe = subscribe(postStore, () => {
        post = postStore?.self()
        author = post?.authorStore.self()
        annotation = post?.annotationStore.self()
    })

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
                        <button
                            data-tooltip-target="tooltip-facebook"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg
                             DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                viewBox="0 0 18 18"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_13676_82298)">
                                    <path
                                        d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375
                                        17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51562 10.9932 3.51562C11.9776 3.51562
                                        13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13676_82298">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <div
                            id="tooltip-facebook"
                            role="tooltip"
                            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm
                            transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700 opacity-0 tooltip-arrow"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(564px, -6365px);"
                            data-popper-placement="top"
                        >
                            Share on Facebook
                            <div
                                class="tooltip-arrow"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(73px, 0px);"
                            />
                        </div>

                        <button
                            data-tooltip-target="tooltip-twitter"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM
                             _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                viewBox="0 0 18 18"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.66064 16.3131C12.4531 16.3131 16.1683 10.6856 16.1683 5.80539C16.1683 5.64555 16.1683 5.48643 16.1575 5.32803C16.8803 4.80525 17.5042 4.15794 18 3.41643C17.326 3.71523 16.611 3.9111 15.8789 3.99747C16.6499 3.53599 17.2269 2.81006 17.5025 1.95483C16.7776 2.38504 15.9845 2.6882 15.1574 2.85123C14.6006 2.25916 13.8642 1.86711 13.0621 1.73574C12.2601 1.60438 11.4371 1.74102 10.7205 2.12452C10.0039 2.50802 9.43367 3.11701 9.09806 3.85724C8.76245 4.59747 8.68016 5.42768 8.86392 6.21939C7.39567 6.14574 5.95932 5.76416 4.64809 5.09943C3.33686 4.4347 2.18007 3.50168 1.2528 2.36091C0.780546 3.17391 0.635904 4.13633 0.848325 5.05223C1.06075 5.96812 1.61426 6.76863 2.39616 7.29075C1.80842 7.27353 1.23349 7.11498 0.72 6.82851V6.87531C0.720233 7.72795 1.01539 8.55426 1.5554 9.21409C2.09542 9.87391 2.84705 10.3266 3.6828 10.4955C3.13911 10.6438 2.56866 10.6654 2.01528 10.5588C2.25136 11.2926 2.71082 11.9342 3.32943 12.394C3.94804 12.8539 4.69487 13.1089 5.46552 13.1235C4.69983 13.7253 3.82299 14.1703 2.88516 14.433C1.94733 14.6956 0.966911 14.7708 0 14.6542C1.68887 15.738 3.65394 16.3128 5.66064 16.3102"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-twitter"
                            role="tooltip"
                            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700 opacity-0 tooltip-arrow"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(615px, -6365px);"
                            data-popper-placement="top"
                        >
                            Share on Twitter
                            <div
                                class="tooltip-arrow"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(63px, 0px);"
                            />
                        </div>

                        <button
                            data-tooltip-target="tooltip-vk"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-6 h-6 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                viewBox="0 0 24 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_13676_82300)">
                                    <path
                                        d="M20 13c.24-.45 1.09-1.74 1.73-2.7C23.65 7.46 24 6.86 24 6.5a.5.5 0 0 0-.5-.5H19a.5.5 0 0 0-.49.41c-.25 1.38-3.49 5.34-4 5.59-.21 0-.5-.52-.5-1.5V6.28a1.18 1.18 0 0 0-.24-.93C13.43 5 12.92 5 11.5 5 8.92 5 8 5.77 8 6.5a.46.46 0 0 0 .45.5S9 7.36 9 9.5a14.61 14.61 0 0 1-.13 2.5C7.6 11.77 5.84 8.6 5 6.32A.5.5 0 0 0 4.5 6h-4a.5.5 0 0 0-.5.59C.56 9.61 6.91 19 11 19h2c1.06 0 1.14-1.15 1.2-1.91s.11-1.09.3-1.09c.62 0 1.89 1.1 2.72 1.82S18.59 19 19 19h2.5c1.29 0 2.5 0 2.5-1 0-.38-.33-.82-2.23-3-.63-.69-1.48-1.64-1.77-2Z"
                                        data-name="VK Logo"
                                    />
                                </g>
                            </svg>
                        </button>
                        <button
                            data-tooltip-target="tooltip-telegram"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-6 h-6 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                viewBox="0 0 24 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_13676_82300)">
                                    <path
                                        d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                                    />
                                </g>
                            </svg>
                        </button>
                        <button
                            data-tooltip-target="tooltip-instagram"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-7 h-7 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                viewBox="0 0 120 100"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_13676_82300)">
                                    <path
                                        d="M87.2 33.6c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-3.1-2.5-5.6-5.6-5.6zm-25 7.2c-13 0-23.6 10.6-23.6 23.6S49.2 88 62.2 88s23.6-10.6 23.6-23.6-10.6-23.6-23.6-23.6zm0 38.8c-8.4 0-15.1-6.8-15.1-15.1 0-8.4 6.8-15.1 15.1-15.1 8.4 0 15.1 6.8 15.1 15.1s-6.8 15.1-15.1 15.1zm47.7-34.8C109.9 28.9 97 16 81.1 16H43c-15.9 0-28.8 12.9-28.8 28.8v38.1c0 15.9 12.9 28.8 28.8 28.8h38c15.9 0 28.8-12.9 28.8-28.8V44.8zm-9.1 38c0 10.9-8.9 19.8-19.8 19.8H43c-10.9 0-19.8-8.9-19.8-19.8v-38C23.2 33.8 32 25 43 25h38c10.9 0 19.8 8.9 19.8 19.8v38z"
                                    />
                                </g>
                            </svg>
                        </button>
                        <!--                        <div-->
                        <!--                            id="tooltip-vk"-->
                        <!--                            role="tooltip"-->
                        <!--                            class="inline-block absolute tooltip-arrow z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700"-->
                        <!--                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(930px, -5975px);"-->
                        <!--                            data-popper-placement="top"-->
                        <!--                        >-->
                        <!--                            Post on Reddit-->
                        <!--                            <div-->
                        <!--                                class="tooltip-arrow"-->
                        <!--                                data-popper-arrow=""-->
                        <!--                                style="position: absolute; left: 0px; transform: translate(57px, 0px);"-->
                        <!--                            />-->
                        <!--                        </div>-->

                        <button
                            data-tooltip-target="tooltip-link"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-link"
                            role="tooltip"
                            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700 opacity-0 tooltip-arrow"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(719px, -6365px);"
                            data-popper-placement="top"
                        >
                            Share link
                            <div
                                class="tooltip-arrow"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(41px, 0px);"
                            />
                        </div>

                        <button
                            data-tooltip-target="tooltip-save"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 text-gray-400"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                        </button>
                        <div
                            id="tooltip-save"
                            role="tooltip"
                            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700 opacity-0 tooltip-arrow"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(739px, -6365px);"
                            data-popper-placement="top"
                        >
                            Save this article
                            <div
                                class="tooltip-arrow"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(62px, 0px);"
                            />
                        </div>
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
                                    <!--                                    <img-->
                                    <!--                                        src={articleIcon}-->
                                    <!--                                        class=" w-14 text-gray-700 rounded-lg bg-center bg-cover"-->
                                    <!--                                        alt="Image 1"-->
                                    <!--                                    />-->
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
                scale: 0.6;
            }
        }
    }
</style>
