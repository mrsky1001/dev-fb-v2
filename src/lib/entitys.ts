import type {SvelteComponent} from "svelte";

export interface INavItem {
    href: string
    name: string
    icon: string | SvelteComponent
}