import React, { useState } from "react";
import {
    DialogsContainer,
    UserList,
    UserItem,
    Avatar,
    UserDetails,
    UserName,
    UserStatus,
    MessagesSection,
    MessageItem,
    MessageTimestamp,
    NoMessages,
} from "./ dialogs.styles";
import {DialogData} from "./mocks/dialogs-data-mock";

interface DialogsProps {
    dialogs: DialogData[];
    className: string;
}

const Dialogs: React.FC<DialogsProps> = ({ dialogs, className }) => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(
        dialogs[0]?.user.id || null
    );

    const handleUserSelect = (id: number) => {
        setSelectedUserId(id);
    };

    const selectedDialog = dialogs.find((dialog) => dialog.user.id === selectedUserId);

    return (
        <DialogsContainer className={className}>
            {/* User List */}
            <UserList>
                {dialogs.map((dialog) => (
                    <UserItem
                        key={dialog.user.id}
                        onClick={() => handleUserSelect(dialog.user.id)}
                        isActive={selectedUserId === dialog.user.id}
                    >
                        <Avatar
                            src={dialog.user.avatar || "/default-avatar.png"}
                            alt={`${dialog.user.name}'s avatar`}
                        />
                        <UserDetails>
                            <UserName>{dialog.user.name}</UserName>
                            <UserStatus isOnline={dialog.user.isOnline}>
                                {dialog.user.isOnline
                                    ? "Online"
                                    : new Date(dialog.user.lastActive).toLocaleString()}
                            </UserStatus>
                        </UserDetails>
                    </UserItem>
                ))}
            </UserList>

            {/* Messages Section */}
            <MessagesSection>
                {selectedDialog ? (
                    selectedDialog.messages.map((message) => (
                        <MessageItem key={message.id} fromMe={message.fromMe}>
                            <MessageTimestamp>
                                {new Date(message.timestamp).toLocaleTimeString()}
                            </MessageTimestamp>
                            <div>{message.text}</div>
                        </MessageItem>
                    ))
                ) : (
                    <NoMessages>Select a user to view messages</NoMessages>
                )}
            </MessagesSection>
        </DialogsContainer>
    );
};

export default Dialogs;
