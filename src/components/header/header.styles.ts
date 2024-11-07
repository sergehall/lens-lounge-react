// src/components/header/header.styles.ts

import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: var(--header-nav-bg);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 10px 20px;
    max-width: 1300px;
`;

export const Logo = styled.img`
    height: 5vmin;
    margin-right: 10px;
    animation: appLogoSpin infinite 10s linear;

    @keyframes appLogoSpin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Title = styled.h1`
    color: var(--link-color);
    margin: 0;
    white-space: nowrap;
    text-align: left;
`;