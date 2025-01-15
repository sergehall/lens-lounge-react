import {dialogData, DialogData} from "../features/dialogs/chats/dialog-data";
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
        profilePage: {
            profile: {},
            posts: postsDataMock
        },
        dialogsPage: {
            dialogs: dialogData,
            posts: postsDataMock,
            contacts: contactData
        }
    }
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
    profilePage: ProfilePageState;
    dialogsPage: DialogsPageState;
}

export interface HomeState {
}

export interface ProfilePageState {
    profile: {}
    posts: PostProps[];
}

export interface DialogsPageState {
    dialogs: DialogData[];
    posts: PostProps[];
    contacts: ContactsData[];
}


