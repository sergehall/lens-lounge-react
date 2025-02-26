import { chatsData, ChatsData } from "../features/whisper/chats/chats-data";
import { PostProps } from "../features/my-posts/post/Post";
import { contactData, ContactsData } from "../features/whisper/contacts/contacts-data";
import { NavLinks, navLinks } from "../config/nav-links";
import { postsDataMock } from "../features/my-posts/mocks/posts-data-mock";
import { NewArticles, newArticlesMock } from "../features/news/news-articles-mock";
import { BehaviorSubject } from "rxjs";

// Define the rootState object
export const rootState: RootState = {
    header: {},
    sidebar: {
        links: navLinks,
    },
    content: {
        homePage: {},
        showcasePage: {
            profile: {},
            posts: postsDataMock,
        },
        whisperPage: {
            chats: chatsData,
            posts: postsDataMock,
            contacts: contactData,
        },
        newsPage: {
            news: newArticlesMock,
        },
    },
};

export interface RootState {
    header: HeaderState;
    sidebar: SidebarState;
    content: ContentState;
}

export interface HeaderState {}

export interface SidebarState {
    links: NavLinks[];
}

export interface ContentState {
    homePage: HomeState;
    showcasePage: ShowcasePageState;
    whisperPage: WhisperPageState;
    newsPage: NewsPageState;
}

export interface HomeState {}

export interface ShowcasePageState {
    profile: Record<string, unknown>;
    posts: PostProps[];
}

export interface WhisperPageState {
    chats: ChatsData[];
    posts: PostProps[];
    contacts: ContactsData[];
}

export interface NewsPageState {
    news: NewArticles[];
}

// Store Class with Private State
class Store {
    private state$: BehaviorSubject<RootState>;

    constructor(initialState: RootState) {
        this.state$ = new BehaviorSubject(initialState);
    }

    getState(): RootState {
        return this.state$.getValue();
    }

    subscribe(callback: (state: RootState) => void) {
        return this.state$.subscribe(callback);
    }

    updateState(partialState: Partial<RootState>) {
        this.state$.next({ ...this.state$.getValue(), ...partialState });
    }
}

// Exporting a Singleton Instance of the Store
export const store = new Store(rootState);

// import {chatsData, ChatsData} from "../features/whisper/chats/chats-data";
// import {PostProps} from "../features/my-posts/post/Post";
// import {contactData, ContactsData} from "../features/whisper/contacts/contacts-data";
// import {NavLinks, navLinks} from "../config/nav-links";
// import {postsDataMock} from "../features/my-posts/mocks/posts-data-mock";
// import {NewArticles, newArticlesMock} from "../features/news/news-articles-mock";
//
//
// // Define the rootState object
// export const rootState: RootState = {
//     header: {},
//     sidebar: {
//         links: navLinks
//     },
//     content: {
//         homePage: {},
//         showcasePage: {
//             profile: {},
//             posts: postsDataMock
//         },
//         whisperPage: {
//             chats: chatsData,
//             posts: postsDataMock,
//             contacts: contactData
//         },
//         newsPage: {
//             news: newArticlesMock,
//         },
//     },
// };
//
// export interface RootState {
//     header: HeaderState;
//     sidebar: SidebarState;
//     content: ContentState;
// }
//
// export interface HeaderState {
// }
//
// export interface SidebarState {
//     links: NavLinks[];
// }
//
// export interface ContentState {
//     homePage: HomeState;
//     showcasePage: ShowcasePageState;
//     whisperPage: WhisperPageState;
//     newsPage: NewsPageState;
// }
//
// export interface HomeState {
// }
//
// export interface ShowcasePageState {
//     profile: {}
//     posts: PostProps[];
// }
//
// export interface WhisperPageState {
//     chats: ChatsData[];
//     posts: PostProps[];
//     contacts: ContactsData[];
// }
//
//
// export interface NewsPageState {
//     news: NewArticles[]
// }
