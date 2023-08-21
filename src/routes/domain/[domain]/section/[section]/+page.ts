// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;
/**
 * Файл загрузки данных для страницы выбранного раздела
 */
import storeLoader from '../../../../../core/subscriber/storeLoader'

type TParams = { params: { domain: string; section: string } }
export const load = async ({ params }: TParams) => {
    return {
        sections: await storeLoader.loadSections(params.domain),
        posts: await storeLoader.loadPosts(params.domain, params.section),
        activeDomain: await storeLoader.getActiveDomain(params.domain),
        activeSection: await storeLoader.getActiveSection(params.domain, params.section)
    }
}
