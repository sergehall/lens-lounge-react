import React from 'react';

import CategoryBlogsPage from '../features/category-blogs-page/CategoryBlogsPage';
import HomePage from '../features/home-page/HomePage';
import ShowcasePage from '../features/showcase/ShowcasePage';
import UserBlogs from '../features/showcase/user-blogs/UserBlogs';
import WhisperPage from '../features/whisper/WhisperPage';
import Contacts from '../features/whisper/contacts/Contacts';
import PortfolioIntro from '../features/about/About';
import Contact from '../features/contact/Contact';
import BannerImage from '../features/banner-image/bannerImage';
import defaultImageBanner from '../assets/images/defaultImageBanner.png';
import PageContentSummarize from '../features/page-insight/PageInsight';
import TechnologiesPage from '../features/technologies/TechnologiesPage';
import NewsPage from '../features/news/NewsPage';
import EmptyLayout from '../layouts/EmptyLayout';
import { RouteManager } from '../utils/routes/routeManager';

import { PageConfig } from './types/types';
import { unauthContent } from './unauthContent';

export const pageConfig: Record<string, PageConfig> = {
  home: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: HomePage,
    isProtected: false,
    layoutType: 'default',
    children: {},
  },

  categories: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: EmptyLayout,
    isProtected: false,
    layoutType: 'none',
    children: {
      ':name': {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
        pageContentSummarize: PageContentSummarize,
        component: CategoryBlogsPage,
        isProtected: false,
        layoutType: 'default',
        children: {},
      },
    },
  },

  showcase: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: ShowcasePage,
    isProtected: true,
    layoutType: 'default',
    children: {},
    unauthLandingProps: unauthContent.showcase,
  },

  showcaseCategory: {
    path: RouteManager.getShowcaseCategoryName(),
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: UserBlogs,
    isProtected: true,
    layoutType: 'default',
    children: {},
    unauthLandingProps: unauthContent.showcase,
  },

  whisperDialogs: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: WhisperPage,
    isProtected: true,
    layoutType: 'default',
    children: {},
  },

  whisperContacts: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: Contacts,
    isProtected: true,
    layoutType: 'default',
    children: {},
  },

  news: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: NewsPage,
    isProtected: false,
    layoutType: 'default',
    children: {},
  },

  technologies: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: TechnologiesPage,
    isProtected: false,
    layoutType: 'default',
    children: {},
  },

  about: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: PortfolioIntro,
    isProtected: false,
    layoutType: 'default',
    children: {},
  },

  contact: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: Contact,
    isProtected: false,
    layoutType: 'default',
    children: {},
  },
};
