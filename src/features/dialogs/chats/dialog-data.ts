import {allMessagesMock, fetchMessagesByUserIds, Message} from "./mocks/messages-mock";
import {User, users} from "./mocks/users-mock";

export interface DialogData {
    user: User;
    messages: Message[];
    unreadCount?: number;
}

export const dialogData: DialogData[] = users.map((user) => ({
    user,
    messages: fetchMessagesByUserIds(0, user.userId, allMessagesMock),
}));
