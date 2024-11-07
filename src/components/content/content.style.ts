// src/components/content/content.styles.ts

import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ContentImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 15px;
    border-radius: 8px;
`;

export const ContentTitle = styled.h2`
    font-size: 1.5em;
    margin: 10px 0;
    color: var(--header-nav-bg);
`;

export const ContentDescription = styled.p`
    font-size: 1em;
    color: var(--link-hover-bg);
`;
