<!--
  - Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
  -->

<script lang="ts">
    /**
     * Компонент аккордеона
     * @component
     */
    export let title = ''

    export let classes = ''
    export let isOpen = false

    const toggleCollapse = () => (isOpen = !isOpen)

    let buttonClassesCSS = `${classes} flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200    hover:bg-gray-100 `

    $: {
        const allRounded = 'rounded-xl'
        const topRounded = 'rounded-t-xl'
        const gray = ' bg-gray-100'

        if (isOpen) {
            buttonClassesCSS = buttonClassesCSS.replace(allRounded, topRounded)
            buttonClassesCSS += gray
        } else {
            buttonClassesCSS = buttonClassesCSS.replace(topRounded, allRounded)
            buttonClassesCSS = buttonClassesCSS.replace(gray, '')
        }
    }
</script>

<div id="accordion-collapse" data-accordion={isOpen ? 'open' : 'collapse'}>
    <h2 id="accordion-collapse-heading-1">
        <button
            type="button"
            class={buttonClassesCSS}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            on:click={() => toggleCollapse()}
        >
            <span>{title}</span>
            <svg data-accordion-icon class="w-3 h-3 {isOpen ? 'rotate-180' : ''} shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>
        </button>
    </h2>
    <div id="accordion-collapse-body-1" class={isOpen ? '' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
        <div class="p-5 border border-gray-200">
            <slot />
        </div>
    </div>
</div>
