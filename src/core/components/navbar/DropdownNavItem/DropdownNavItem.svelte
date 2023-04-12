<script lang="ts">
    import type {INavItem} from "../../../lib/entitys";
    import CustomComponent from "../../CustomComponent/CustomComponent.svelte";
    import DropdownSVG from "../../../../components/svg/btn-icons/DropdownSVG.svelte";
    import {Chevron, Dropdown, NavLi} from "flowbite-svelte";
    import ChevronSVG from "../../../../components/svg/btn-icons/ChevronSVG.svelte";

    export let type = '';
    export let navItems: INavItem[] = [];
    export let subNavButtons: INavItem[] = [];

</script>
{#if type.includes("mobile")}
    <li class="-mx-3">
        <button type="button"
                class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 hover:bg-gray-50" aria-controls="disclosure-1"
                aria-expanded="false">
            <slot/>
            <CustomComponent component="{DropdownSVG}"/>
        </button>
        <div class="mt-2 space-y-2" id="disclosure-1">
            {#each navItems as navItem}
                <a href="{navItem.href}"
                   class="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50">{navItem.name}</a>
            {/each}
        </div>
    </li>
{:else}
    <div class="group/container">
        <NavLi id="nav-menu-other" class="group cursor-pointer text-base font-semibold flex flex-row items-center">
            <ChevronSVG>
                <slot/>
            </ChevronSVG>
        </NavLi>
        <Dropdown triggeredBy="#nav-menu-other" class=" max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
            <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5  ">
                <div class="p-4">
                    {#each navItems as navItem}
                        <li class="pb-5">
                            <a rel="noreferrer" href="{navItem.href}" target="_blank" class="group flex  gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div class="flex  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <CustomComponent component="{navItem.icon}"/>
                                </div>
                                <div class="flex-auto">
                                    <span class="font-semibold group-hover:text-accent">{navItem.name}</span>
                                    <p class="mt-1 ">{navItem.description}</p>
                                </div>
                                <!--                                <Radio name="group3" value={1}>Enable notifications</Radio>-->
                                <!--                                <Helper class="pl-6">Some helpful instruction goes over here.</Helper>-->
                            </a>

                        </li>
                    {/each}
                </div>
            </div>

        </Dropdown>
    </div>

{/if}

<style>
</style>
