// src/features/whisper/contacts/ContactDetails.tsx

import React from 'react';
import * as S from './contacts.styles';

import { NoContacts } from '../sharedLayoutForContacts.styles';
import { ContactsData } from './contactsData';
import { AvatarSize } from './enums/avatarSize.enum';
import { formatAddress } from './formatAddress';

interface ContactDetailsProps {
  contact: ContactsData | null;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
  if (!contact) return <NoContacts>No Contacts to view details</NoContacts>;

  return (
    <S.InfoSection>
      <S.Header>
        <S.UserInfoHeader>
          <S.UserName>{contact.username}</S.UserName>
          <S.UserStatus $isOnline={contact.isOnline}>
            {contact.isOnline ? 'Online' : 'Offline'}
          </S.UserStatus>
        </S.UserInfoHeader>
        <S.Avatar
          src={contact.avatar || '/default-avatar.png'}
          alt="avatar"
          $isActive={contact.isOnline}
          $size={AvatarSize.XL}
        />
      </S.Header>

      <S.UserInfoDetails>
        <S.DetailRow>
          <S.DetailLabel>First Name</S.DetailLabel>
          <S.DetailValue>{contact.firstName}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Last Name</S.DetailLabel>
          <S.DetailValue>{contact.lastName}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Email</S.DetailLabel>
          <S.DetailValue>{contact.email}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Phone</S.DetailLabel>
          <S.DetailValue>{contact.phoneNumber.nationalNumber}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>Address</S.DetailLabel>
          <S.DetailValue>{formatAddress(contact.addresses)}</S.DetailValue>
        </S.DetailRow>
        <S.DetailRow>
          <S.DetailLabel>About</S.DetailLabel>
          <S.DetailValue>{contact.about}</S.DetailValue>
        </S.DetailRow>
      </S.UserInfoDetails>
    </S.InfoSection>
  );
};

export default ContactDetails;
