<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    import { ArrowSmallRight } from 'svelte-heros'
    import { onDestroy, onMount } from 'svelte'
    import type { IPost } from '../../../modules/blog/post/post'
    import type { IPostStore } from '../../../modules/blog/post/post.store'
    import { subscribe } from 'svelte/internal'

    export let postStore: IPostStore | undefined = undefined
    let post: IPost | undefined

    const unsubscribe = subscribe(postStore, () => {
        post = postStore?.self()
    })

    onDestroy(() => unsubscribe())
</script>

<!--<MetaTag {breadcrumb_title} {title} {dir} {description}/>-->

<!--<SectionHeader category="marketing" {title} {breadcrumb_title} {description} />-->

<!--<SectionBlock title={subTitle}>-->
<!--    {subDescription}-->
<!--</SectionBlock>-->

<main class="mt-10 pb-16 xl:pb-24 bg-white">
    <header class="header-img h-header w-full bg-no-repeat bg-cover bg-center bg-blend-darken relative">
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black" />
        <div class="container mx-auto">
            <div class="absolute items-center px-4 mx-auto w-full translate-y-1/2 peer-placeholder-shown:-translate-y-1/2">
                <span class="block mb-4 text-gray-300">
                    Published in
                    <a href="#" class="font-semibold text-white _5zvlMLkN1qETxEl3IhT">World News</a>
                </span>
                <h1 class="mb-4 max-w-4xl text-5xl font-extrabold leading-none text-white">Flowbite Blocks Tutorial - Learn how to get started with custom sections using the Flowbite Blocks</h1>
                <p class="sm:text-lg font-normal text-gray-300">Before going digital, you might scribbling down some ideas in a sketchbook.</p>
            </div>
        </div>
    </header>
    <div class="flex relative z-20 justify-between p-6 O7PVNyZQb9PCjpNKbt_t mx-4 container bg-white rounded w-article-container arrNNfkSdu1f3lPZlfMG mx-auto">
        <article class="w-article container max-w-none format format-sm sm:format-base lg:format-lg format-blue">
            <div class="flex flex-row justify-between items-center">
                <div class="flex items-center B1cgbA6Bb4LQo0qFJKck text-gray-500 text-base mb-2">
                    <span>By <a href="#" class="text-gray-900 _5zvlMLkN1qETxEl3IhT InmgdriTvIwr8C_lWYEj font-semibold">Jese Leos</a></span>
                    <span class="bg-gray-300 bg-gray-400 w-2 h-2 rounded-full" />
                    <span><time class="font-normal text-gray-500 text-gray-400" pubdate="" datetime="2022-03-08" title="August 3rd, 2022">August 3, 2022, 2:20am EDT</time></span>
                </div>
                <aside aria-label="Share social media">
                    <div class="not-format">
                        <button
                            data-tooltip-target="tooltip-facebook"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13676_82298)">
                                    <path
                                        d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51562 10.9932 3.51562C11.9776 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z"
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
                            class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700 opacity-0 tooltip-arrow"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(564px, -6365px);"
                            data-popper-placement="top"
                        >
                            Share on Facebook
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(73px, 0px);" />
                        </div>

                        <button
                            data-tooltip-target="tooltip-twitter"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(63px, 0px);" />
                        </div>

                        <button
                            data-tooltip-target="tooltip-reddit"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13676_82300)">
                                    <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" />
                                    <path
                                        d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13676_82300">
                                        <rect width="18" height="18" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <div
                            id="tooltip-reddit"
                            role="tooltip"
                            class="inline-block absolute tooltip-arrow z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 Usqns9w__onp5CWoXDJ0 bg-gray-700"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(930px, -5975px);"
                            data-popper-placement="top"
                        >
                            Post on Reddit
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(57px, 0px);" />
                        </div>

                        <button
                            data-tooltip-target="tooltip-link"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(41px, 0px);" />
                        </div>

                        <button
                            data-tooltip-target="tooltip-save"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
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
                            <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(62px, 0px);" />
                        </div>
                        <button
                            id="dropdownMenuIconHorizontalButton"
                            data-dropdown-toggle="dropdownDotsHorizontal"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x text-white fq6QICPx8VcyAlLZi_Iy bg-gray-800 _OovBxfPdK7Rjv2nh2Ot P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5 text-gray-500 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownDotsHorizontal"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1130px, 386px);"
                            data-popper-placement="bottom"
                        >
                            <ul class="py-1 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Add to collection</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Report</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
            <p class="lead">
                Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                datepickers.
            </p>
            <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
            <p>
                But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons,
                navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure>
                <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" class="mx-auto" />
                <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Getting started with Flowbite</h2>
            <p>
                First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from
                the documentation.
            </p>
            <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and datepickers which you can optionally include into your project via CDN or NPM.</p>
            <p>
                You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart guide</a> to explore the elements by including the CDN files into your project. But if you
                want to build a project with Flowbite I recommend you to follow the build tools steps so that you can purge and minify the generated CSS.
            </p>
            <p>
                You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help you get started with your projects even faster. You can check out this <a
                    href="https://flowbite.com/docs/components/tables/">comparison table</a
                > to better understand the differences between the open-source and pro version of Flowbite.
            </p>
            <h2>When does design come in handy?</h2>
            <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
            <ol>
                <li>
                    <strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By
                    running a usability test, you’ll be able to see how users will interact with your design once it’s live;
                </li>
                <li>
                    <strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for
                    real;
                </li>
                <li>
                    <strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;
                </li>
                <li>
                    <strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project
                    — better.
                </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
            <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p>
            <h4>Baseline</h4>
            <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p>
            <h4>Measurement from the baseline</h4>
            <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
                A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one
                of the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
                <li>Low contrast between thick and thin strokes</li>
                <li>Diagonal stress in the strokes</li>
                <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt="" />
            <ol>
                <li>Low contrast between thick and thin strokes</li>
                <li>Diagonal stress in the strokes</li>
                <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>A serif is a small shape or projection that appears at the beginning:</p>
            <blockquote>
                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
            </blockquote>
            <h4>Code example</h4>
            <p>
                A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one
                of the following:
            </p>
            <pre><code class="language-html"
                    >&lt;dl class="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 "&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 "&gt;developers&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 "&gt;contributors&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 "&gt;organizations&lt;/dd&gt;
&lt;/div&gt;
&lt;/dl&gt;
</code></pre>
            <h4>Table example</h4>
            <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.</p>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Date &amp; Time</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>United States</td>
                        <td>April 21, 2021</td>
                        <td><strong>$2,300</strong></td>
                    </tr>
                    <tr>
                        <td>Canada</td>
                        <td>May 31, 2021</td>
                        <td><strong>$300</strong></td>
                    </tr>
                    <tr>
                        <td>United Kingdom</td>
                        <td>June 3, 2021</td>
                        <td><strong>$2,500</strong></td>
                    </tr>
                    <tr>
                        <td>Australia</td>
                        <td>June 23, 2021</td>
                        <td><strong>$3,543</strong></td>
                    </tr>
                    <tr>
                        <td>Germany</td>
                        <td>July 6, 2021</td>
                        <td><strong>$99</strong></td>
                    </tr>
                    <tr>
                        <td>France</td>
                        <td>August 23, 2021</td>
                        <td><strong>$2,540</strong></td>
                    </tr>
                </tbody>
            </table>
            <h3>Best practices for setting up your prototype</h3>
            <p>
                <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                prototype — like a wireframe with placeholder images and some basic text — would be more than enough. But if you’re going for more intricate usability testing, a high-fidelity prototype
                — with on-brand colors, fonts and imagery — could help get more pointed results.
            </p>
            <p>
                <strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user would when interacting with your product. While you can fine-tune this during beta
                testing, considering your user’s needs and habits early on will save you time by setting you on the right path.
            </p>
            <p>
                <strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more user-friendly prototypes is by building your prototypes ‘inside out’. Start by
                focusing on what will be important to your user, like a Buy now button or an image gallery, and list each element by order of priority. This way, you’ll be able to create a prototype
                that puts your users’ needs at the heart of your design.
            </p>
            <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.</p>
            <section class="not-format">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="sm:text-lg text-2xl font-bold text-gray-900 text-white">Discussion (20)</h2>
                    <div>
                        <button
                            type="button"
                            class="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 qHIOIw8TObHgD3VvKa5x DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp bg-gray-800 text-gray-400 DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                            >Subscribe
                        </button>
                    </div>
                </div>
                <form class="mb-6">
                    <div class="mb-4 container bg-gray-50 rounded-lg border border-gray-200 bg-gray-700">
                        <div class="py-2 px-4 bg-gray-50 rounded-t-lg bg-gray-800">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea
                                id="comment"
                                rows="6"
                                class="px-0 container text-sm text-gray-900 bg-gray-50 border-0 bg-gray-800 W83fbcqTDAidAC5iVTZ9 text-white _DJ2tfp6E9c_teMKVD3z"
                                placeholder="Write a comment..."
                                required=""
                            />
                        </div>
                        <div class="flex justify-between items-center py-2 px-3 border-y">
                            <button
                                type="submit"
                                class="inline-flex items-center _gKcj49wZgnwx1LpcJi6 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg _FONMPVaCsLFJJGDaaIL focus:ring-primary-200 hover:bg-primary-800"
                            >
                                Post comment
                            </button>
                            <div class="flex pl-0 pz8Hkt0c6QoT_d0LgJ4L pl-2">
                                <button
                                    type="button"
                                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer _xQT_qSXfwWf6ZhwRle4 DpMPWwlSESiYA8EE1xKM text-gray-400 DTyjKhtXBNaebZa5L0l9 xotVay0PVtR3gElm6ql5"
                                >
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span class="sr-only">Attach file</span>
                                </button>
                                <button
                                    type="button"
                                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer _xQT_qSXfwWf6ZhwRle4 DpMPWwlSESiYA8EE1xKM text-gray-400 DTyjKhtXBNaebZa5L0l9 xotVay0PVtR3gElm6ql5"
                                >
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Set location</span>
                                </button>
                                <button
                                    type="button"
                                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer _xQT_qSXfwWf6ZhwRle4 DpMPWwlSESiYA8EE1xKM text-gray-400 DTyjKhtXBNaebZa5L0l9 xotVay0PVtR3gElm6ql5"
                                >
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Upload image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <article class="p-6 mb-6 text-base bg-gray-50 rounded-lg bg-gray-700">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 text-white">
                                <img class="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough" />Michael Gough
                            </p>
                            <p class="text-sm text-gray-600 text-gray-400">
                                <time pubdate="" datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                            </p>
                        </div>
                        <button
                            id="dropdownComment1Button"
                            data-dropdown-toggle="dropdownComment1"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x fq6QICPx8VcyAlLZi_Iy bg-gray-700 xotVay0PVtR3gElm6ql5 P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span class="sr-only">Comment settings</span>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownComment1"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1106px, 4441px);"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                        >
                            <ul class="py-1 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Remove</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 text-gray-400">
                        Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as
                        important as the creation of the design strategy.
                    </p>
                    <div class="flex items-center mt-4 ZLpoEVbvjZ2Wkm42QsPD">
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                            11 Likes
                        </button>
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
                <article class="p-6 mb-6 pojhoXnf_5BOC6SYUZP4 text-base bg-gray-50 rounded-lg bg-gray-700">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 text-white">
                                <img class="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos" />Jese Leos
                            </p>
                            <p class="text-sm text-gray-600 text-gray-400">
                                <time pubdate="" datetime="2022-02-12" title="February 12th, 2022">Feb. 12, 2022</time>
                            </p>
                        </div>
                        <button
                            id="dropdownComment2Button"
                            data-dropdown-toggle="dropdownComment2"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x fq6QICPx8VcyAlLZi_Iy bg-gray-700 xotVay0PVtR3gElm6ql5 P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span class="sr-only">Comment settings</span>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownComment2"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1106px, 4641px);"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                        >
                            <ul class="py-1 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Remove</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 text-gray-400">Much appreciated! Glad you liked it ☺️</p>
                    <div class="flex items-center mt-4 ZLpoEVbvjZ2Wkm42QsPD">
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                            3 Likes
                        </button>
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
                <article class="p-6 mb-6 text-base bg-gray-50 rounded-lg bg-gray-700">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 text-white">
                                <img class="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green" />Bonnie Green
                            </p>
                            <p class="text-sm text-gray-600 text-gray-400">
                                <time pubdate="" datetime="2022-03-12" title="March 12th, 2022">Mar. 12, 2022</time>
                            </p>
                        </div>
                        <button
                            id="dropdownComment3Button"
                            data-dropdown-toggle="dropdownComment3"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x fq6QICPx8VcyAlLZi_Iy bg-gray-700 xotVay0PVtR3gElm6ql5 P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            <span class="sr-only">Comment settings</span>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownComment3"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1106px, 4817px);"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                        >
                            <ul class="py-1 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Remove</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                    <div class="flex items-center mt-4 ZLpoEVbvjZ2Wkm42QsPD">
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                            24 Likes
                        </button>
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
                <article class="p-6 text-base bg-gray-50 rounded-lg bg-gray-700">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 text-white">
                                <img class="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Helene Engels" />Helene Engels
                            </p>
                            <p class="text-sm text-gray-600 text-gray-400">
                                <time pubdate="" datetime="2022-06-23" title="June 23rd, 2022">Jun. 23, 2022</time>
                            </p>
                        </div>
                        <button
                            id="dropdownComment4Button"
                            data-dropdown-toggle="dropdownComment4"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg DpMPWwlSESiYA8EE1xKM _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x fq6QICPx8VcyAlLZi_Iy bg-gray-700 xotVay0PVtR3gElm6ql5 P53YJBBtllZv8_nFHFHW"
                            type="button"
                        >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdownComment4"
                            class="hidden z-10 w-36 bg-white rounded FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG shadow bg-gray-700 WoQqugRcWrYbmsWhxCUr"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1106px, 4993px);"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                        >
                            <ul class="py-1 text-sm text-gray-700 text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Remove</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                    <div class="flex items-center mt-4 ZLpoEVbvjZ2Wkm42QsPD">
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                            9 Likes
                        </button>
                        <button type="button" class="flex items-center text-sm text-gray-500 _5zvlMLkN1qETxEl3IhT text-gray-400">
                            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
            </section>
        </article>
        <aside class="block" aria-labelledby="sidebar-label">
            <div class="w-aside sticky top-[8rem]">
                <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                <div class="mb-8">
                    <h4 class="mb-2 font-bold text-gray-900 uppercase">Flowbite News morning headlines</h4>
                    <p class="mb-4 font-light text-gray-500 text-gray-400">
                        Get all the stories you need-to-know from the most powerful name in news delivered first thing every morning to your inbox
                    </p>
                    <button
                        type="button"
                        data-modal-toggle="newsletter-modal"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 text-center container"
                        >Subscribe
                    </button>
                </div>
                <div class="md:mb-12">
                    <h4 class="mb-4 text-sm font-bold text-gray-900 uppercase">Latest news</h4>
                    <div class="mb-6 flex items-center">
                        <a href="#" class="shrink-0">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png" class="mr-4 max-w-full w-24 h-24 rounded-lg" alt="Image 1" />
                        </a>
                        <div>
                            <h5 class="mb-2 sm:text-lg font-bold leading-tight text-gray-900">Our first office</h5>
                            <p class="mb-2 font-light text-gray-500 text-gray-400">Over the past year, Volosoft has undergone changes.</p>
                            <a href="#" class="inline-flex items-center font-medium vjxcH6oRcT32j4R9BxSq aLkxBYrqOmZoa_nRh3yL text-primary-600 _LWmEJ3ddClfhUowkba_"> Read in 9 minutes </a>
                        </div>
                    </div>
                    <div class="mb-6 flex items-center">
                        <a href="#" class="shrink-0">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png" class="mr-4 max-w-full w-24 h-24 rounded-lg" alt="Image 2" />
                        </a>
                        <div>
                            <h5 class="mb-2 sm:text-lg font-bold leading-tight text-gray-900">Enterprise Design tips</h5>
                            <p class="mb-2 font-light text-gray-500 text-gray-400">Over the past year, Volosoft has undergone changes.</p>
                            <a href="#" class="inline-flex items-center font-medium vjxcH6oRcT32j4R9BxSq aLkxBYrqOmZoa_nRh3yL text-primary-600 _LWmEJ3ddClfhUowkba_"> Read in 14 minutes </a>
                        </div>
                    </div>
                    <div class="mb-6 flex items-center">
                        <a href="#" class="shrink-0">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png" class="mr-4 max-w-full w-24 h-24 rounded-lg" alt="Image 3" />
                        </a>
                        <div>
                            <h5 class="mb-2 sm:text-lg font-bold leading-tight text-gray-900">Partnered up with Google</h5>
                            <p class="mb-2 font-light text-gray-500 text-gray-400">Over the past year, Volosoft has undergone changes.</p>
                            <a href="#" class="inline-flex items-center font-medium vjxcH6oRcT32j4R9BxSq aLkxBYrqOmZoa_nRh3yL text-primary-600 _LWmEJ3ddClfhUowkba_"> Read in 9 minutes </a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" class="flex justify-center items-center mb-3 container h-48 bg-gray-100 rounded-lg">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <p class="mb-2 text-sm font-light text-gray-500 text-gray-400">Students and Teachers, save up to 60% on Flowbite Creative Cloud.</p>
                    <p class="text-xs font-light text-gray-400 uppercase text-gray-500">Ads placeholder</p>
                </div>
            </div>
        </aside>
    </div>
</main>

<!--    <Section name="page">-->
<ArticleWrapper>
    <!--            <ArticleImg />-->

    <ArticleContent>
        <ArticleHead>
            <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex
                                    items-center px-2.5 py-0.5 rounded"
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
                <p class="mb-5 font-light text-gray-500" />
            </svelte:fragment>
        </ArticleBody>
        <ArticleAuthor>
            <svelte:fragment slot="author">
                <img class="w-7 h-7 rounded-full" alt="Jese Leos avatar" />
                <span class="font-medium" />
            </svelte:fragment>
            <a href="/dev-fb-v2/static" class="inline-flex items-center font-medium text-primary-600 hover:underline">
                Прочитать
                <ArrowSmallRight class="ml-2" />
            </a>
        </ArticleAuthor>
    </ArticleContent>
</ArticleWrapper>

<!--    </Section>-->

<style lang="scss">
    .header-img {
        background-image: url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png);
    }
</style>
