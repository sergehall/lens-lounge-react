import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WHISPER_ROUTES } from '../../routes/route-definitions/whisper.routes';
import { ButtonSegment } from './navigationButtons.styles';

const tabs = [
  { label: 'Chats', path: WHISPER_ROUTES.chatsRoot },
  { label: 'Contacts', path: WHISPER_ROUTES.contactsRoot },
];

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <ButtonSegment>
      {tabs.map(({ label, path }) => {
        const isActive = currentPath.startsWith(path);

        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`tab-button ${isActive ? 'active' : ''}`}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="active-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </ButtonSegment>
  );
};

export default NavigationButtons;
