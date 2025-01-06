import React from "react";
import {DialogData} from "./dialog-data";
import {Avatar, UserDetails, UserItem, UserList, UserName, UserStatus} from "../shared-layout.styles";

interface DialogListProps {
    dialogs: DialogData[];
    selectedUserId: number | null; // Properly typed
    onDialogSelect: (userId: number) => void;
}

const DialogList: React.FC<DialogListProps> = ({ dialogs, selectedUserId, onDialogSelect }) => {
    return (
        <UserList>
            {dialogs.map((dialog) => (
                <UserItem
                    key={dialog.user.userId}
                    onClick={() => onDialogSelect(dialog.user.userId)}
                    isActive={selectedUserId === dialog.user.userId}
                >
                    <Avatar
                        src={dialog.user.avatar || "/default-avatar.png"}
                        alt={`${dialog.user.username}'s avatar`}
                    />
                    <UserDetails>
                        <UserName>{dialog.user.username}</UserName>
                        <UserStatus isOnline={dialog.user.isOnline}>
                            {dialog.user.isOnline ? "Online" : "Offline"}
                        </UserStatus>
                    </UserDetails>
                </UserItem>
            ))}
        </UserList>
    );
};

export default DialogList;
