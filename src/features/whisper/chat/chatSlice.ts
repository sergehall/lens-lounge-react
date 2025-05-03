import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "./mocks/messages-mock";
import { RootState } from "../../../app/store";
import axios from "axios";

// Types for chat
export interface ChatType {
    id: string;
    type: "private" | "group";
    participants: string[];
    createdAt: string;
    updatedAt: string;
    messages: Message[];
    lastMessage?: Message;
}

// Redux state for chat feature
interface ChatState {
    conversations: ChatType[];                // List of all chat (1-on-1 or group)
    status: "idle" | "loading" | "succeeded" | "failed"; // Status of async loading
    error: string | null;
}


const initialState: ChatState = {
    conversations: [],
    status: "idle",
    error: null,
};

// Thunk to download all chat
export const fetchChats = createAsyncThunk<ChatType[]>(
    "chat/fetchChats",
    async () => {
        const response = await axios.get("/api/chats"); // 🔁 Заменить на свой URL
        return response.data;
    }
);

// slice
const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChatMessages: (
            state,
            action: PayloadAction<{ chatId: string; newMessage: Message }>
        ) => {
            const { chatId, newMessage } = action.payload;
            const chat = state.conversations.find((c) => c.id === chatId);
            if (chat) {
                chat.messages.push(newMessage);
                chat.updatedAt = new Date().toISOString();
                chat.lastMessage = newMessage;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChats.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchChats.fulfilled, (state, action: PayloadAction<ChatType[]>) => {
                state.status = "succeeded";
                state.conversations = action.payload;
            })
            .addCase(fetchChats.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch chat.";
            });
    },
});

// Selectors
export const selectMessagesByChatId = (chatId: string) => (state: RootState): Message[] => {
    const chat = state.whisperPage.chat.conversations.find((chat) => chat.id === chatId);
    return chat ? chat.messages : [];
};
export const selectChats = (state: RootState) => state.whisperPage.chat.conversations;
export const selectChatsStatus = (state: RootState) => state.whisperPage.chat.status;
export const selectChatsError = (state: RootState) => state.whisperPage.chat.error;

export const { updateChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
