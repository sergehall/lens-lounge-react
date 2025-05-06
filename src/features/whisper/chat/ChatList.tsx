import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { User } from '../../users/types/userType';
import { selectAllUsers } from '../../users/userSlice';
import { selectProfile } from '../../auth/authSlice';
import { selectChats } from './chatSlice';

import * as S from '../sharedLayoutForContacts.styles';

const ChatList: React.FC = () => {
  const navigate = useNavigate();
  const { chatId: selectedChatId } = useParams<{ chatId: string }>();

  const chats = useAppSelector(selectChats);
  const users = useAppSelector(selectAllUsers);
  const profile = useAppSelector(selectProfile);
  const currentUserId = profile?.userId || '0';

  // 🔍 Получаем собеседника из участников чата
  const getRecipientUser = (participants: string[]): User | null => {
    const recipientId = participants.find((id) => id !== currentUserId);
    if (!recipientId) return null;

    return users.find((user) => user.userId === recipientId) || null;
  };

  const handleDialogSelect = (chatId: string) => {
    navigate(`/whisper/chats/${chatId}`);
  };

  return (
    <S.UserList>
      {chats.map((chat) => {
        const user = getRecipientUser(chat.participants);

        if (!user) return null;

        return (
          <S.UserItem
            key={chat.id}
            onClick={() => handleDialogSelect(chat.id)}
            $isActive={selectedChatId === chat.id}
          >
            <S.Avatar
              src={user.avatarUrl || '/default-avatar.png'}
              alt={`${user.username}'s avatar`}
              $isActive={selectedChatId === chat.id}
              $large={false}
            />
            <S.UserDetails>
              <S.UserName>{user.username}</S.UserName>
              <S.UserStatus $isOnline={user.isOnline}>
                {user.isOnline ? 'Online' : 'Offline'}
              </S.UserStatus>
            </S.UserDetails>
          </S.UserItem>
        );
      })}
    </S.UserList>
  );
};

export default ChatList;
