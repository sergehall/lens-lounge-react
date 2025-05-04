import { User, users } from '../../users/mocks/usersMock';

import { allMessagesMock, Message } from './mocks/messages-mock';

export interface ChatData {
  user: User;
  messages: Message[];
  unreadCount?: number;
}

// Filter messages by sender/recipient without fromMe
function getMessagesWithUser(
  currentUserId: string,
  otherUserId: string,
  allMessages: Message[]
): Message[] {
  return allMessages.filter(
    (msg) =>
      (msg.senderId === currentUserId && msg.recipientId === otherUserId) ||
      (msg.senderId === otherUserId && msg.recipientId === currentUserId)
  );
}

//  Create a chat structure with users
export const chatsData: ChatData[] = users.map((user) => ({
  user,
  messages: getMessagesWithUser('0', user.userId, allMessagesMock), // ← current userId = "0"
}));
