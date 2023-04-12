// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getSections} from "../core/services/sections.services";

export const prerender = true;


getSections()