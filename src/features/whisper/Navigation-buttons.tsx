import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { WHISPER_ROUTES } from '../../routes/route-definitions/whisper.routes';

import { ButtonSegment } from './navigationButtons.styles';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const chatsPath = WHISPER_ROUTES.chatsRoot;
  const contactsPath = WHISPER_ROUTES.contactsRoot;

  const isChatsActive = location.pathname.startsWith(chatsPath);
  const isContactsActive = location.pathname.startsWith(contactsPath);

  return (
    <ButtonSegment>
      <button onClick={() => navigate(chatsPath)} className={isChatsActive ? 'active' : ''}>
        Chats
      </button>
      <button onClick={() => navigate(contactsPath)} className={isContactsActive ? 'active' : ''}>
        Contacts
      </button>
    </ButtonSegment>
  );
};

export default NavigationButtons;
