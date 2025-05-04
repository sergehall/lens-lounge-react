import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Avatar,
  UserDetails,
  UserItem,
  UserList,
  UserName,
  UserStatus,
} from '../sharedLayoutForContacts.styles';
import { selectProfile } from '../../auth/authSlice';
import { User } from '../../users/mocks/usersMock';

import { selectChats } from './chatSlice';

const ChasList: React.FC = () => {
  const navigate = useNavigate();
  const { chatId: selectedChatId } = useParams<{ chatId: string }>();
  const chats = useSelector(selectChats);
  const profile = useSelector(selectProfile);
  const currentUserId = profile?.userId || '0';

  const getRecipientUser = (participants: string[]): User | null => {
    const recipientId = participants.find((id) => id !== currentUserId);
    if (!recipientId) return null;

    return {
      userId: recipientId,
      username: recipientId,
      avatarUrl: '',
      isOnline: false,
    } as User;
  };

  const handleDialogSelect = (chatId: string) => {
    navigate(`/whisper/chats/${chatId}`);
  };

  return (
    <UserList>
      {chats.map((chat) => {
        const user = getRecipientUser(chat.participants);

        // Skip rendering if user is null (i.e. no recipient found)
        if (!user) return null;

        return (
          <UserItem
            key={chat.id}
            onClick={() => handleDialogSelect(chat.id)}
            $isActive={selectedChatId === chat.id}
          >
            <Avatar
              src={user.avatarUrl || '/default-avatar.png'}
              alt={`${user.username}'s avatar`}
              $isActive={selectedChatId === chat.id}
              $large={false}
            />
            <UserDetails>
              <UserName>{user.username}</UserName>
              <UserStatus $isOnline={user.isOnline}>
                {user.isOnline ? 'Online' : 'Offline'}
              </UserStatus>
            </UserDetails>
          </UserItem>
        );
      })}
    </UserList>
  );
};

export default ChasList;
