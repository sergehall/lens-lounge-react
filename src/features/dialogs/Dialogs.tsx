import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "./dialogs.styles";
import { DialogData } from "./dialog-data";
import {RoutePaths} from "../../config/nav-links";
import {ClassNames} from "../../config/class-names.enum";

interface DialogsProps {
    dialogs: DialogData[];
    className: ClassNames.DIALOGS;
}

// Helper Component: User List
const UserListComponent: React.FC<{
    dialogs: DialogData[];
    selectedUserId: number | undefined;
    onUserSelect: (id: number) => void;
}> = ({ dialogs, selectedUserId, onUserSelect }) => (
    <UserList>
        {dialogs.map((dialog) => (
            <UserItem
                key={dialog.user.userId}
                onClick={() => onUserSelect(dialog.user.userId)}
                isActive={selectedUserId === dialog.user.userId}
            >
                <Avatar
                    src={dialog.user.avatar || "/default-avatar.png"}
                    alt={`${dialog.user.username}'s avatar`}
                />
                <UserDetails>
                    <UserName>{dialog.user.username}</UserName>
                    <UserStatus isOnline={dialog.user.isOnline}>
                        {dialog.user.isOnline
                            ? "Online"
                            : `${new Date(dialog.user.lastActive).toLocaleString([], {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}`}
                    </UserStatus>
                </UserDetails>
            </UserItem>
        ))}
    </UserList>
);

// Helper Component: Messages Section
const MessagesSectionComponent: React.FC<{
    messages: DialogData["messages"];
}> = ({ messages }) => (
    <MessagesSection>
        {messages.length > 0 ? (
            messages.map((message) => (
                <MessageItem key={message.id} fromMe={message.fromMe}>
                    <MessageTimestamp>
                        {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </MessageTimestamp>
                    <div>{message.message}</div>
                </MessageItem>
            ))
        ) : (
            <NoMessages>No messages available</NoMessages>
        )}
    </MessagesSection>
);

// Main Dialogs Component
const Dialogs: React.FC<DialogsProps> = ({ dialogs, className = "" }) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId?: string }>();

    // Determine the selected user ID
    const selectedUserId = useMemo(
        () => (userId ? parseInt(userId, 10) : dialogs[0].user.userId),
        [userId, dialogs]
    );

    // Redirect to first dialog if no userId
    useEffect(() => {
        if (!userId && dialogs.length > 0) {
            navigate(`${RoutePaths.dialogs}/${dialogs[0].user.userId}`);
        }
    }, [userId, dialogs, navigate]);

    // Find the selected dialog
    const selectedDialog = useMemo(
        () => dialogs.find((dialog) => dialog.user.userId === selectedUserId),
        [dialogs, selectedUserId]
    );

    // Handle user selection
    const handleUserSelect = (id: number) => {
        navigate(`${RoutePaths.dialogs}/${id}`);
    };

    // Handle empty dialogs case
    if (dialogs.length === 0) {
        return (
            <DialogsContainer className={className}>
                <NoMessages>No dialogs available</NoMessages>
            </DialogsContainer>
        );
    }

    return (
        <DialogsContainer className={className}>
            <UserListComponent
                dialogs={dialogs}
                selectedUserId={selectedUserId}
                onUserSelect={handleUserSelect}
            />
            {selectedDialog ? (
                <MessagesSectionComponent messages={selectedDialog.messages} />
            ) : (
                <NoMessages>Select a user to view messages</NoMessages>
            )}
        </DialogsContainer>
    );
};

export default Dialogs;