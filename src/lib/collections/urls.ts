/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

export default {
    /**
     * Auth
     */

    LOGIN: '/api/auth/login',
    ROLES: '/api/roles',
    REGISTRATION: '/api/auth/registration',
    LOGOUT: '/api/auth/logout',
    IS_AUTHORIZED: '/api/auth/is-authorized',

    /**
     * USER TYPE
     */

    GET_USER_TYPE: '/api/userType/id',
    GET_ALL_USER_TYPE: '/api/userType/all',
    CREATE_USER_TYPE: '/api/userType/create',
    UPDATE_USER_TYPE: '/api/userType/update',
    DELETE_USER_TYPE: '/api/userType/delete',

    /**
     * User
     */
    GET_USER: '/api/user/id',
    GET_ALL_USER: '/api/user/all',
    CREATE_USER: '/api/user/create',
    UPDATE_USER: '/api/user/update',
    DELETE_USER: '/api/user/delete',

    GET_USER_BY_TYPE: '/api/user/type',

    /**
     * POST
     */
    GET_POSTS: '/api/posts',
    GET_POSTS_BY_SECTION_ID: '/api/posts/section-id',
    GET_POST_BY_ID: '/api/post-id',
    GET_POSTS_BY_SECTION: '/api/posts',
    GET_POST_BY_TITLE: '/api/post',
    GET_FILTERS_POSTS: '/api/post-filters',
    CREATE_POST: '/api/post',
    UPDATE_POST_BY_ID: '/api/post-id',

    SET_POST_LIKE: '/api/post-like',
    DELETE_POST_LIKE: '/api/post-like',

    SET_PHOTO_POST_LIKE: '/api/photo-post-like',
    DELETE_PHOTO_POST_LIKE: '/api/photo-post-like',
    UPDATE_POST_PHOTO_SIZE: '/api/photo-post-size',

    UPDATE_POST_STATUS: '/api/post-status',
    ADD_POST_SHARE: '/api/post-share',

    /**
     * COMMENTS
     */
    GET_COMMENTS: '/api/comments',
    GET_COMMENT_BY_ID: '/api/comment-id',
    CREATE_COMMENT: '/api/comment',
    UPDATE_COMMENT_BY_ID: '/api/comment-id',

    SET_COMMENT_LIKE: '/api/comment-like',
    DELETE_COMMENT_LIKE: '/api/comment-like',

    UPDATE_COMMENT_STATUS: '/api/comment-status',
    /**
     * PRODUCT
     */
    GET_PRODUCTS: '/api/product',
    GET_PRODUCT_BY_ID: '/api/product-id',
    GET_PRODUCT_BY_TITLE: '/api/product',
    CREATE_PRODUCT: '/api/product',
    UPDATE_PRODUCT_BY_ID: '/api/product-id',

    /**
     * SECTIONS
     */
    GET_SECTIONS: '/api/sections',
    GET_SECTION_BY_ID: '/api/section-id',
    CREATE_SECTION: '/api/section',
    UPDATE_SECTION_BY_ID: '/api/section-id',

    /**
     * DOMAINS
     */
    GET_DOMAINS: '/api/domains',
    GET_DOMAIN_BY_ID: '/api/domain-id',
    CREATE_DOMAIN: '/api/domain',
    UPDATE_DOMAIN_BY_ID: '/api/domain-id',

    /**
     * IMGS
     */
    GET_IMG: '/api/uploads/images',
    GET_IMG_OLD: '/uploads/images',
    GET_IMGS: '/api/imgs',

    UPLOAD_PRODUCT_IMG: '/api/product-img',
    DELETE_PRODUCT_IMG: '/api/product-img',

    UPLOAD_POST_IMG: '/api/post-img',
    DELETE_POST_IMG: '/api/post-img',

    UPLOAD_AVATAR_IMG: '/api/avatar-img',
    DELETE_AVATAR_IMG: '/api/avatar-img'
    // GET_ALL_IMGS: 'api/authST/img/all',
    // EDIT_IMG: 'api/authST/img'
}