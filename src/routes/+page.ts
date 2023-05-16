// // since there's no dynamic data here, we can prerender
// // it so that it gets served as a static asset in production
// import { getSections } from '../core/server/services/sections.services'
// import { allSectionsStore } from '../core/server/stores/section/all-sections.store'
// import type { ISection, ISectionProps } from '../core/server/stores/section/section'
//
// // export const prerender = true;
//
// /** @type {import('./$types').PageLoad} */
// export const load = async () => {
//     const sections: ISectionProps[] = await getSections('ss')
//
//     allSectionsStore.setLikeStores(sections)
//
//     sections.length && allSectionsStore.getStore(sections[0]?._id)?.setActive(true)
//     return {}
// }
