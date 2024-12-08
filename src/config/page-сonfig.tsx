import React from "react";
import Home from "../components/content/home/Home";
import ExampleUserProfile from "../components/content/profile/example-user-profile";
import MyPosts, { postsDataMock } from "../components/content/my-posts/My-posts";
import Dialogs from "../components/content/dialogs/Dialogs";
import News from "../components/news/News";
import Technologies from "../components/content/technologies/Technologies";
import About from "../components/about/About";
import Contact from "../components/content/contact/Contact";
import { dialogsData } from "../components/content/dialogs/dialogs-data-mock/dialogs-data-mock";
import { techLinks } from "./technology-links";

export interface PageConfig {
    bannerImage: string;
    summaryDescription: string;
    component: React.ReactNode; // Correct type for JSX components
}

export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "/path/to/home-banner.jpg",
        summaryDescription: "Welcome to the homepage of our app.",
        component: <Home />, // Correct JSX usage
    },
    profile: {
        bannerImage: "/path/to/profile-banner.jpg",
        summaryDescription: "This is the profile page summary. Explore posts shared by users.",
        component: (
            <>
                <ExampleUserProfile />
            <MyPosts posts={postsDataMock} />
</>
),
},
messages: {
    bannerImage: "/path/to/messages-banner.jpg",
        summaryDescription: "Your messages and chats.",
        component: <Dialogs dialogs={dialogsData} />,
},
news: {
    bannerImage: "/path/to/news-banner.jpg",
        summaryDescription: "Stay updated with the latest news.",
        component: <News />,
},
technologies: {
    bannerImage: "/path/to/technologies-banner.jpg",
        summaryDescription: "Learn about cutting-edge technologies.",
        component:  <Technologies links={techLinks} className="Technologies" />
},
about: {
    bannerImage: "/path/to/about-banner.jpg",
        summaryDescription: "Learn more about our mission and values.",
        component: <About />,
},
contact: {
    bannerImage: "/path/to/contact-banner.jpg",
        summaryDescription: "Get in touch with us.",
        component: <Contact />,
},
};
