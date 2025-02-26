import React from "react";
import { useSelector } from "react-redux";
import Home from "../features/home/Home";
import ExampleUserProfile from "../features/profile/mocks/example-user-profile";
import MyPosts from "../features/my-posts/My-posts";
import News from "../features/news/News";
import Technologies from "../features/technologies/Technologies";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Contacts from "../features/whisper/contacts/Contacts";
import { techLinks } from "./technology-links";
import { RootState } from "../app/store";
import { ClassNames } from "./class-names.enum";
import Chats from "../features/whisper/chats/Chats";

export interface PageConfig {
    bannerImage: string;
    summaryDescription: string;
    component: () => React.ReactNode;
}

// Object to configure pages dynamically
export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Welcome to the homepage of Lens Lounge.",
        component: () => <Home />,
    },
    showcase: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Explore your profile and shared posts.",
        component: () => {
            const posts = useSelector((state: RootState) => state.content.whisperPage.posts);
            return (
                <>
                    <ExampleUserProfile />
                    <MyPosts posts={posts} className={ClassNames.MY_POSTS} />
                </>
            );
        },
    },
    whisperDialogs: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your messages and chats.",
        component: () => {
            const chats = useSelector((state: RootState) => state.content.whisperPage.chats);
            return <Chats chats={chats} />;
        },
    },
    whisperContacts: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your contacts and friends.",
        component: () => {
            const contacts = useSelector((state: RootState) => state.content.whisperPage.contacts);
            return <Contacts contacts={contacts} />;
        },
    },
    news: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Stay updated with the latest news.",
        component: () => {
            const news = useSelector((state: RootState) => state.content.newsPage.news);
            return <News newArticles={news} />;
        },
    },
    technologies: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn about cutting-edge technologies.",
        component: () => <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES} />,
    },
    about: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn more about our mission and values.",
        component: () => <About />,
    },
    contact: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Get in touch with us.",
        component: () => <Contact />,
    },
};


// import React from "react";
// import Home from "../features/home/Home";
// import ExampleUserProfile from "../features/profile/mocks/example-user-profile";
// import MyPosts from "../features/my-posts/My-posts";
// import News from "../features/news/News";
// import Technologies from "../features/technologies/Technologies";
// import About from "../features/about/About";
// import Contact from "../features/contact/Contact";
// import Contacts from "../features/whisper/contacts/Contacts";
// import {techLinks} from "./technology-links";
// import {RootState} from "../app/store";
// import {ClassNames} from "./class-names.enum";
// import Chats from "../features/whisper/chats/Chats";
//
// export interface PageConfig {
//     bannerImage: string;
//     summaryDescription: string;
//     component: (state: RootState) => React.ReactNode;
// }
//
// // Object to configure pages dynamically
// export const pageConfig: Record<string, PageConfig> = {
//     home: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Welcome to the homepage of Lens Lounge.",
//         component: () => <Home/>,
//     },
//     showcase: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Explore your profile and shared posts.",
//         component: (state: RootState) => (
//             <>
//                 <ExampleUserProfile/>
//                 <MyPosts posts={state.content.whisperPage.posts} className={ClassNames.MY_POSTS}/>
//             </>
//         ),
//     },
//     whisperDialogs: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Your messages and chats.",
//         component: (state: RootState) => (
//             <Chats
//                 chats={state.content.whisperPage.chats}
//             />
//         ),
//     },
//     whisperContacts: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Your contacts and friends.",
//         component: (state: RootState) => (
//             <Contacts
//                 contacts={state.content.whisperPage.contacts}
//             />
//         ),
//     },
//     news: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Stay updated with the latest news.",
//         component: (state: RootState) => <News newArticles={state.content.newsPage.news}/>,
//     },
//     technologies: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Learn about cutting-edge technologies.",
//         component: () => (
//             <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES}/>
//         ),
//     },
//     about: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Learn more about our mission and values.",
//         component: () => <About/>,
//     },
//     contact: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Get in touch with us.",
//         component: () => <Contact/>,
//     },
// };