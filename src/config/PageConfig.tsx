import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import HomePage from "../features/home-page/HomePage";
import ShowcasePage from "../features/showcase/ShowcasePage";
import WhisperChatPage from "../features/whisper/WhisperChatPage";
import Contacts from "../features/whisper/contacts/Contacts";
import News from "../features/news/News";
import Technologies from "../features/technologies/Technologies";
import PortfolioIntro from "../features/about/About";
import Contact from "../features/contact/Contact";

import { techLinks } from "../features/technologies/types/technologyLinks";
import { ClassNames } from "./types/classNames.enum";

import BannerImage from "../features/banner-image/bannerImage";
import defaultImageBanner from "../assets/images/defaultImageBanner.png";
import PageContentSummarize from "../features/page-insight/PageInsight";

// -------------------------------
// PageConfig interface
// -------------------------------

export interface PageConfig {
    bannerImage: React.FC;
    pageContentSummarize: React.FC;
    component: React.FC;
    isProtected?: boolean;
    children?: Record<string, PageConfig>;
}

// -------------------------------
// Feature-specific React wrappers
// -------------------------------

const NewsPage: React.FC = () => {
    const news = useSelector((state: RootState) => state.newsPage.articles);
    return <News newArticles={news} />;
};

const TechnologiesPage: React.FC = () => (
    <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES} />
);

// -------------------------------
// Global pageConfig object
// -------------------------------

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
        isProtected: true, // 🚫 requires auth
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
        component: WhisperChatPage,
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
