import { error } from '@sveltejs/kit'
import { getPost, getPosts } from '../../../../../../../core/server/services/post.services'
import Post from '../../../../../../../core/stores/post/post'
import { createPostStore } from '../../../../../../../core/stores/post/post.store'

/** @type {import('../../../../../../../../.svelte-kit/types/src/routes').PageLoad} */
export const load = async ({ params }) => {
    const postStore = createPostStore(await getPost('', params.post))
    const latestPosts = await getPosts(postStore.self().sectionId)

    return { postStore: postStore, latestPosts: latestPosts }

    throw error(404, 'Not found')
}
