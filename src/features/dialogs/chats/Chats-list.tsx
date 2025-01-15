import React from "react";
import {Avatar, UserDetails, UserItem, UserList, UserName, UserStatus} from "../shared-layout.styles";
import {ChatsData} from "./chats-data";

interface ChatsListProps {
    chats: ChatsData[];
    selectedUserId: number | null;
    onDialogSelect: (userId: number) => void;
}

const ChatsList: React.FC<ChatsListProps> = ({ chats, selectedUserId, onDialogSelect }) => {
    return (
        <UserList>
            {chats.map((chat) => (
                <UserItem
                    key={chat.user.userId}
                    onClick={() => onDialogSelect(chat.user.userId)}
                    isActive={selectedUserId === chat.user.userId}
                >
                    <Avatar
                        src={chat.user.avatar || "/default-avatar.png"}
                        alt={`${chat.user.username}'s avatar`}
                    />
                    <UserDetails>
                        <UserName>{chat.user.username}</UserName>
                        <UserStatus isOnline={chat.user.isOnline}>
                            {chat.user.isOnline ? "Online" : "Offline"}
                        </UserStatus>
                    </UserDetails>
                </UserItem>
            ))}
        </UserList>
    );
};

export default ChatsList;
