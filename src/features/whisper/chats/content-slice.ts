import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {postsDataMock} from "../../my-posts/mocks/posts-data-mock";
import {PostProps} from "../../my-posts/post/Post";
import {contactData, ContactsData} from "../contacts/contacts-data";
import {NewArticles, newArticlesMock} from "../../news/news-articles-mock";
import {chatsData} from "./chats-data";
import {User} from "./mocks/users-mock";
import {Message} from "./mocks/messages-mock";

interface Chat {
    user: User;
    messages: Message[];
}

interface WhisperPageState {
    chatConversations: Chat[];
    relatedPosts: PostProps[];
    contactList: ContactsData[];
}

interface ContentState {
    whisperPage: WhisperPageState;
    newsPage: { articles: NewArticles[] };
}

const initialState: ContentState = {
    whisperPage: {
        chatConversations: chatsData,
        relatedPosts: postsDataMock,
        contactList: contactData,
    },
    newsPage: { articles: newArticlesMock },
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        updateChatMessages: (state, action: PayloadAction<{ userId: number; newMessage: Message }>) => {
            const { userId, newMessage } = action.payload;
            const chat = state.whisperPage.chatConversations.find((c) => c.user.userId === userId);
            if (chat) {
                chat.messages = [...chat.messages, newMessage]; // Ensure immutability
            }
        },
    },
});


export default contentSlice;
