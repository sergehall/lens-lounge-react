import {DialogData} from "../features/dialogs/dialog-data";
import {PostProps} from "../features/my-posts/post/Post";


export interface RootState {
    homePage: HomePageState;
    profilePage: ProfilePageState;
    dialogsPage: DialogsPageState;
}


export interface HomePageState {
}

export interface ProfilePageState {
    profile: {}
    posts: PostProps[];
}

export interface DialogsPageState {
    dialogs: DialogData[];
    posts: PostProps[];
}

