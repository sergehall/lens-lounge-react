import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {postsDataMock} from "../../features/my-posts/mocks/posts-data-mock";
import {PostProps} from "../../features/my-posts/post/Post";
import {contactData, ContactsData} from "../../features/whisper/contacts/contacts-data";
import {NewArticles, newArticlesMock} from "../../features/news/news-articles-mock";
import {chatsData} from "../../features/whisper/chats/chats-data";
import {User} from "../../features/whisper/chats/mocks/users-mock";
import {Message} from "../../features/whisper/chats/mocks/messages-mock";

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
