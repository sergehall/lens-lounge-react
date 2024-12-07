import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border-radius: 8px;
    background-color: var(--background-color);
    color: var(--text-color);
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--primary-color);
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: var(--text-color);

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Highlight = styled.span`
    color: var(--highlight-color);
    font-weight: bold;
    text-decoration: underline;
`;
