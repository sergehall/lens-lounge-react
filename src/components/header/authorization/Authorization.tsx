import React, {Dispatch, SetStateAction} from "react";
import {
    AuthButton,
    DropdownContainer,
    DropdownTitle,
    InputField,
    DropdownButton,
    ForgotPasswordLink,
    WhiteDivider,
    SignInWithUsernameContainer,
    SignInInstruction,
    SignInWithSocialContainer,
    SignInWithAppleButton,
    SignInWithGoogleButton,
    ContinueWithFacebookButton,
} from "./authorization.styles";

export interface AuthorizationProps {
    isDropdownVisible: boolean;
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>; // Proper type for setState
}

const Authorization: React.FC<AuthorizationProps> = ({
                                                         isDropdownVisible,
                                                         setIsDropdownVisible,
                                                     }) => {
    const [showSignInField, setShowSignInField] = React.useState(false);
    const [username, setUsername] = React.useState("");

    const handleSignInClick = () => {
        setShowSignInField(true);
    };

    return (
        <div
            style={{position: "relative"}}
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
        >
            {/* Authorization Button */}
            <AuthButton $isActive={isDropdownVisible}>Authorization</AuthButton>

            {/* Dropdown Content */}
            {isDropdownVisible && (
                <DropdownContainer>
                    {/* Conditional Rendering for Username Sign-In */}
                    {!showSignInField ? (
                        <>
                            <DropdownTitle>
                                SIGN IN
                                <WhiteDivider>or</WhiteDivider>
                                CREATE ACCOUNT
                            </DropdownTitle>
                            <DropdownButton onClick={handleSignInClick}>
                                SIGN IN
                            </DropdownButton>
                            <DropdownButton onClick={() => alert("Create Account")}>
                                CREATE ACCOUNT
                            </DropdownButton>
                        </>
                    ) : (
                        <>
                            {/* Sign In via Username or Login */}
                            <SignInWithUsernameContainer>
                                <DropdownTitle>SIGN IN</DropdownTitle>
                                <SignInInstruction>
                                    USE YOUR EMAIL ADDRESS OR PHONE NUMBER
                                </SignInInstruction>
                                <InputField
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <DropdownButton
                                    onClick={() => alert(`Welcome, ${username}!`)}
                                >
                                    NEXT STEP
                                </DropdownButton>
                                <ForgotPasswordLink href="#">
                                    FORGOT PASSWORD?
                                </ForgotPasswordLink>
                            </SignInWithUsernameContainer>


                            {/* Divider */}
                            <WhiteDivider>or</WhiteDivider>

                            {/* Sign In via Social Media */}
                            <SignInWithSocialContainer>
                                <SignInWithAppleButton>
                                    Continue with Apple
                                </SignInWithAppleButton>
                                <SignInWithGoogleButton>
                                    Sign in with Google
                                </SignInWithGoogleButton>
                                <ContinueWithFacebookButton>
                                    Continue with Facebook
                                </ContinueWithFacebookButton>
                            </SignInWithSocialContainer>
                        </>
                    )}
                </DropdownContainer>
            )}
        </div>
    );
};

export default Authorization;

