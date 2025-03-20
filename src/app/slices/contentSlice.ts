import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postsDataMock } from "../../components/content/showcase/my-posts/mocks/postsDataMock";
import { PostProps } from "../../components/content/showcase/my-posts/post/Post";
import { contactData, ContactsData } from "../../components/content/whisper/contacts/contactsData";
import { NewArticles, newArticlesMock } from "../../components/content/news/newsArticlesMock";
import { chatsData } from "../../components/content/whisper/chats/chatsData";
import { User } from "../../components/content/users/mocks/usersMock";
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

export const { updateChatMessages } = contentSlice.actions;
export default contentSlice.reducer;
