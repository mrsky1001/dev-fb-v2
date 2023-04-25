// import config from "../../config/config";
//
// const getMetaInfo = (title: string, description: string) => {
//     return {
//         title: title,
//         meta: [
//             {
//                 name: 'description',
//                 content: description,
//             },
//             { property: 'og:title', content: title },
//             { property: 'og:site_name', content: config.router.siteName },
//             { property: 'og:type', content: 'website' },
//             { name: 'robots', content: 'index,follow' },
//         ],
//     }
// }
//
// export const getMetaInfoForPost = () => {
//     const post = vxa.post.post ?? new Post()
//
//     return getMetaInfo(post.title, post.annotation.text)
// }
//
// export const getMetaInfoForEditPost = () => {
//     const post = vxa.edit.post ?? new Post()
//
//     return getMetaInfo(post.title, post.annotation.text)
// }
