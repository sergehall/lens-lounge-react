import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/reduxHooks';
import NavigationButtons from '../Navigation-buttons';
import {
  ChatsOrContactsInfoSection,
  NoContacts,
  UserListWrapper,
  WhisperChatContainer,
} from '../sharedLayoutForContacts.styles';
import { RouteManager } from '../../../utils/routeManager';

import ContactDetails from './ContactDetails';
import ContactsList from './ContactsList';
import { selectContacts } from './contactListSlice';

const Contacts: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const contacts = useAppSelector(selectContacts);
  const selectedContact = contacts.find((c) => c.userId === userId) || null;

  const handleContactSelect = (contactId: string) => {
    navigate(RouteManager.getWhisperContactPath(contactId));
  };

  return (
    <WhisperChatContainer>
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
    </WhisperChatContainer>
  );
};

export default Contacts;
