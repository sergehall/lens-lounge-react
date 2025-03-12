import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatsList from "./Chats-list";
import ChatMessages from "./Chat-messages";
import {
    ChatsOrContactsInfoSection,
    WhisperContainer,
    NoContacts,
    UserListWrapper,
} from "../shared-layout.styles";
import NavigationButtons from "../Navigation-buttons";
import { RouteManager } from "../../../../utils/routeManager";
import {AppDispatch, RootState, updateChatMessages} from "../../../../app/store";
import InputSection from "./ Input-section";

const Chats: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();
    const chats = useSelector((state: RootState) => state.content.whisperPage.chatConversations);
    const [message, setMessage] = useState("");

    // Find the selected chat from Redux state
    const selectedDialog = chats.find((chat) => chat.user.userId === Number(userId)) || null;

    const handleDialogSelect = (userId: number) => {
        const path = `${RouteManager.getSidebarPaths().whisper}/${RouteManager.getNestedPaths().chats}/${userId}`;
        navigate(path);
    };

    const handleSendMessage = () => {
        if (message.trim() && selectedDialog) {
            const newMessage = {
                id: selectedDialog.messages.length + 1,
                myId: 100, // Dummy sender ID
                userId: selectedDialog.user.userId,
                fromMe: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                read: false,
                message: message,
                isBanned: false,
                banDate: null,
                banReason: null,
            };

            // Dispatch Redux action to update chat messages
            dispatch(updateChatMessages({ userId: selectedDialog.user.userId, newMessage }));

            // Clear input field
            setMessage("");
        }
    };

    const handleUploadFile = () => {
        console.log("File upload triggered");
    };

    return (
        <WhisperContainer>
            <UserListWrapper>
                <ChatsList
                    chats={chats}
                    selectedUserId={selectedDialog?.user.userId || null}
                    onDialogSelect={handleDialogSelect}
                />
                <NavigationButtons />
            </UserListWrapper>
            <ChatsOrContactsInfoSection>
                {selectedDialog ? (
                    <>
                        <ChatMessages messages={selectedDialog.messages} />
                        <InputSection
                            message={message}
                            setMessage={setMessage}
                            handleSendMessage={handleSendMessage}
                            handleUploadFile={handleUploadFile}
                        />
                    </>
                ) : (
                    <NoContacts>Select a chat to view messages</NoContacts>
                )}
            </ChatsOrContactsInfoSection>
        </WhisperContainer>
    );
};

export default Chats;
