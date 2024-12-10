import styled from "styled-components";

// Header container styling
export const HeaderContainer = styled.header`
    background-color: var(--header-nav-bg);
    display: flex; /* Flexbox for horizontal alignment */
    align-items: center; /* Vertically center items */
    padding: 10px 20px;
    max-width: 1300px;
`;

// Logo styling
export const Logo = styled.img`
    height: 50px; 
    margin-right: 20px; /* Spacing between logo and title */
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

// Title styling
export const Title = styled.h1`
    color: var(--link-color);
    margin: 0;
    font-size: 35px; /* Ensures title size is consistent */
    white-space: nowrap; /* Prevents wrapping of the title */
    text-align: left;
`;

// Anchor link styling
export const HeaderLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none; /* Prevent underline by default */
    color: inherit; /* Inherit color from parent container */
`;
