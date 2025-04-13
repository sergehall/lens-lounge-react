import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatsData} from "./chatsData";
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
                    id: new Date(Date.now()).toISOString(),
                    myId: '1', // Current user ID
                    userId: state.selectedDialog.user.userId, // User ID of the dialog
                    fromMe: true, // Assuming the message is sent by the current user
                    createdAt: new Date().toISOString(), // Message creation timestamp
                    updatedAt: new Date().toISOString(), // Message update timestamp
                    read: false, // Default unread status
                    message: action.payload, // The message text from the action
                    isBanned: false, // Default to not banned
                    banDate: null,
                    banReason: null,
                };

                state.selectedDialog.messages.push(newMessage); // Push the new message
            }
        },
    },
});

export const {setChats, setSelectedDialog, setMessage, sendMessage} = chatsSlice.actions;

export const selectChats = (state: { chats: ChatsState }) => state.chats.chats;
export const selectSelectedDialog = (state: { chats: ChatsState }) => state.chats.selectedDialog;
export const selectMessage = (state: { chats: ChatsState }) => state.chats.message;

export default chatsSlice.reducer;
