import React from 'react';

import HomePage from '../features/home-page/HomePage';
import ShowcasePage from '../features/showcase/ShowcasePage';
import WhisperPage from '../features/whisper/WhisperPage';
import Contacts from '../features/whisper/contacts/Contacts';
import PortfolioIntro from '../features/about/About';
import Contact from '../features/contact/Contact';
import BannerImage from '../features/banner-image/bannerImage';
import defaultImageBanner from '../assets/images/defaultImageBanner.png';
import PageContentSummarize from '../features/page-insight/PageInsight';
import TechnologiesPage from '../features/technologies/TechnologiesPage';
import NewsPage from '../features/news/NewsPage';

// PageConfig interface
export interface PageConfig {
  bannerImage: React.FC;
  pageContentSummarize: React.FC;
  component: React.FC;
  isProtected?: boolean;
  children?: Record<string, PageConfig>;
}

// Global pageConfig object
export const pageConfig: Record<string, PageConfig> = {
  home: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: HomePage,
  },

  showcase: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: ShowcasePage,
    isProtected: true, // requires auth
    children: {
      // Example nested page
      featured: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
        pageContentSummarize: PageContentSummarize,
        component: ShowcasePage,
        isProtected: true,
      },
    },
  },

  whisperDialogs: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: WhisperPage,
    isProtected: true,
  },

  whisperContacts: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: Contacts,
    isProtected: true,
  },

  news: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: NewsPage,
  },

  technologies: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: TechnologiesPage,
  },

  about: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: PortfolioIntro,
  },

  contact: {
    bannerImage: () => <BannerImage imageUrl={defaultImageBanner} />,
    pageContentSummarize: PageContentSummarize,
    component: Contact,
  },
};
