import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ContactsData} from "./contacts-data";
import ContactsList from "./Contacts-list";
import NavigationButtons from "../Navigation-buttons";
import ContactDetails from "./Contact-details";
import {ChatsOrContactsInfoSection, DialogsContainer, NoContacts, UserListWrapper} from "../shared-layout.styles";


interface ContactsProps {
    contacts: ContactsData[];
}

const Contacts: React.FC<ContactsProps> = ({contacts}) => {
    const navigate = useNavigate();
    const {userId} = useParams<{ userId?: string }>();
    const [selectedContact, setSelectedContact] = useState<ContactsData | null>(null);

    useEffect(() => {
        if (userId) {
            const contact = contacts.find((c) => c.userId === Number(userId));
            setSelectedContact(contact || null);
        }
    }, [userId, contacts]);

    const handleContactSelect = (id: number) => {
        navigate(`/dialogs/contacts/${id}`);
    };

    return (
        <DialogsContainer>
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
        </DialogsContainer>
    );
};

export default Contacts;
