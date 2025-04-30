import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatsList from "./ChatsList";
import ChatMessages from "./ChatMessages";
import NavigationButtons from "../Navigation-buttons";
import { AppDispatch, RootState } from "../../../app/store";
import {
    ChatsOrContactsInfoSection,
    NoContacts,
    UserListWrapper,
    WhisperContainer,
} from "../sharedLayoutForContacts.styles";
import InputSection from "./InputSection";
import { Message } from "./mocks/messages-mock";
import { Chat, updateChatMessages } from "./chatsSlice";
import { selectProfile } from "../../auth/authSlice";

const Chats: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { chatId } = useParams<{ chatId: string }>();
    const chats: Chat[] = useSelector((state: RootState) => state.chat.conversations);
    const profile = useSelector(selectProfile);
    const currentUserId = profile?.userId || "0";
    const [message, setMessage] = useState("");

    const selectedDialog = chats.find((chat) => chat.id === chatId) || null;

    const handleSendMessage = () => {
        if (message.trim() && selectedDialog) {
            const recipientId = selectedDialog.participants.find((id) => id !== currentUserId) || "";

            const newMessage: Message = {
                id: (selectedDialog.messages.length + 1).toString(),
                senderId: currentUserId,
                recipientId,
                chatId: selectedDialog.id,
                message: message,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                read: false,
                isBanned: false,
                banDate: null,
                banReason: null,
            };

            dispatch(updateChatMessages({ chatId: selectedDialog.id, newMessage }));
            setMessage("");
        }
    };

    const handleUploadFile = () => {
        console.log("File upload triggered");
    };

    return (
        <WhisperContainer>
            <UserListWrapper>
                <ChatsList />
                <NavigationButtons />
            </UserListWrapper>
            <ChatsOrContactsInfoSection>
                {selectedDialog ? (
                    <>
                        <ChatMessages chatId={selectedDialog.id} />
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

