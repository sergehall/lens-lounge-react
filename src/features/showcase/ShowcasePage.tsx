import React from 'react';

import { useAppSelector } from '../../hooks/reduxHooks';
import { selectIsAuthenticated } from '../auth/authSlice';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import UnauthenticatedLanding from '../../components/unauthenticated-landing/UnauthenticatedLanding';

import Profile from './profile/Profile';
import MyCategories from './categories/MyCategories';
import { BlogsSection, ProfileSection, ShowcaseContainer } from './showcasePage.styles';

const ShowcasePage: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

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
      description="Here you can view and edit your blogs. Please sign in or create an account to get started."
      warning="Only registered users can publish or manage blog content."
      onSignIn={handleSignInClick}
      onCreateAccount={handleCreateAccountClick}
    />
  );
};

export default ShowcasePage;
