import { allMessagesMock, Message } from "./mocks/messages-mock";
import { User, users } from "../../users/mocks/usersMock";

export interface ChatsData {
    user: User;
    messages: Message[];
    unreadCount?: number;
}

// Фильтруем сообщения по sender/recipient без fromMe
function getMessagesWithUser(currentUserId: string, otherUserId: string, allMessages: Message[]): Message[] {
    return allMessages.filter(
        (msg) =>
            (msg.senderId === currentUserId && msg.recipientId === otherUserId) ||
            (msg.senderId === otherUserId && msg.recipientId === currentUserId)
    );
}

//  Создаём структуру чатов с пользователями
export const chatsData: ChatsData[] = users.map((user) => ({
    user,
    messages: getMessagesWithUser("0", user.userId, allMessagesMock), // ← current userId = "0"
}));