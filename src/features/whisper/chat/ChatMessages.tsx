import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectProfile } from '../../auth/authSlice';

import { MessageItem, MessagesContainer } from './chat.styles';
import { Message } from './mocks/messages-mock';
import { selectMessagesByChatId } from './chatSlice';

interface ChatMessagesProps {
  chatId: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chatId }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const messages: Message[] = useAppSelector(selectMessagesByChatId(chatId));
  const profile = useAppSelector(selectProfile);
  const currentUserId: string = profile?.userId || '0'; // Safe fallback

  useEffect(() => {
    const container = messagesContainerRef.current;
    const scrollTarget = messagesEndRef.current;

    if (container && scrollTarget) {
      const isNearBottom =
        container.scrollHeight - container.clientHeight <= container.scrollTop + 50;

      if (isNearBottom) {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [messages]);

  if (messages.length === 0) {
    return <p>No messages to display</p>;
  }

  return (
    <MessagesContainer ref={messagesContainerRef}>
      {messages.map((message: Message) => (
        <MessageItem key={message.id} $isMine={message.senderId === currentUserId}>
          <div className="timestamp">
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className="message">{message.message}</div>
        </MessageItem>
      ))}
      <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};

export default ChatMessages;
