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

// Generic link styling for both Logo and Title
export const HeaderLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none; /* Prevent underline */
    color: inherit; 
    transition: transform 0.3s ease, color 0.3s ease;
`;

// Logo-specific styling
export const LogoContainer = styled(HeaderLink)`
    position: relative;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 30px;
    box-shadow: ${({ theme }) => theme.header.logoBoxShadow};

    &:hover {
        transform: scale(1.05);
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

// Title-specific styling
export const Title = styled(HeaderLink)`
    font-size: 2.5rem; /* Default size */
    white-space: nowrap; /* Prevents wrapping of the title */
    text-align: left;
    color: ${({ theme }) => theme.links.color};

    &:hover {
        color: ${({ theme }) => theme.links.color}; /* Optional hover effect for title */
    }

    @media (max-width: 1000px) {
        font-size: 2.2rem; /* Adjust size for smaller widths */
    }

    @media (max-width: 600px) {
        font-size: 2rem; /* Shrink further for very small screens */
    }
`;
