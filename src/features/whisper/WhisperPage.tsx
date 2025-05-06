import React from 'react';

import { useAppSelector } from '../../hooks/reduxHooks';
import { selectIsAuthenticated } from '../auth/authSlice';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import UnauthenticatedLanding from '../../components/unauthenticated-landing/UnauthenticatedLanding';

import Chat from './chat/Chat';

const WhisperPage: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const { handleSignInClick, handleCreateAccountClick } = useAuthNavigation();

  if (isAuthenticated) {
    return <Chat />;
  }

  return (
    <UnauthenticatedLanding
      title="Welcome to Whisper"
      description="Please sign in or create an account to start chatting with the community."
      warning="Only registered users can join and participate in real-time conversations."
      onSignIn={handleSignInClick}
      onCreateAccount={handleCreateAccountClick}
    />
  );
};

export default WhisperPage;
