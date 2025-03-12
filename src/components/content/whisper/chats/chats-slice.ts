import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ChatsData} from "./chats-data";
import {Message} from "./mocks/messages-mock";

interface ChatsState {
    chats: ChatsData[];
    selectedDialog: ChatsData | null;
    message: string;
}

const initialState: ChatsState = {
    chats: [],
    selectedDialog: null,
    message: "",
};

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setChats(state, action: PayloadAction<ChatsData[]>) {
            state.chats = action.payload;
        },
        setSelectedDialog(state, action: PayloadAction<ChatsData | null>) {
            state.selectedDialog = action.payload;
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        sendMessage(state, action: PayloadAction<string>) {
            if (state.selectedDialog) {
                const newMessage: Message = {
                    id: Date.now(), // Unique ID for the message
                    myId: 1, // Current user ID
                    userId: state.selectedDialog.user.userId, // User ID of the dialog
                    fromMe: true, // Assuming the message is sent by the current user
                    createdAt: new Date(), // Message creation timestamp
                    updatedAt: new Date(), // Message update timestamp
                    read: false, // Default unread status
                    message: action.payload, // The message text from the action
                    isBanned: false, // Default to not banned
                    banDate: null, // No ban date
                    banReason: null, // No ban reason
                };

                state.selectedDialog.messages.push(newMessage); // Push the new message
            }
        },
    },
});

export const { setChats, setSelectedDialog, setMessage, sendMessage } = chatsSlice.actions;

export const selectChats = (state: { chats: ChatsState }) => state.chats.chats;
export const selectSelectedDialog = (state: { chats: ChatsState }) => state.chats.selectedDialog;
export const selectMessage = (state: { chats: ChatsState }) => state.chats.message;

export default chatsSlice.reducer;
