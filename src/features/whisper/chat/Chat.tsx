import React from 'react';

import NavigationButtons from '../Navigation-buttons';
import * as S from '../sharedLayoutForContacts.styles';

import ChasList from './ChatList';
import ChatMessages from './ChatMessages';
import { useChatLogic } from './hooks/useChatLogic';
import InputSection from './InputSection';

const Chat: React.FC = () => {
  const { message, setMessage, selectedDialog, handleSendMessage, handleUploadFile } =
    useChatLogic();

  return (
    <S.WhisperChatContainer>
      <S.UserListWrapper>
        <ChasList />
        <NavigationButtons />
      </S.UserListWrapper>
      <S.ChatsOrContactsInfoSection>
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
          <S.NoContacts>Select a chat to view messages</S.NoContacts>
        )}
      </S.ChatsOrContactsInfoSection>
    </S.WhisperChatContainer>
  );
};

export default Chat;
