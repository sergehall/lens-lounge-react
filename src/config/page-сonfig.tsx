import React from "react";
import Home from "../components/content/home/Home";
import ExampleUserProfile from "../components/content/profile/mocks/example-user-profile";
import MyPosts from "../components/content/my-posts/My-posts";
import News from "../components/news/News";
import Technologies from "../components/content/technologies/Technologies";
import About from "../components/about/About";
import Contact from "../components/content/contact/Contact";
import {techLinks} from "./technology-links";
import {dialogsDataMock} from "../components/content/dialogs/mocks/dialogs-data-mock";
import Dialogs from "../components/content/dialogs/Dialogs";
import {postsDataMock} from "../components/content/my-posts/posts-data-mock/posts-data-mock";


export interface PageConfig {
    bannerImage: string;
    summaryDescription: string;
    component: React.ReactNode;
}

export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "/path/to/home-banner.jpg",
        summaryDescription: "Welcome to the homepage of our app.",
        component: <Home/>,
    },
    profile: {
        bannerImage: "/path/to/profile-banner.jpg",
        summaryDescription: "This is the profile page summary. Explore posts shared by users.",
        component: (
            <>
                <ExampleUserProfile/>
                <MyPosts posts={postsDataMock}/>
            </>
        ),
    },
    messages: {
        bannerImage: "/path/to/messages-banner.jpg",
        summaryDescription: "Your messages and chats.",
        component: <Dialogs dialogs={dialogsDataMock} className="Dialogs"/>,
    },
    news: {
        bannerImage: "/path/to/news-banner.jpg",
        summaryDescription: "Stay updated with the latest news.",
        component: <News/>,
    },
    technologies: {
        bannerImage: "/path/to/technologies-banner.jpg",
        summaryDescription: "Learn about cutting-edge technologies.",
        component: <Technologies links={techLinks} className="Technologies"/>
    },
    about: {
        bannerImage: "/path/to/about-banner.jpg",
        summaryDescription: "Learn more about our mission and values.",
        component: <About/>,
    },
    contact: {
        bannerImage: "/path/to/contact-banner.jpg",
        summaryDescription: "Get in touch with us.",
        component: <Contact/>,
    },
};
