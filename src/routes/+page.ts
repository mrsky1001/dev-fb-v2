// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getSections} from "../core/lib/services/sections.services";
import type Section from "../core/lib/models/classes/article/Section";
import {ScrollSpyArr} from "../core/components/ScrollSpy/scroll-spy";

// export const prerender = true;

export const load = ({params}) => {
    const sections
    getSections().then(data => {
        _sections = data

    })
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}

export let _sections: Section[] = []


export const _getSectionsLikeScrollSpyArr = () => {
    _sections.map(s => new ScrollSpyArr(s.name))
}