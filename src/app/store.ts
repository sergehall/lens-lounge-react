import {chatsData, ChatsData} from "../features/dialogs/chats/chats-data";
import {PostProps} from "../features/my-posts/post/Post";
import {contactData, ContactsData} from "../features/dialogs/contacts/contacts-data";
import {NavLinkProps, navLinks} from "../config/nav-links";
import {postsDataMock} from "../features/my-posts/mocks/posts-data-mock";


// Define the rootState object
export const rootState: RootState = {
    header: {},
    sidebar: {
        links: navLinks
    },
    content: {
        homePage: {},
        showcasePage: {
            profile: {},
            posts: postsDataMock
        },
        whisperPage: {
            chats: chatsData,
            posts: postsDataMock,
            contacts: contactData
        }
    },
};

export interface RootState {
    header: HeaderState;
    sidebar: SidebarState;
    content: ContentState;
}

export interface HeaderState {
}

export interface SidebarState {
    links: NavLinkProps[];
}

export interface ContentState {
    homePage: HomeState;
    showcasePage: ShowcasePageState;
    whisperPage: WhisperPageState;
}

export interface HomeState {
}

export interface ShowcasePageState {
    profile: {}
    posts: PostProps[];
}

export interface WhisperPageState {
    chats: ChatsData[];
    posts: PostProps[];
    contacts: ContactsData[];
}


