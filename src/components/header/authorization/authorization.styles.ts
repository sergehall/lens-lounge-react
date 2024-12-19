import styled from "styled-components";

interface AuthButtonProps {
    isActive: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
    background: transparent;
    color: ${({ isActive, theme }) => (isActive ? theme.links.activeText : theme.links.color)};
    border: 2px solid #61DAFB;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${({ isActive, theme }) =>
    isActive ? theme.authorization.boxShadow : "none"};

    &:hover {
        box-shadow: ${({ theme }) => theme.authorization.boxShadow};
        ${({ theme }) => theme.links.hoverColor};
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #282c34;
    border: 1px solid ${({ theme }) => theme.global.secondaryColor};
    border-radius: 8px;
    padding: 16px;
    z-index: 100;
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const SignInInstruction = styled.p`
    font-size: 0.7rem;
    margin-bottom: 8px;
    text-align: center;
    align-items: center;
    color: ${({ theme }) => theme.text.colorWhite};
`;

export const DropdownTitle = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    margin: 8px 0;
    text-align: center;
    align-items: center;

    @media (max-width: 600px) {
        font-size: 0.7rem;
        margin: 6px 0;
    }
`;

export const SignInWithUsernameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`;

export const SignInWithSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 12px; /* Consistent spacing between buttons */
`;

export const DropdownButton = styled.button`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    font-size: 16px;
    border: none;
    background-color: #282c34;
    color: ${({ theme }) => theme.links.color};
    box-shadow: 0 0 3px 1px rgba(97, 218, 251, 0.7);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.links.hoverBg};
        color: ${({ theme }) => theme.links.hoverColor};
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 10px;
    }
`;

export const SignInWithAppleButton = styled(DropdownButton)`
    background-color: black;
    color: white;

    &:hover {
        background-color: #1a1a1a;
    }
`;

export const SignInWithGoogleButton = styled(DropdownButton)`
    background-color: #4285F4;
    color: white;

    &:hover {
        background-color: #357ae8;
    }
`;

export const ContinueWithFacebookButton = styled(DropdownButton)`
    background-color: #3b5998;
    color: white;

    &:hover {
        background-color: #334d84;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
    }
`;

export const ForgotPasswordLink = styled.a`
    display: block;
    margin-top: 10px;
    font-size: 0.7rem;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text.colorWhite};

    &:hover {
        color: ${({ theme }) => theme.links.hoverColor};
        text-decoration: underline;
    }
`;

export const WhiteDivider = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px 0;
    position: relative;

    &:before,
    &:after {
        content: "";
        flex: 1;
        height: 1px;
        background-color: #ccc;
        margin: 0 8px;
    }

    span {
        font-size: 0.8rem;
        color: #666;
        white-space: nowrap;
    }
`;