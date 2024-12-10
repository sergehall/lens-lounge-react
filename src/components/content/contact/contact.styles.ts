import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 8px;
    background-color: var(--background-color);
    color: var(--text-color);
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    width: 100%;
    background-color: var(--content-bg);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px var(--transparent-border);
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    border: 1px solid var(--contact-border-color);
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: var(--contact-primary-color);
    }
`;

export const TextArea = styled.textarea`
    font-size: 1rem;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    resize: none; /* Prevent resizing */
    transition: border-color 0.3s ease;

    &:focus {
        border-color: var(--primary-color);
    }
`;

export const Button = styled.button`
    background-color: var(--primary-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--contact-button-hover-bg);
    }
`;
