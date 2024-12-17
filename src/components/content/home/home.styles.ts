import styled from "styled-components";

// Main container for the Home component
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 20px 40px;
    border-radius: ${({theme}) => theme.global.borderRadius};
    background-color: ${({theme}) => theme.contact.containerBg};
    color: ${({theme}) => theme.contact.textColor};
    box-shadow: ${({theme}) => theme.global.transparentBorder};
    margin: 0 auto;
`;

// Welcome text styling
export const Title = styled.h1`
    font-size: ${({ theme }) => theme.textFontSize.title};
    color: ${({ theme }) => theme.colors.title};
    margin: 10;
    text-align: center;
    line-height: ${({ theme }) => theme.text.lineHeight};;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.textFontSize.mobile };
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: ${({ theme }) => theme.highlights.yellow};
    font-weight: bold;
    text-transform: capitalize;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.highlights.yellow || theme.links.hoverColor};
    }
`;

// Bottom section container for descriptions
export const BottomSection = styled.div`
    max-width: ${({ theme }) => theme.home.bottomSectionMaxWidth};
    text-align: left;
    padding: 0 ${({ theme }) => theme.home.bottomSectionPadding};

    @media (max-width: 600px) {
        margin-top: 15px;
        padding: 0 ${({ theme }) => theme.home.bottomSectionPaddingMobile};
    }
`;

// General description text styling
export const Description = styled.p`
    color: ${({ theme }) => theme.global.textColorWhite};
    font-size: 1.2rem;
    line-height: ${({ theme }) => theme.text.lineHeight};;
    margin: 15px 0;
`;

// Navigation item highlight (link) styling
export const NavItemHighlight = styled.a`
    color: ${({ theme }) => theme.links.color};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.highlights.yellow};
        text-decoration: underline;
    }
`;
