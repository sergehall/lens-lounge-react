import styled from "styled-components";

// Main container for the Home component
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 20px 40px;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.global.transparentBorder};
    margin: 0 auto;
`;

// Welcome text styling
export const WelcomeText = styled.h1`
    font-size: ${({ theme }) => theme.home.welcomeTextFontSize};
    color: ${({ theme }) => theme.home.welcomeTextColor};
    margin: 10px 0;
    text-align: center;
    line-height: 1.4;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.home.welcomeTextFontSizeMobile };
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: ${({ theme }) => theme.highlights.yellow};
    font-weight: bold;
    text-transform: capitalize;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.highlights.yellow || theme.links.hoverText};
    }
`;

// Bottom section container for descriptions
export const BottomSection = styled.div`
    max-width: ${({ theme }) => theme.home.bottomSectionMaxWidth || '800px'};
    text-align: left;
    margin-top: 20px;
    padding: 0 ${({ theme }) => theme.home.bottomSectionPadding || '20px'};

    @media (max-width: 600px) {
        margin-top: 15px;
        padding: 0 ${({ theme }) => theme.home.bottomSectionPaddingMobile || '15px'};
    }
`;

// General description text styling
export const Description = styled.p`
    color: ${({ theme }) => theme.global.textColor};
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 15px 0;
`;

// Navigation item highlight (link) styling
export const NavItemHighlight = styled.a`
    color: ${({ theme }) => theme.highlights.white};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.highlights.yellow};
        text-decoration: underline;
    }
`;
