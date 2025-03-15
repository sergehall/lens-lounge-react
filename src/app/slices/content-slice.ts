import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postsDataMock } from "../../components/content/my-posts/mocks/posts-data-mock";
import { PostProps } from "../../components/content/my-posts/post/Post";
import { contactData, ContactsData } from "../../components/content/whisper/contacts/contacts-data";
import { NewArticles, newArticlesMock } from "../../components/content/news/news-articles-mock";
import { chatsData } from "../../components/content/whisper/chats/chats-data";
import { User } from "../../components/content/users/mocks/users-mock";
import { Message } from "../../components/content/whisper/chats/mocks/messages-mock";

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
                chat.messages.push(newMessage);
            }
        },
    },
});

export default contentSlice;
