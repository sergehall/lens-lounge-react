import React from "react";
import {useSelector} from "react-redux";
import Home from "../components/content/home/Home";
import ExampleUserProfile from "../components/content/showcase/profile/mocks/exampleUserProfile";
import MyPosts from "../components/content/showcase/my-posts/MyPosts";
import News from "../components/content/news/News";
import Technologies from "../components/content/technologies/Technologies";
import About from "../components/content/about/About";
import Contact from "../components/content/contact/Contact";
import Contacts from "../components/content/whisper/contacts/Contacts";
import {techLinks} from "../components/content/technologies/types/technologyLinks";
import {RootState} from "../app/store";
import {ClassNames} from "./types/classNames.enum";
import Chats from "../components/content/whisper/chats/Chats";
import BannerImage from "../components/content/banner-image/bannerImage";
import defaultImageBanner from "../assets/images/defaultImageBanner.png";
import PageContentSummarize from "../components/content/summarize/SummarizeContent";

export interface PageConfig {
    bannerImage: React.FC;
    pageContentSummarize: React.FC;
    component: React.FC;
}

const ShowcasePage: React.FC = () => {
    const posts = useSelector((state: RootState) => state.content.whisperPage.relatedPosts);
    return (
        <>
            <ExampleUserProfile/>
            <MyPosts posts={posts} className={ClassNames.MY_POSTS}/>
        </>
    );
};

const WhisperDialogsPage: React.FC = () => <Chats/>;

const NewsPage: React.FC = () => {
    const news = useSelector((state: RootState) => state.content.newsPage.articles);
    return <News newArticles={news}/>;
};
const WhisperContactsPage: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.content.whisperPage.contactList);
    return <Contacts contacts={contacts}/>;
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
        component: About,
    },
    contact: {
        bannerImage: () => <BannerImage imageUrl={defaultImageBanner}/>,
        pageContentSummarize: PageContentSummarize,
        component: Contact,
    },
};