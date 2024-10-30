// src/components/Technologies/technologies.styles.ts

import styled from 'styled-components';

export const TechnologiesContainer = styled.div`
    padding: 20px;
    background-color: var(--content-bg);
    color: var(--header-nav-bg);
    text-align: start;
`;

export const TechnologyTitle = styled.h3`
    color: var(--header-nav-bg);
    margin-top: 0;
`;

export const TechnologyList = styled.ul`
    list-style-type: disc;
    padding: 0;
    margin: 0;
    list-style-position: inside;
`;

export const TechnologyItem = styled.li`
    margin: 5px 0;
    color: var(--link-hover-bg);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TechnologyLink = styled.a`
    color: var(--header-nav-bg);
    text-decoration: none;
    transition: color 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: var(--link-hover-text);
        text-decoration: underline;
    }

    &:visited {
        color: var(--visited-link-color);
    }
`;
