import {allMessages, fetchMessagesByUserIds, Message} from "./messages-mock";
import {User, users} from "./users-mock";

export interface DialogData {
    user: User;
    messages: Message[];
    unreadCount?: number;
}

export const dialogsDataMock: DialogData[] = users.map((user) => ({
    user,
    messages: fetchMessagesByUserIds(0, user.userId, allMessages), // Fetch messages for the current dialog
}));
