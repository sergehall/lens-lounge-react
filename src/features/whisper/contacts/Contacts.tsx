import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactsList from "./ContactsList";
import NavigationButtons from "../Navigation-buttons";
import ContactDetails from "./ContactDetails";
import {
    ChatsOrContactsInfoSection,
    NoContacts,
    UserListWrapper,
    WhisperContainer,
} from "../sharedLayoutForContacts.styles";
import { RouteManager } from "../../../utils/routeManager";
import { selectContacts } from "./contactListSlice";

const Contacts: React.FC = () => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();
    const contacts = useSelector(selectContacts);
    const selectedContact = contacts.find((c) => c.userId === userId) || null;

    const handleContactSelect = (contactId: string) => {
        navigate(RouteManager.getWhisperContactPath(contactId));
    };

    return (
        <WhisperContainer>
            <UserListWrapper>
                <ContactsList
                    contacts={contacts}
                    selectedUserId={selectedContact?.userId || null}
                    onContactSelect={handleContactSelect}
                />
                <NavigationButtons />
            </UserListWrapper>
            <ChatsOrContactsInfoSection>
                {selectedContact ? (
                    <ContactDetails contact={selectedContact} />
                ) : (
                    <NoContacts>Select a contact to view details</NoContacts>
                )}
            </ChatsOrContactsInfoSection>
        </WhisperContainer>
    );
};

export default Contacts;
