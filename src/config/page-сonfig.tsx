import React from "react";
import Home from "../components/content/home/Home";
import ExampleUserProfile from "../components/content/profile/mocks/example-user-profile";
import MyPosts from "../components/content/my-posts/My-posts";
import News from "../components/news/News";
import Technologies from "../components/content/technologies/Technologies";
import About from "../components/about/About";
import Contact from "../components/content/contact/Contact";
import { techLinks } from "./technology-links";
import { postsDataMock } from "../components/content/my-posts/mocks/posts-data-mock";
import Dialogs from "../components/content/dialogs/Dialogs";
import {dialogData} from "../components/content/dialogs/dialog-data";

export interface PageConfig {
    bannerImage: string;
    summaryDescription: string;
    component: React.ReactNode;
}

// Object to configure pages dynamically
export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Welcome to the homepage of our app.",
        component: <Home />,
    },
    profile: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Explore your profile and shared posts.",
        component: (
            <>
                <ExampleUserProfile />
                <MyPosts posts={postsDataMock} />
            </>
        ),
    },
    messages: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Your messages and chats.",
        component: <Dialogs dialogs={dialogData} className="Dialogs"/>,
    },
    news: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Stay updated with the latest news.",
        component: <News />,
    },
    technologies: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Learn about cutting-edge technologies.",
        component: <Technologies links={techLinks} className="Technologies" />,
    },
    about: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Learn more about our mission and values.",
        component: <About />,
    },
    contact: {
        bannerImage: "../../../assets/images/default-image-banner.png",
        summaryDescription: "Get in touch with us.",
        component: <Contact />,
    },
};