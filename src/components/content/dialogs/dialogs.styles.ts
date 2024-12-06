import styled from "styled-components";

export const DialogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--content-bg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DialogTitle = styled.h2`
    font-size: 1.5rem;
    color: var(--header-nav-bg);
    margin: 0;
`;

export const DialogContent = styled.p`
    font-size: 1rem;
    color: var(--profile-link-color);
    margin: 0;
    line-height: 1.5;
`;
