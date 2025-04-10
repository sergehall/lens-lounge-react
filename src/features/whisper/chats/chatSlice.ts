// features/whisper/chats/chatSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chatsData } from "./chatsData";
import { User } from "../../users/mocks/usersMock";
import { Message } from "./mocks/messages-mock";
import { RootState } from "../../../app/store";


export interface Chat {
    user: User;
    messages: Message[];
}

interface ChatState {
    conversations: Chat[];
}

// Initial State
const initialState: ChatState = {
    conversations: chatsData,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChatMessages: (
            state,
            action: PayloadAction<{ userId: number; newMessage: Message }>
        ) => {
            const { userId, newMessage } = action.payload;
            const chat = state.conversations.find((c) => c.user.userId === userId);
            if (chat) {
                chat.messages.push(newMessage);
            }
        },
    },
});

// Selectors
export const selectChats = (state: RootState) => state.chat.conversations;

export const selectMessagesByUser = (userId: number) => (state: RootState): Message[] => {
    return (
        state.chat.conversations.find((chat) => chat.user.userId === userId)?.messages || []
    );
};

export const { updateChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
