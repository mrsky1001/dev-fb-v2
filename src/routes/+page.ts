// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

import { globalStore } from '../core/stores/global.store'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    globalStore.init(await getD)

    allSectionsStore.setLikeStores(sections)

    sections.length && allSectionsStore.getStore(sections[0]?._id)?.setActive(true)
    return {}
}
