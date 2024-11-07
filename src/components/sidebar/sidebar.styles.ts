// src/components/sidebar/sidebar.styles.ts

import styled from 'styled-components';

export const SidebarContainer = styled.nav`
    background-color: var(--header-nav-bg);
    color: var(--link-color);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    max-width: 100px;
`;

export const SidebarLink = styled.a`
    color: var(--link-color);
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: var(--link-hover-bg);
        color: var(--link-hover-text);
    }

    &:focus {
        outline: 2px solid var(--link-hover-text);
    }

    &:visited {
        color: var(--visited-link-color);
    }
`;
