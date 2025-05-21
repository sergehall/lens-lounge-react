import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { RouteManager } from '../../routes/utils/routeManager';

import { ButtonSegment } from './navigationButtons.styles';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // const chat = RouteManager.getSidebarPaths().whisper + '/' + RouteManager.getNestedPaths().chat
  // const contacts = RouteManager.getSidebarPaths().whisper + '/' + RouteManager.getNestedPaths().contacts

  const chats = RouteManager.getWhisperChatsRoot();
  const contacts = RouteManager.getWhisperContactsRoot();

  const isChatsActive = location.pathname.startsWith(chats);
  const isContactsActive = location.pathname.startsWith(contacts);

  return (
    <ButtonSegment>
      <button onClick={() => navigate(chats)} className={isChatsActive ? 'active' : ''}>
        Chats
      </button>
      <button onClick={() => navigate(contacts)} className={isContactsActive ? 'active' : ''}>
        Contacts
      </button>
    </ButtonSegment>
  );
};

export default NavigationButtons;
