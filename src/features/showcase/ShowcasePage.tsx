import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../auth/authSlice';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import UnauthenticatedLanding from '../../components/unauthenticated-landing/UnauthenticatedLanding';

import Profile from './profile/Profile';
import MyCategories from './categories/MyCategories';
import { BlogsSection, ProfileSection, ShowcaseContainer } from './showcasePage.styles';

const ShowcasePage: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const { handleSignInClick, handleCreateAccountClick } = useAuthNavigation();

  if (isAuthenticated) {
    return (
      <ShowcaseContainer>
        <ProfileSection>
          <Profile />
        </ProfileSection>
        <BlogsSection>
          <MyCategories />
        </BlogsSection>
      </ShowcaseContainer>
    );
  }

  return (
    <UnauthenticatedLanding
      title="Welcome to Showcase"
      description="Please sign in or create an account to start chatting with the community."
      onSignIn={handleSignInClick}
      onCreateAccount={handleCreateAccountClick}
    />
  );
};

export default ShowcasePage;
