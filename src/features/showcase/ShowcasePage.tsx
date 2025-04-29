// src/features/showcase/ShowcasePage.tsx
import React from "react";
import { useSelector} from "react-redux";
import Profile from "./profile/Profile";
import {
    BlogsSection,
    ProfileSection,
    ShowcaseContainer,
    PlaceholderProfileContainer,
    ActionButtonsWrapper,
    ActionButton,
    Divider,
    DividerText,
} from "./showcasePage.styles";
import {selectIsAuthenticated} from "../auth/authSlice";
import MyCategories from "./categories/MyCategories";


const ShowcasePage: React.FC = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);


    const handleSignInClick = () => {
        console.log("Navigating to Sign In...");
    };

    const handleCreateAccountClick = () => {
        console.log("Navigating to Create Account...");
    };

    return (
        <ShowcaseContainer>
            <ProfileSection>
                {isAuthenticated ? (
                    <Profile />
                ) : (
                    <PlaceholderProfileContainer>
                        <h2>No Profile Found</h2>
                        <p>
                            Please register or sign in to complete your profile and join the
                            community!
                        </p>
                        <Divider />
                        <ActionButtonsWrapper>
                            <ActionButton onClick={handleSignInClick}>SIGN IN</ActionButton>
                            <DividerText>
                                <span>or</span>
                            </DividerText>
                            <ActionButton onClick={handleCreateAccountClick}>
                                CREATE ACCOUNT
                            </ActionButton>
                        </ActionButtonsWrapper>
                    </PlaceholderProfileContainer>
                )}
            </ProfileSection>

            {/* Only show blog section if user is authenticated */}
            {isAuthenticated && (
                <BlogsSection>
                    <MyCategories />
                </BlogsSection>
            )}
        </ShowcaseContainer>
    );
};

export default ShowcasePage;