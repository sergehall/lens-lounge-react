import styled from "styled-components";
import {AuthButtonProps} from "./Authorization";

export const AuthButton = styled.button<AuthButtonProps>`
    text-decoration: none;
    color: ${({ theme, isActive }) =>
    isActive ? theme.links.activeText : theme.links.color};
    padding: 10px 70px; /* Default padding */
    border-radius: 8px;
    font-size: 1rem; /* Default font size */
    box-shadow: 0 0 5px 2px rgba(97, 218, 251, 0.7); /* Default box shadow */
    background-color: ${({ theme, isActive }) =>
    isActive ? theme.links.activeBg : "transparent"};
    cursor: pointer;
    transition: 
        background-color 0.3s ease, 
        color 0.3s ease, 
        transform 0.3s ease, 
        box-shadow 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.links.hoverBg};
        color: ${({ theme }) => theme.links.hoverText};
        box-shadow: 0 0 8px 2px rgba(97, 218, 251, 0.7); /* Hover effect */
        transform: scale(1.05);
    }

    /* Responsive adjustments */
    @media (max-width: 1000px) {
        padding: 8px 60px; /* Adjust padding for mid-sized screens */
        font-size: 0.95rem; /* Slightly reduce font size */
        box-shadow: 0 0 4px 2px rgba(97, 218, 251, 0.6); /* Subtler shadow */
    }

    @media (max-width: 700px) {
        padding: 8px 40px; /* Further reduce padding */
        font-size: 0.9rem; /* Shrink font size for small screens */
        box-shadow: 0 0 3px 1px rgba(97, 218, 251, 0.5); /* Minimal shadow */
    }
`;


export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%; /* Aligns the top of the dropdown with the bottom of the AuthButton */
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

export const DropdownTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin: 8px 0; /* Reduce vertical spacing */
    text-align: center;

    @media (max-width: 600px) {
        font-size: 0.8rem;
        margin: 6px 0; /* Adjust spacing for smaller screens */
    }
`;

export const SignInInstruction = styled.p`
    font-size: 0.7rem;
    color: ${({ theme }) => theme.global.textColor};
    margin-bottom: 10px;
    text-align: center;
    font-weight: 500;
    @media (max-width: 600px) {
        padding: 8px;
    }
`;

export const DropdownButton = styled.button`
    width: 100%;
    padding: 15px;
    margin: 8px 0;
    font-size: 16px;
    border: none;
    background-color: #282c34; /* Default background color */
    color: ${({ theme }) => theme.links.color};
    box-shadow: 0 0 3px 1px rgba(97, 218, 251, 0.7);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.links.hoverBg};
        color: ${({ theme }) => theme.links.hoverText};
        box-shadow: 0 0 5px 2px rgba(97, 218, 251, 0.7);
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 8px; /* Adjust padding for smaller screens */
    }
`;

export const SignInWithAppleButton = styled(DropdownButton)`
    background-color: black;
    color: white;
    marginBottom: "8px";

    &:hover {
        background-color: #1a1a1a;
    }
`;

export const SignInWithGoogleButton = styled(DropdownButton)`
    background-color: #4285F4;
    color: white;
    marginBottom: "8px";

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
    width: calc(100% - 16px); /* Account for padding in DropdownContainer */
    padding: 8px;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none; /* Removes default focus outline */
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff; /* Highlighted border on focus */
    }
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const SocialLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ForgotPasswordLink = styled.a`
    display: block;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.global.textColor};
    font-size: 0.8rem;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.links.hoverText};
        text-decoration: underline;
    }
`;

export const Divider = styled.div`
    width: 100%;
    text-align: center;
    margin: 15px 0;
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        height: 1px;
        background: #ccc;
        width: 40%;
        top: 50%;
    }

    &:before {
        left: 0;
    }

    &:after {
        right: 0;
    }
`;
