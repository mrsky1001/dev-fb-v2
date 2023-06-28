// import { globalStore } from '../stores/global.store'
// import { createAllSectionStore } from '../stores/section/all-sections.store'
//
// class Subscriber {
//     isActive = false
//
//     changingData = (data) => {
//         console.log('changingData [  domain] =================')
//         globalStore.update({ allSectionsStore: createAllSectionStore(data.sections) })
//
//         // activeSection = globalStore.self().allSectionsStore.getActive()
//         // sections = globalStore.self().allSectionsStore.all()
//     }
//
//     // const initActiveSection = () => {
//     // 	console.log(data.sections)
//     // 	data.sections.find((s) => s.id === data.sectionId).setActive()
//     // 	globalStore.update({ allSectionsStore: createAllSectionStore(data.sections as ISectionProps[]) })
//     // 	activeSection = globalStore.self().allSectionsStore.getActive()
//     // }
//     //
//     // const changingData = () => {
//     // 	console.log('changingData [ section domain] =================')
//     // 	initActiveSection()
//     //
//     // 	sections = globalStore.self().allSectionsStore.all()
//     // }
//     //
//     // subscribe(globalStore, () => {
//     // if (globalStore.self()?.allDomainsStore) {
//     // console.log('subscribe [ section domain] =================')
//     // activeDomain = globalStore.self().allDomainsStore.getStoreByField('name', data.domain)?.self()
//     //
//     // if (!activeDomain) {
//     // subscribeAll(globalStore.self().allDomainsStore.allStores(), () => {
//     // activeDomain.setActive()
//     // })
//     // } else {
//     // 	activeDomain.setActive()
//     // }
//     //
//     // const activeSectionStore = globalStore.self().allSectionsStore.getActiveStore()
//     // activeSectionStore?.loadPosts()
//     //
//     // if (activeSectionStore) {
//     // 	subscribe(activeSectionStore, () => {
//     // 		posts = activeSectionStore.self().allPostStore.all()
//     // 		console.log(posts)
//     // 	})
//     // }
//     // }
//     // })
// }
// const subscriber = new Subscriber()
// export default subscriber
