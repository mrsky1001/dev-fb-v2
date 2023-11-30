import type { SvelteComponent } from 'svelte'
import type { IUser } from '../../modules/user/user.class'

export interface INavItem {
    href: string
    name: string
    description?: string
    icon?: string | typeof SvelteComponent
}

export interface TAuthItem {
    id: string
    name: string
    description: string
    href: string
    user: IUser | null
}
