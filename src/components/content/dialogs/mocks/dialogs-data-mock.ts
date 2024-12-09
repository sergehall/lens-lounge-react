import {allMessages, fetchMessagesByUserIds, Message} from "./messages-mock";
import {User, users} from "./users-mock";

export interface DialogData {
    user: User; // Information about the other user in the dialog
    messages: Message[]; // Array of messages exchanged
    unreadCount?: number; // Optional: count of unread messages
}

export const dialogsDataMock: DialogData[] = users.map((user) => ({
    user,
    messages: fetchMessagesByUserIds(0, user.id, allMessages), // Fetch messages for the current dialog
}));


