import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavigationButtons from '../Navigation-buttons';
import {
  ChatsOrContactsInfoSection,
  NoContacts,
  UserListWrapper,
  WhisperChatContainer,
} from '../sharedLayoutForContacts.styles';
import { selectProfile } from '../../auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import ChasList from './ChasList';
import ChatMessages from './ChatMessages';
import InputSection from './InputSection';
import { Message } from './mocks/messages-mock';
import { ChatType, updateChatMessages } from './chatSlice';

const Chat: React.FC = () => {
  const dispatch = useAppDispatch();
  const { chatId } = useParams<{ chatId: string }>();
  const chats: ChatType[] = useAppSelector((state) => state.whisperPage.chat.conversations);
  const profile = useAppSelector(selectProfile);
  const currentUserId = profile?.userId || '0';
  const [message, setMessage] = useState('');

  const selectedDialog = chats.find((chat) => chat.id === chatId) || null;

  const handleSendMessage = () => {
    if (message.trim() && selectedDialog) {
      const recipientId = selectedDialog.participants.find((id) => id !== currentUserId) || '';

      const newMessage: Message = {
        id: (selectedDialog.messages.length + 1).toString(),
        senderId: currentUserId,
        recipientId,
        chatId: selectedDialog.id,
        message: message,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        read: false,
        isBanned: false,
        banDate: null,
        banReason: null,
      };

      dispatch(updateChatMessages({ chatId: selectedDialog.id, newMessage }));
      setMessage('');
    }
  };

  const handleUploadFile = () => {
    console.log('File upload triggered');
  };

  return (
    <WhisperChatContainer>
      <UserListWrapper>
        <ChasList />
        <NavigationButtons />
      </UserListWrapper>
      <ChatsOrContactsInfoSection>
        {selectedDialog ? (
          <>
            <ChatMessages chatId={selectedDialog.id} />
            <InputSection
              message={message}
              setMessage={setMessage}
              handleSendMessage={handleSendMessage}
              handleUploadFile={handleUploadFile}
            />
          </>
        ) : (
          <NoContacts>Select a chat to view messages</NoContacts>
        )}
      </ChatsOrContactsInfoSection>
    </WhisperChatContainer>
  );
};

export default Chat;
