<script lang="ts">
    import type {INavItem} from "../../../../lib/entitys";
    import CustomComponent from "../../CustomComponent/CustomComponent.svelte";
    import DropdownSVG from "../../../../components/svg/btn-icons/DropdownSVG.svelte";

    export let type = '';
    export let navItems: INavItem[] = [];
    export let subNavButtons: INavItem[] = [];

</script>
{#if type.includes("mobile")}
    <div class="-mx-3">
        <button type="button"
                class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50" aria-controls="disclosure-1"
                aria-expanded="false">
            <slot/>
            <CustomComponent component="{DropdownSVG}"/>
        </button>
        <div class="mt-2 space-y-2" id="disclosure-1">
            {#each navItems as navItem}
                <a href="{navItem.href}"
                   class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{navItem.name}</a>
            {/each}
        </div>
    </div>
{:else}
    <div class="relative">
        <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
            <slot/>
            <CustomComponent component="{DropdownSVG}"/>
        </button>

        <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div class="p-4">
                {#each navItems as navItem}
                    <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <CustomComponent component="{navItem.icon}"/>
                        </div>
                        <div class="flex-auto">
                            <a href="{navItem.href}" target="_blank" class="block font-semibold text-gray-900">
                                {navItem.name}
                                <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-1 text-gray-600">{navItem.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {#each subNavButtons as subItem}
                    <a href="{subItem.href}" target="_blank"
                       class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                        <CustomComponent component="{subItem.icon}"/>
                        {subItem.name}
                    </a>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
</style>
