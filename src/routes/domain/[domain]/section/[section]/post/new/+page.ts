// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;
/**
 * Файл загрузки данных для страницы создания статьи
 */
import storeLoader from '../../../../../../../core/subscriber/storeLoader'

type TParams = { params: { domain: string; section: string; post: string } }

export const load = async ({ params }: TParams) => {
    return {
        domain: await storeLoader.getActiveDomain(params.domain),
        section: await storeLoader.getActiveSection(params.domain, params.section)
    }
}
