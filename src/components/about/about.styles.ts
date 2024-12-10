import styled from "styled-components";

// Main container for the About section
export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.large40};
    background-color: ${({ theme }) => theme.about.containerBg};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

// Title styling
export const Title = styled.h1`
    font-size: ${({ theme }) => theme.about.titleFontSize};
    color: ${({ theme }) => theme.about.titleColor};
    margin-bottom: ${({ theme }) => theme.spacing.default};
    text-align: center;
    
    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.about.titleFontSizeMobile};
    }
`;

// Paragraph styling
export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.about.paragraphFontSize};
    color: ${({ theme }) => theme.about.paragraphColor};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.default};
    text-align: justify;
    max-width: 800px;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.about.paragraphFontSizeMobile};
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: ${({ theme }) => theme.about.highlightColor};
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.about.highlightHoverColor};
    }
`;

// Link styling
export const Link = styled.a`
    color: ${({ theme }) => theme.about.linkColor};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.about.linkHoverColor};
        text-decoration: underline;
    }
`;
