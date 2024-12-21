import {DialogData} from "../features/dialogs/dialog-data";
import {PostProps} from "../features/my-posts/post/Post";



export interface HomePageState {
}

export interface DialogsPageState {
    dialogs: DialogData[];
    className: string;
}
export interface ProfilePageState {
    profile: {}
    posts: PostProps[];
}

export interface RootState {
    homePage: HomePageState;
    profilePage: ProfilePageState;
    dialogsPage: DialogsPageState;
}

