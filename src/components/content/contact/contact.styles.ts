import styled from "styled-components";

// Main container for the Contact section
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.large40};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    background-color: ${({ theme }) => theme.contact.containerBg};
    color: ${({ theme }) => theme.contact.textColor};
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.contact.titleFontSize};
    color: ${({ theme }) => theme.contact.titleColor};
    margin-bottom: ${({ theme }) => theme.spacing.default};
    text-align: center;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.contact.titleFontSizeMobile};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;
    width: 100%;
    background-color: ${({ theme }) => theme.contact.formBg};
    padding: 20px;
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.contact.inputBorderColor};
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({ theme }) => theme.contact.inputFocusBorderColor};
    }
`;

export const TextArea = styled.textarea`
    font-size: 1rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.contact.inputBorderColor};
    border-radius: 5px;
    outline: none;
    resize: none; /* Prevent resizing */
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({ theme }) => theme.contact.inputFocusBorderColor};
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.contact.buttonBg};
    color: ${({ theme }) => theme.contact.textColor};
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.contact.buttonHoverBg};
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.contact.textColor};
    margin-bottom: 20px;
    text-align: center;
`;
