<script lang="ts">
    export let name = 'social'
</script>

<button
    data-tooltip-target="tooltip-{name}"
    class="inline-flex items-center p-2 text-sm font-medium text-center rounded-lg hover:bg-gray-100 text-gray-700"
    type="button"
>
    <slot />
</button>
<div
    id="tooltip-{name}"
    role="tooltip"
    class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm
                            transition-opacity duration-300 bg-gray-700 opacity-0 tooltip-arrow"
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
