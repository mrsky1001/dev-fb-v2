import { error } from '@sveltejs/kit'
import { getPost } from '../../../core/server/services/post.services'
import Post from '../../../core/server/stores/post/post'
import { createPostStore } from '../../../core/server/stores/post/post.store'

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
    console.log(params)
    const post = createPostStore(await getPost('', params.slug))

    // if (post) {
    //     return post;
    // }

    console.log(post)

    return { post: post }

    throw error(404, 'Not found')
}
