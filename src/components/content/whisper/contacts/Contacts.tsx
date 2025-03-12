import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ContactsData} from "./contacts-data";
import ContactsList from "./Contacts-list";
import NavigationButtons from "../Navigation-buttons";
import ContactDetails from "./Contact-details";
import {ChatsOrContactsInfoSection, NoContacts, UserListWrapper, WhisperContainer} from "../shared-layout.styles";
import {RouteManager} from "../../../../utils/routeManager";


interface ContactsProps {
    contacts: ContactsData[];
}

const Contacts: React.FC<ContactsProps> = ({contacts}) => {
    const navigate = useNavigate();
    const {userId} = useParams<{ userId: string }>();
    const [selectedContact, setSelectedContact] = useState<ContactsData | null>(null);

    useEffect(() => {
        if (userId) {
            const contact = contacts.find((c) => c.userId === Number(userId));
            setSelectedContact(contact || null);
        }
    }, [userId, contacts]);

    const handleContactSelect = (userId: number) => {
        const path = `${RouteManager.getSidebarPaths().whisper}/${RouteManager.getNestedPaths().contacts}/${userId}`;
        navigate(path);
    };

    return (
        <WhisperContainer>
            <UserListWrapper>
                <ContactsList
                    contacts={contacts}
                    selectedUserId={selectedContact?.userId || null}
                    onContactSelect={handleContactSelect}
                />
                <NavigationButtons/>
            </UserListWrapper>
            <ChatsOrContactsInfoSection>
                {selectedContact ? (
                    <ContactDetails contact={selectedContact}/>
                ) : (
                    <NoContacts>Select a contact to view details</NoContacts>
                )}
            </ChatsOrContactsInfoSection>
        </WhisperContainer>
    );
};

export default Contacts;
