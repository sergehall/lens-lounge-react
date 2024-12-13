import React, { Dispatch, SetStateAction } from "react";
import {
    AuthButton,
    DropdownContainer,
    DropdownTitle,
    SignInWithAppleButton,
    SignInWithGoogleButton,
    ContinueWithFacebookButton,
    InputField,
    SignInContainer,
    SocialLoginContainer,
    Divider,
    DropdownButton, ForgotPasswordLink, SignInInstruction,
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
            style={{ position: "relative" }}
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
        >
            <AuthButton isActive={isDropdownVisible}>Authorization</AuthButton>
            {isDropdownVisible && (
                <DropdownContainer>
                    {!showSignInField ? (
                        <>
                            <DropdownTitle>
                                SIGN IN<Divider>or</Divider>CREATE ACCOUNT
                            </DropdownTitle>
                            <DropdownButton onClick={handleSignInClick}>
                                SIGN IN
                            </DropdownButton>
                            <DropdownButton onClick={() => alert("Create Account")}>
                                CREATE ACCOUNT
                            </DropdownButton>
                        </>
                    ) : (
                        <SignInContainer>
                            <DropdownTitle>SIGN IN</DropdownTitle>
                            <div style={{ textAlign: "left", width: "100%" }}>
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
                            </div>
                            <Divider>OR</Divider>
                            <SocialLoginContainer>
                                <SignInWithAppleButton>
                                    Continue with Apple
                                </SignInWithAppleButton>
                                <SignInWithGoogleButton>
                                    Sign in with Google
                                </SignInWithGoogleButton>
                                <ContinueWithFacebookButton>
                                    Continue with Facebook
                                </ContinueWithFacebookButton>
                            </SocialLoginContainer>
                        </SignInContainer>
                    )}
                </DropdownContainer>
            )}
        </div>
    );
};

export default Authorization;

// import React, {useState} from "react";
// import {
//     AuthButton,
//     DropdownContainer,
//     DropdownTitle,
//     SignInWithAppleButton,
//     SignInWithGoogleButton,
//     ContinueWithFacebookButton,
//     InputField,
//     SignInContainer,
//     SocialLoginContainer,
//     Divider,
//     DropdownButton, ForgotPasswordLink, SignInInstruction,
// } from "./authorization.styles";
//
// export interface AuthButtonProps {
//     isActive: boolean;
// }
//
// const Authorization: React.FC = () => {
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//     const [showSignInField, setShowSignInField] = useState(false);
//     const [username, setUsername] = useState("");
//
//     const toggleDropdownVisibility = (state: boolean) => {
//         setIsDropdownVisible(state);
//         if (!state) {
//             setShowSignInField(false); // Reset sign-in field when dropdown closes
//         }
//     };
//
//     const handleSignInClick = () => {
//         setShowSignInField(true);
//     };
//
//     return (
//         <div
//             style={{position: "relative"}}
//             onMouseEnter={() => toggleDropdownVisibility(true)}
//             onMouseLeave={() => toggleDropdownVisibility(false)}
//         >
//             <AuthButton isActive={isDropdownVisible}>Authorization</AuthButton>
//
//             {isDropdownVisible && (
//                 <DropdownContainer>
//                     {!showSignInField ? (
//                         <>
//                             <DropdownTitle>SIGN IN<Divider>or</Divider>CREATE ACCOUNT</DropdownTitle>
//                             <DropdownButton onClick={handleSignInClick}>
//                                 SIGN IN
//                             </DropdownButton>
//                             <DropdownButton onClick={() => alert("Create Account")}>
//                                 CREATE ACCOUNT
//                             </DropdownButton>
//                         </>
//                     ) : (
//                         <SignInContainer>
//                             <DropdownTitle>SIGN IN</DropdownTitle>
//                             <div style={{textAlign: "left", width: "100%"}}>
//                                 <SignInInstruction>
//                                     USE YOUR EMAIL ADDRESS OR PHONE NUMBER
//                                 </SignInInstruction>
//                                 <InputField
//                                     type="text"
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                 />
//                                 <DropdownButton
//                                     onClick={() => alert(`Welcome, ${username}!`)}
//                                 >
//                                     NEXT STEP
//                                 </DropdownButton>
//                                 <ForgotPasswordLink href="#">
//                                     FORGOT PASSWORD?
//                                 </ForgotPasswordLink>
//                             </div>
//                             <Divider>OR</Divider>
//                             <SocialLoginContainer>
//                                 <SignInWithAppleButton>
//                                     Continue with Apple
//                                 </SignInWithAppleButton>
//                                 <SignInWithGoogleButton>
//                                     Sign in with Google
//                                 </SignInWithGoogleButton>
//                                 <ContinueWithFacebookButton>
//                                     Continue with Facebook
//                                 </ContinueWithFacebookButton>
//                             </SocialLoginContainer>
//                         </SignInContainer>
//                     )}
//                 </DropdownContainer>
//             )}
//         </div>
//     );
// };
//
// export default Authorization;