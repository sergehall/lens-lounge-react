import React from "react";
import {useSelector} from "react-redux";
import Home from "../features/home/Home";
import ExampleUserProfile from "../features/showcase/profile/mocks/exampleUserProfile";
import MyPosts from "../features/showcase/my-posts/MyPosts";
import News from "../features/news/News";
import Technologies from "../features/technologies/Technologies";
import PortfolioIntro from "../features/about/About";
import Contact from "../features/contact/Contact";
import Contacts from "../features/whisper/contacts/Contacts";
import {techLinks} from "../features/technologies/types/technologyLinks";
import {RootState} from "../app/store";
import {ClassNames} from "./types/classNames.enum";
import Chats from "../features/whisper/chats/Chats";
import BannerImage from "../features/banner-image/bannerImage";
import defaultImageBanner from "../assets/images/defaultImageBanner.png";
import PageContentSummarize from "../features/page-insight/PageInsight";

export interface PageConfig {
    bannerImage: React.FC;
    pageContentSummarize: React.FC;
    component: React.FC;
}

const ShowcasePage: React.FC = () => {
    const posts = useSelector((state: RootState) => state.relatedPosts.posts);
    return (
        <>
            <ExampleUserProfile />
            <MyPosts posts={posts} className={ClassNames.MY_POSTS} />
        </>
    );
};

const WhisperDialogsPage: React.FC = () => <Chats />;

const WhisperContactsPage: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contactList.list);
    return <Contacts contacts={contacts} />;
};

const NewsPage: React.FC = () => {
    const news = useSelector((state: RootState) => state.newsPage.articles);
    return <News newArticles={news} />;
};

const TechnologiesPage: React.FC = () => <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES}/>;


export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: Home,
    },
    showcase: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: ShowcasePage,
    },
    whisperDialogs: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: WhisperDialogsPage,
    },
    whisperContacts: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: WhisperContactsPage,
    },
    news: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: NewsPage,
    },
    technologies: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: TechnologiesPage,
    },
    about: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: PortfolioIntro,
    },
    contact: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: Contact,
    },
};