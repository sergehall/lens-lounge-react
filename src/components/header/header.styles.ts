import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    color: white;
    max-width: 1300px;
`;

export const LogoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 30px;
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.9),
    0 0 40px rgba(97, 218, 251, 0.7),
    0 0 60px rgba(97, 218, 251, 0.5);

    &:hover {
        background: ${({ theme }) => theme.stance.logoBackgroundB4B};
    }

    /* Responsive resizing */
    @media (max-width: 1000px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 600px) {
        width: 60px;
        height: 60px;
    }
`;

export const Logo = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 50%;
    animation: appLogoSpin infinite 10s linear;
    transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Slight zoom on hover */
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
    font-size: 2.5rem; /* Default size */
    white-space: nowrap; /* Prevents wrapping of the title */
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 2.2rem; /* Adjust size for smaller widths */
    }

    @media (max-width: 600px) {
        font-size: 2rem; /* Shrink further for very small screens */
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
