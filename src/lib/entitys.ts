import type {SvelteComponent} from "svelte";

export interface INavItem {
    href: string
    name: string
    description?: string
    icon?: string | SvelteComponent
}