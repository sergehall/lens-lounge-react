import styled from "styled-components";

// Header container styling
export const HeaderContainer = styled.header`
    background-color: ${({theme}) => theme.header.navBg}; /* Use theme variable */
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensures proper spacing */
    padding: 10px 20px;
    max-width: 1300px;
    margin: 0 auto; /* Center the header */
    box-sizing: border-box;
`;

// Logo styling
export const Logo = styled.img`
    /* Base styling */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

    ///* Animation */
    animation: appLogoSpin infinite 10s linear;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Hover effect */
    &:hover {
        box-shadow:
                0 0 20px rgba(97, 218, 251, 0.9),
                0 0 40px rgba(97, 218, 251, 0.7),
                0 0 60px rgba(97, 218, 251, 0.5);
    }

    /* Keyframes for rotation animation */
    @keyframes appLogoSpin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

// Title styling
export const Title = styled.h1`
    color: ${({theme}) => theme.links.color}; /* Use theme for title color */
    margin: 0;
    font-size: 2.6rem; /* Consistent sizing */
    white-space: nowrap; /* Prevents wrapping of the title */
    text-align: left;

    @media (max-width: 600px) {
        font-size: 2.2rem; /* Adjust size for smaller screens */
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