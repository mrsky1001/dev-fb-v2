/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;

/**
 * Файл загрузки данных для страницы выбранной статьи
 */

type TParams = { params: { domain: string; section: string; post: string } }

export const load = async ({ params }: TParams) => {
    return {}
}
