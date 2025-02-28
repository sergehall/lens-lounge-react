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
    component: React.FC;  // Change to React Functional Component
}

// Functional component for Showcase Page
const ShowcasePage: React.FC = () => {
    const posts = useSelector((state: RootState) => state.content.whisperPage.relatedPosts);
    return (
        <>
            <ExampleUserProfile />
            <MyPosts posts={posts} className={ClassNames.MY_POSTS} />
        </>
    );
};

// Functional component for Whisper Dialogs
const WhisperDialogsPage: React.FC = () => {
    const chats = useSelector((state: RootState) => state.content.whisperPage.chatConversations);
    return <Chats chats={chats} />;
};

// Functional component for Whisper Contacts
const WhisperContactsPage: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.content.whisperPage.contactList);
    return <Contacts contacts={contacts} />;
};

// Functional component for News Page
const NewsPage: React.FC = () => {
    const news = useSelector((state: RootState) => state.content.newsPage.articles);
    return <News newArticles={news} />;
};

const TechnologiesPage: React.FC = () => {
    return <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES} />;
};

// Object to configure pages dynamically
export const pageConfig: Record<string, PageConfig> = {
    home: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Welcome to the homepage of Lens Lounge.",
        component: Home,
    },
    showcase: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Explore your profile and shared posts.",
        component: ShowcasePage,
    },
    whisperDialogs: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your messages and chats.",
        component: WhisperDialogsPage,
    },
    whisperContacts: {
        bannerImage: "./..assets/images/default-image-banner.png",
        summaryDescription: "Your contacts and friends.",
        component: WhisperContactsPage,
    },
    news: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Stay updated with the latest news.",
        component: NewsPage,
    },
    technologies: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn about cutting-edge technologies.",
        component: TechnologiesPage,
    },
    about: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Learn more about our mission and values.",
        component: About,
    },
    contact: {
        bannerImage: "./../assets/images/default-image-banner.png",
        summaryDescription: "Get in touch with us.",
        component: Contact,
    },
};


// import React from "react";
// import { useSelector } from "react-redux";
// import Home from "../features/home/Home";
// import ExampleUserProfile from "../features/profile/mocks/example-user-profile";
// import MyPosts from "../features/my-posts/My-posts";
// import News from "../features/news/News";
// import Technologies from "../features/technologies/Technologies";
// import About from "../features/about/About";
// import Contact from "../features/contact/Contact";
// import Contacts from "../features/whisper/contacts/Contacts";
// import { techLinks } from "./technology-links";
// import { RootState } from "../app/store";
// import { ClassNames } from "./class-names.enum";
// import Chats from "../features/whisper/chats/Chats";
//
// export interface PageConfig {
//     bannerImage: string;
//     summaryDescription: string;
//     component: () => React.ReactNode;
// }
//
// // Object to configure pages dynamically
// export const pageConfig: Record<string, PageConfig> = {
//     home: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Welcome to the homepage of Lens Lounge.",
//         component: () => <Home />,
//     },
//     showcase: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Explore your profile and shared posts.",
//         component: () => {
//             const posts = useSelector((state: RootState) => state.content.whisperPage.relatedPosts);
//             return (
//                 <>
//                     <ExampleUserProfile />
//                     <MyPosts posts={posts} className={ClassNames.MY_POSTS} />
//                 </>
//             );
//         },
//     },
//     whisperDialogs: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Your messages and chats.",
//         component: () => {
//             const chats = useSelector((state: RootState) => state.content.whisperPage.chatConversations);
//             return <Chats chats={chats} />;
//         },
//     },
//     whisperContacts: {
//         bannerImage: "./..assets/images/default-image-banner.png",
//         summaryDescription: "Your contacts and friends.",
//         component: () => {
//             const contacts = useSelector((state: RootState) => state.content.whisperPage.contactList);
//             return <Contacts contacts={contacts} />;
//         },
//     },
//     news: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Stay updated with the latest news.",
//         component: () => {
//             const news = useSelector((state: RootState) => state.content.newsPage.articles);
//             return <News newArticles={news} />;
//         },
//     },
//     technologies: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Learn about cutting-edge technologies.",
//         component: () => <Technologies links={techLinks} className={ClassNames.TECHNOLOGIES} />,
//     },
//     about: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Learn more about our mission and values.",
//         component: () => <About />,
//     },
//     contact: {
//         bannerImage: "./../assets/images/default-image-banner.png",
//         summaryDescription: "Get in touch with us.",
//         component: () => <Contact />,
//     },
// };