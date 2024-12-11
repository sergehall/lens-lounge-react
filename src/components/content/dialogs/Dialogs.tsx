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
import { DialogData } from "./mocks/dialogs-data-mock";

interface DialogsProps {
    dialogs: DialogData[];
    className?: string;
}

const Dialogs: React.FC<DialogsProps> = ({ dialogs, className = "" }) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId?: string }>();

    const selectedUserId = userId ? parseInt(userId, 10) : dialogs[0]?.user.userId;

    useEffect(() => {
        if (!userId && dialogs.length > 0) {
            navigate(`/messages/${dialogs[0].user.userId}`);
        }
    }, [userId, dialogs, navigate]);

    const handleUserSelect = (id: number) => {
        navigate(`/messages/${id}`);
    };

    const selectedDialog = useMemo(
        () => dialogs.find((dialog) => dialog.user.userId === selectedUserId),
        [dialogs, selectedUserId]
    );

    return (
        <DialogsContainer className={className}>
            <UserList>
                {dialogs.map((dialog) => (
                    <UserItem
                        key={dialog.user.userId}
                        onClick={() => handleUserSelect(dialog.user.userId)}
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
                                    : `Last active: ${new Date(dialog.user.lastActive).toLocaleString()}`}
                            </UserStatus>
                        </UserDetails>
                    </UserItem>
                ))}
            </UserList>
            <MessagesSection>
                {selectedDialog ? (
                    selectedDialog.messages.map((message) => (
                        <MessageItem key={message.id} fromMe={message.fromMe}>
                            <MessageTimestamp>
                                {new Date(message.createdAt).toLocaleTimeString()}
                            </MessageTimestamp>
                            <div>{message.message}</div>
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

// import React, { useEffect, useMemo } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//     DialogsContainer,
//     UserList,
//     UserItem,
//     Avatar,
//     UserDetails,
//     UserName,
//     UserStatus,
//     MessagesSection,
//     MessageItem,
//     MessageTimestamp,
//     NoMessages,
// } from "./dialogs.styles";
// import { DialogData } from "./mocks/dialogs-data-mock";
//
// interface DialogsProps {
//     dialogs: DialogData[];
//     className: string;
// }
//
// const Dialogs: React.FC<DialogsProps> = ({ dialogs, className = "" }) => {
//     const navigate = useNavigate();
//     const { userId } = useParams<{ userId?: string }>();
//
//     // Sync selected userId with URL or default to the first user
//     const selectedUserId = userId ? parseInt(userId, 10) : dialogs[0]?.user.userId;
//
//     useEffect(() => {
//         // If userId is not in the URL, redirect to the first user's dialog
//         if (!userId && dialogs.length > 0) {
//             navigate(`/messages/${dialogs[0].user.userId}`);
//         }
//     }, [userId, dialogs, navigate]);
//
//     const handleUserSelect = (id: number) => {
//         navigate(`/messages/${id}`);
//     };
//
//     const selectedDialog = useMemo(
//         () => dialogs.find((dialog) => dialog.user.userId === selectedUserId),
//         [dialogs, selectedUserId]
//     );
//
//     return (
//         <DialogsContainer className={className}>
//             {/* User List */}
//             <UserList>
//                 {dialogs.length > 0 ? (
//                     dialogs.map((dialog) => (
//                         <UserItem
//                             key={dialog.user.userId}
//                             onClick={() => handleUserSelect(dialog.user.userId)}
//                             isActive={selectedUserId === dialog.user.userId}
//                         >
//                             <Avatar
//                                 src={dialog.user.avatar || "/default-avatar.png"}
//                                 alt={`${dialog.user.username}'s avatar`}
//                             />
//                             <UserDetails>
//                                 <UserName>{dialog.user.username}</UserName>
//                                 <UserStatus isOnline={dialog.user.isOnline}>
//                                     {dialog.user.isOnline
//                                         ? "Online"
//                                         : `Last active: ${new Date(
//                                             dialog.user.lastActive
//                                         ).toLocaleString()}`}
//                                 </UserStatus>
//                             </UserDetails>
//                         </UserItem>
//                     ))
//                 ) : (
//                     <NoMessages>No users available</NoMessages>
//                 )}
//             </UserList>
//
//             {/* Messages Section */}
//             <MessagesSection>
//                 {selectedDialog ? (
//                     selectedDialog.messages.map((message) => (
//                         <MessageItem key={message.id} fromMe={message.fromMe}>
//                             <MessageTimestamp>
//                                 {new Date(message.createdAt).toLocaleTimeString([], {
//                                     hour: "2-digit",
//                                     minute: "2-digit",
//                                 })}
//                             </MessageTimestamp>
//                             <div>{message.message}</div>
//                         </MessageItem>
//                     ))
//                 ) : (
//                     <NoMessages>Select a user to view messages</NoMessages>
//                 )}
//             </MessagesSection>
//         </DialogsContainer>
//     );
// };
//
// export default Dialogs;

// import React, { useState, useMemo } from "react";
// import {
//     DialogsContainer,
//     UserList,
//     UserItem,
//     Avatar,
//     UserDetails,
//     UserName,
//     UserStatus,
//     MessagesSection,
//     MessageItem,
//     MessageTimestamp,
//     NoMessages,
// } from "./dialogs.styles";
// import { DialogData } from "./mocks/dialogs-data-mock";
//
// interface DialogsProps {
//     dialogs: DialogData[];
//     className: string;
// }
//
// const Dialogs: React.FC<DialogsProps> = ({ dialogs, className = "" }) => {
//     const [selectedUserId, setSelectedUserId] = useState<number | null>(
//         dialogs.length > 0 ? dialogs[0].user.userId : null
//     );
//
//     const handleUserSelect = (id: number) => setSelectedUserId(id);
//
//     // Memoize the selected dialog to avoid recalculating on each render
//     const selectedDialog = useMemo(
//         () => dialogs.find((dialog) => dialog.user.userId === selectedUserId),
//         [dialogs, selectedUserId]
//     );
//
//     return (
//         <DialogsContainer className={className}>
//             {/* User List */}
//             <UserList>
//                 {dialogs.length > 0 ? (
//                     dialogs.map((dialog) => (
//                         <UserItem
//                             key={dialog.user.userId}
//                             onClick={() => handleUserSelect(dialog.user.userId)}
//                             isActive={selectedUserId === dialog.user.userId}
//                             aria-selected={selectedUserId === dialog.user.userId}
//                         >
//                             <Avatar
//                                 src={dialog.user.avatar || "/default-avatar.png"}
//                                 alt={`${dialog.user.username}'s avatar`}
//                             />
//                             <UserDetails>
//                                 <UserName>{dialog.user.username}</UserName>
//                                 <UserStatus isOnline={dialog.user.isOnline}>
//                                     {dialog.user.isOnline
//                                         ? "Online"
//                                         : `Last active: ${new Date(dialog.user.lastActive).toLocaleString()}`}
//                                 </UserStatus>
//                             </UserDetails>
//                         </UserItem>
//                     ))
//                 ) : (
//                     <NoMessages>No users available</NoMessages>
//                 )}
//             </UserList>
//
//             {/* Messages Section */}
//             <MessagesSection>
//                 {selectedDialog ? (
//                     selectedDialog.messages.map((message) => (
//                         <MessageItem
//                             key={message.id}
//                             fromMe={message.fromMe}
//                             role="listitem"
//                         >
//                             <MessageTimestamp>
//                                 {new Date(message.createdAt).toLocaleTimeString([], {
//                                     hour: "2-digit",
//                                     minute: "2-digit",
//                                 })}
//                             </MessageTimestamp>
//                             <div>{message.message}</div>
//                         </MessageItem>
//                     ))
//                 ) : (
//                     <NoMessages>Select a user to view messages</NoMessages>
//                 )}
//             </MessagesSection>
//         </DialogsContainer>
//     );
// };
//
// export default Dialogs;
//
// // import React, { useState } from "react";
// // import {
// //     DialogsContainer,
// //     UserList,
// //     UserItem,
// //     Avatar,
// //     UserDetails,
// //     UserName,
// //     UserStatus,
// //     MessagesSection,
// //     MessageItem,
// //     MessageTimestamp,
// //     NoMessages,
// // } from "./dialogs.styles";
// // import {DialogData} from "./mocks/dialogs-data-mock";
// //
// // interface DialogsProps {
// //     dialogs: DialogData[];
// //     className: string;
// // }
// //
// // const Dialogs: React.FC<DialogsProps> = ({ dialogs, className }) => {
// //     const [selectedUserId, setSelectedUserId] = useState<number | null>(
// //         dialogs[0].user.userId || null
// //     );
// //
// //     const handleUserSelect = (id: number) => {
// //         setSelectedUserId(id);
// //     };
// //
// //     const selectedDialog = dialogs.find((dialog) => dialog.user.userId === selectedUserId);
// //
// //     return (
// //         <DialogsContainer className={className}>
// //             {/* User List */}
// //             <UserList>
// //                 {dialogs.map((dialog) => (
// //                     <UserItem
// //                         key={dialog.user.userId}
// //                         onClick={() => handleUserSelect(dialog.user.userId)}
// //                         isActive={selectedUserId === dialog.user.userId}
// //                     >
// //                         <Avatar
// //                             src={dialog.user.avatar || "/default-avatar.png"}
// //                             alt={`${dialog.user.username}'s avatar`}
// //                         />
// //                         <UserDetails>
// //                             <UserName>{dialog.user.username}</UserName>
// //                             <UserStatus isOnline={dialog.user.isOnline}>
// //                                 {dialog.user.isOnline
// //                                     ? "Online"
// //                                     : new Date(dialog.user.lastActive).toLocaleString()}
// //                             </UserStatus>
// //                         </UserDetails>
// //                     </UserItem>
// //                 ))}
// //             </UserList>
// //
// //             {/* Messages Section */}
// //             <MessagesSection>
// //                 {selectedDialog ? (
// //                     selectedDialog.messages.map((message) => (
// //                         <MessageItem key={message.id} fromMe={message.fromMe}>
// //                             <MessageTimestamp>
// //                                 {new Date(message.createdAt).toLocaleTimeString()}
// //                             </MessageTimestamp>
// //                             <div>{message.message}</div>
// //                         </MessageItem>
// //                     ))
// //                 ) : (
// //                     <NoMessages>Select a user to view messages</NoMessages>
// //                 )}
// //             </MessagesSection>
// //         </DialogsContainer>
// //     );
// // };
// //
// // export default Dialogs;
