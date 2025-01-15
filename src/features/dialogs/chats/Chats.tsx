import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatsList from "./Chats-list";
import ChatMessages from "./Chat-messages";
import {ChatsOrContactsInfoSection, WhisperContainer, NoContacts, UserListWrapper} from "../shared-layout.styles";
import NavigationButtons from "../Navigation-buttons";
import InputSection from "./ Input-section";
import {ChatsData} from "./chats-data";
import {RouteManager} from "../../../utils/routeManager";


interface ChatsProps {
    chats: ChatsData[];
}

const Chats: React.FC<ChatsProps> = ({ chats }) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();
    const [selectedDialog, setSelectedDialog] = useState<ChatsData | null>(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (userId) {
            const chat = chats.find((d) => d.user.userId === Number(userId));
            setSelectedDialog(chat || null);
        }
    }, [userId, chats]);

    const handleDialogSelect = (userId: number) => {
        navigate(`${RouteManager.getSidebarPaths().whisper}/${RouteManager.getNestedPaths().chats}/${userId}`);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("Message sent:", message);
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
