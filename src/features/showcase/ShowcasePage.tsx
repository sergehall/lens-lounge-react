// src/features/showcase/ShowcasePage.tsx
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
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

            {/* ✅ Only show blog section if user is authenticated */}
            {isAuthenticated && (
                <BlogsSection>
                    <MyCategories />
                </BlogsSection>
            )}
        </ShowcaseContainer>
    );
};

export default ShowcasePage;






// // src/features/showcase/ShowcasePage.tsx
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Profile from "./profile/Profile";
// import {
//     BlogsSection,
//     ProfileSection,
//     ShowcaseContainer,
//     PlaceholderProfileContainer,
//     ActionButtonsWrapper,
//     ActionButton,
//     Divider,
//     DividerText,
// } from "./showcasePage.styles";
// import { RootState, AppDispatch } from "../../app/store";
// import { ProfileState, loadProfile } from "./profile/profileSlice";
// import MyCategories from "./categories/MyCategories";
//
// const ShowcasePage: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//
//     const profile = useSelector((state: RootState) => state.showcasePage.profile) as ProfileState;
//
//     const isRegistered = Boolean(profile.firstName && profile.lastName && profile.photoUrl);
//
//     useEffect(() => {
//         dispatch(loadProfile());
//     }, [dispatch]);
//
//     const handleSignInClick = () => {
//         console.log("Navigating to Sign In...");
//     };
//
//     const handleCreateAccountClick = () => {
//         console.log("Navigating to Create Account...");
//     };
//
//     return (
//         <ShowcaseContainer>
//             <ProfileSection>
//                 {isRegistered ? (
//                     <Profile />
//                 ) : (
//                     <PlaceholderProfileContainer>
//                         <h2>No Profile Found</h2>
//                         <p>Please register or sign in to complete your profile and join the community!</p>
//                         <Divider />
//                         <ActionButtonsWrapper>
//                             <ActionButton onClick={handleSignInClick}>SIGN IN</ActionButton>
//                             <DividerText><span>or</span></DividerText>
//                             <ActionButton onClick={handleCreateAccountClick}>CREATE ACCOUNT</ActionButton>
//                         </ActionButtonsWrapper>
//                     </PlaceholderProfileContainer>
//                 )}
//             </ProfileSection>
//
//             {/* Only render blogs if profile is complete */}
//             {isRegistered && (
//                 <BlogsSection>
//                     <MyCategories />
//                 </BlogsSection>
//             )}
//         </ShowcaseContainer>
//     );
// };
//
// export default ShowcasePage;