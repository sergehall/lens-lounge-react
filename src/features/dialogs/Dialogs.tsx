import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ChatSection} from "./dialogs.styles";
import DialogList from "./Dialog-list";
import DialogMessages from "./Dialog-messages";
import {DialogData} from "./dialog-data";
import {DialogsContainer, InputSection, NoContacts, UserListWrapper} from "./shared-layout.styles";
import NavigationButtons from "./Navigation-buttons";

interface DialogsProps {
    dialogs: DialogData[];
}

const Dialogs: React.FC<DialogsProps> = ({dialogs}) => {
    const navigate = useNavigate();
    const {userId} = useParams<{ userId?: string }>();
    const [selectedDialog, setSelectedDialog] = useState<DialogData | null>(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (userId) {
            const dialog = dialogs.find((d) => d.user.userId === Number(userId));
            setSelectedDialog(dialog || null);
        }
    }, [userId, dialogs]);

    const handleDialogSelect = (id: number) => {
        navigate(`/dialogs/chats/${id}`);
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
        <DialogsContainer>
            <UserListWrapper>
                <DialogList
                    dialogs={dialogs}
                    selectedUserId={selectedDialog?.user.userId || null}
                    onDialogSelect={handleDialogSelect}
                />
                <NavigationButtons/>
            </UserListWrapper>
            <ChatSection>
                {selectedDialog ? (
                    <>
                        <DialogMessages messages={selectedDialog.messages}/>
                        <InputSection>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message"
                            />
                            <button onClick={handleSendMessage}>Send</button>
                            <button onClick={handleUploadFile}>📁</button>
                        </InputSection>
                    </>
                ) : (
                    <NoContacts>Select a chat to view messages</NoContacts>
                )}
            </ChatSection>
        </DialogsContainer>
    );
};

export default Dialogs;
