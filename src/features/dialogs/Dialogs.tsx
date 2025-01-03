import React, { useEffect } from "react";
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
import { RoutePaths } from "../../config/nav-links";
import { ClassNames } from "../../config/class-names.enum";

interface DialogsProps {
    dialogs: DialogData[];
    className: ClassNames.DIALOGS;
}

const Dialogs: React.FC<DialogsProps> = ({ dialogs, className }) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId?: string }>();

    const selectedUserId = userId ? parseInt(userId, 10) : dialogs[0]?.user.userId;

    useEffect(() => {
        if (!userId && dialogs.length > 0) {
            navigate(`${RoutePaths.dialogsChats}/${dialogs[0]?.user.userId}`);
        }
    }, [userId, dialogs, navigate]);

    const selectedDialog = dialogs.find(dialog => dialog.user.userId === selectedUserId);

    const handleUserSelect = (id: number) => {
        if (!id) return;
        navigate(`${RoutePaths.dialogsChats}/${id}`);
    };

    if (!dialogs.length) {
        return (
            <DialogsContainer className={className}>
                <NoMessages>No dialogs available</NoMessages>
            </DialogsContainer>
        );
    }

    return (
        <DialogsContainer className={className}>
            <UserList>
                {dialogs.map(dialog => (
                    <UserItem
                        key={dialog.user.userId}
                        onClick={() => handleUserSelect(dialog.user.userId)}
                        isActive={selectedUserId === dialog.user.userId}
                    >
                        <Avatar src={dialog.user.avatar || "/default-avatar.png"} alt={`${dialog.user.username}'s avatar`} />
                        <UserDetails>
                            <UserName>{dialog.user.username}</UserName>
                            <UserStatus isOnline={dialog.user.isOnline}>
                                {dialog.user.isOnline
                                    ? "Online"
                                    : `${new Date(dialog.user.lastActive).toLocaleString([], {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}`}
                            </UserStatus>
                        </UserDetails>
                    </UserItem>
                ))}
            </UserList>
            {selectedDialog ? (
                <MessagesSection>
                    {selectedDialog.messages.length ? (
                        selectedDialog.messages.map(message => (
                            <MessageItem key={message.id} fromMe={message.fromMe}>
                                <MessageTimestamp>
                                    {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </MessageTimestamp>
                                <div>{message.message}</div>
                            </MessageItem>
                        ))
                    ) : (
                        <NoMessages>No messages available</NoMessages>
                    )}
                </MessagesSection>
            ) : (
                <NoMessages>Select a user to view messages</NoMessages>
            )}
        </DialogsContainer>
    );
};

export default Dialogs;