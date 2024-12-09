import React, { useState } from "react";
import styles from "./dialogs.module.css";
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
        <div className={`${styles.dialogsContainer} ${className}`}>
            <div className={styles.userList}>
                {dialogs.map((dialog) => (
                    <div
                        key={dialog.user.id}
                        className={`${styles.userItem} ${
                            selectedUserId === dialog.user.id ? styles.activeUser : ""
                        }`}
                        onClick={() => handleUserSelect(dialog.user.id)}
                    >
                        <img
                            src={dialog.user.avatar || "/default-avatar.png"}
                            alt={`${dialog.user.name}'s avatar`}
                            className={styles.avatar}
                        />
                        <div className={styles.userDetails}>
                            <span className={styles.userName}>{dialog.user.name}</span>
                            {dialog.user.isOnline ? (
                                <span className={`${styles.userStatus} ${styles.online}`}>
                                    Online
                                </span>
                            ) : (
                                <span className={styles.lastActive}>
                                    Last active:{" "}
                                    {dialog.user.lastActive
                                        ? new Date(dialog.user.lastActive).toLocaleString()
                                        : "Unknown"}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.messagesSection}>
                {selectedDialog ? (
                    selectedDialog.messages.map((message) => (
                        <div
                            key={message.id}
                            className={`${styles.messageItem} ${
                                message.fromMe ? styles.fromMe : styles.fromUser
                            }`}
                        >
                            <div className={styles.messageTimestamp}>
                                {new Date(message.timestamp).toLocaleTimeString()}
                            </div>
                            <div>{message.text}</div>
                        </div>
                    ))
                ) : (
                    <div className={styles.noMessages}>Select a user to view messages</div>
                )}
            </div>
        </div>
    );
};

export default Dialogs;
