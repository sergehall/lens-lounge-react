import {allMessagesMock, fetchMessagesByUserIds, Message} from "./mocks/messages-mock";
import {User, users} from "./mocks/users-mock";

export interface ChatsData {
    user: User;
    messages: Message[];
    unreadCount?: number;
}

export const chatsData: ChatsData[] = users.map((user) => ({
    user,
    messages: fetchMessagesByUserIds(0, user.userId, allMessagesMock),
}));
