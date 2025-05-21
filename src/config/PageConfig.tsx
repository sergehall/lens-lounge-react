import { ROUTES } from '../utils/routes/routes';
import CategoryBlogsPage from '../features/category-blogs-page/CategoryBlogsPage';
import HomePage from '../features/home-page/HomePage';
import ShowcasePage from '../features/showcase/ShowcasePage';
import UserBlogs from '../features/showcase/user-blogs/UserBlogs';
import WhisperPage from '../features/whisper/WhisperPage';
import Contacts from '../features/whisper/contacts/Contacts';
import PortfolioIntro from '../features/about/About';
import Contact from '../features/contact/Contact';
import TechnologiesPage from '../features/technologies/TechnologiesPage';
import NewsPage from '../features/news/NewsPage';

import { unauthContent } from './unauthContent';
import { createPageConfig } from './PageConfigFactory';

export const pageConfig = {
  [ROUTES.home.root]: createPageConfig({ component: HomePage }),

  [ROUTES.home.dynamic]: createPageConfig({
    component: CategoryBlogsPage,
  }),

  [ROUTES.showcase.root]: createPageConfig({
    component: ShowcasePage,
    isProtected: true,
    unauthLandingProps: unauthContent.showcase,
  }),

  [ROUTES.showcaseCategory.name]: createPageConfig({
    component: UserBlogs,
    isProtected: true,
    unauthLandingProps: unauthContent.showcase,
  }),

  [ROUTES.whisper.chat]: createPageConfig({
    component: WhisperPage,
    isProtected: true,
  }),

  [ROUTES.whisper.contacts]: createPageConfig({
    component: Contacts,
    isProtected: true,
  }),

  [ROUTES.technologies.root]: createPageConfig({
    component: TechnologiesPage,
  }),

  [ROUTES.news.root]: createPageConfig({
    component: NewsPage,
  }),

  [ROUTES.about.root]: createPageConfig({
    component: PortfolioIntro,
  }),

  [ROUTES.contact.root]: createPageConfig({
    component: Contact,
  }),
};
