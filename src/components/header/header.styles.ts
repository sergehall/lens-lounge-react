import styled from "styled-components";

// Header container styling
export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.header.navBg}; /* Use theme variable */
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensures proper spacing */
    padding: 10px 20px;
    max-width: 1300px;
    margin: 0 auto; /* Center the header */
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
    color: ${({ theme }) => theme.links.color}; /* Use theme for title color */
    margin: 0;
    font-size: 2.2rem; /* Consistent sizing */
    white-space: nowrap; /* Prevents wrapping of the title */
    text-align: left;

    @media (max-width: 600px) {
        font-size: 1.8rem; /* Adjust size for smaller screens */
    }
`;

// Anchor link styling
export const HeaderLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none; /* Prevent underline by default */
    color: inherit; /* Inherit color from parent container */
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05); /* Slight zoom effect on hover */
    }
`;