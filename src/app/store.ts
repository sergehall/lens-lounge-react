import {DialogData} from "../features/dialogs/dialog-data";
import {PostProps} from "../features/my-posts/post/Post";
import {ContactData} from "../features/dialogs/mocks/users-mock";


export interface RootState {
    header: HeaderState;
    sidebar: SidebarState;
    content: ContentState;
}


export interface HeaderState {
}

export interface HomeState {
}

export interface SidebarState {
}

export interface ContentState {
    homePage: HomeState;
    profilePage: ProfilePageState;
    dialogsPage: DialogsPageState;
}

export interface ProfilePageState {
    profile: {}
    posts: PostProps[];
}

export interface DialogsPageState {
    dialogs: DialogData[];
    posts: PostProps[];
    contacts: ContactData[];
}

