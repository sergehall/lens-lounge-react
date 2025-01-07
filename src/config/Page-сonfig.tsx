import React from "react";
import Home from "../features/home/Home";
import ExampleUserProfile from "../features/profile/mocks/example-user-profile";
import MyPosts from "../features/my-posts/My-posts";
import News from "../features/news/News";
import Technologies from "../features/technologies/Technologies";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Dialogs from "../features/dialogs/chats/Dialogs";
import Contacts from "../features/dialogs/contacts/Contacts";
import {techLinks} from "./technology-links";
import {RootState} from "../app/store";
import {ClassNames} from "./class-names.enum";

export interface PageConfig {
    bannerImage: string;
    summaryDescription: string;
    component: (state: RootState) => React.ReactNode;
}

// Object to configure pages dynamically
export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Welcome to the homepage of Lens Lounge.",
        component: () => <Home/>,
    },
    profile: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Explore your profile and shared posts.",
        component: (state: RootState) => (
            <>
                <ExampleUserProfile/>
                <MyPosts posts={state.content.profilePage.posts} className={ClassNames.MY_POSTS}/>
            </>
        ),
    },
    dialogsChats: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your messages and chats.",
        component: (state: RootState) => (
            <Dialogs
                dialogs={state.content.dialogsPage.dialogs}
            />
        ),
    },
    dialogsContacts: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your contacts and friends.",
        component: (state: RootState) => (
            <Contacts
                contacts={state.content.dialogsPage.contacts}
            />
        ),
    },
    news: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Stay updated with the latest news.",
        component: () => <News/>,
    },
    technologies: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn about cutting-edge technologies.",
        component: () => (
            <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES}/>
        ),
    },
    about: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn more about our mission and values.",
        component: () => <About/>,
    },
    contact: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Get in touch with us.",
        component: () => <Contact/>,
    },
};