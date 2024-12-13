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
    width: 100%; /* Ensures container fits within parent */
    max-width: 100%; /* Prevents container from exceeding parent's width */
    margin: 0 auto; /* Centers container in parent */

    @media (max-width: 600px) {
        padding: ${({ theme }) => theme.spacing.default}; /* Reduce padding for mobile */
    }
`;

// export const AboutContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: ${({ theme }) => theme.spacing.large40};
//     background-color: ${({ theme }) => theme.about.containerBg};
//     border-radius: ${({ theme }) => theme.global.borderRadius};
//     box-shadow: ${({ theme }) => theme.global.boxShadow};
//     width: 100%; /* Constrain container width */
//     max-width: 800px; /* Optional: Prevent it from stretching too wide */
//     margin: 0 auto; /* Center the container horizontally */
//
//     @media (max-width: 600px) {
//         padding: ${({ theme }) => theme.spacing.default}; /* Reduce padding for mobile */
//     }
// `;
// export const AboutContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: ${({ theme }) => theme.spacing.large40};
//     background-color: ${({ theme }) => theme.about.containerBg};
//     border-radius: ${({ theme }) => theme.global.borderRadius};
//     box-shadow: ${({ theme }) => theme.global.boxShadow};
// `;



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
    max-width: 100%; /* Ensures it fits within the container */
    padding: 0 ${({ theme }) => theme.spacing.medium20}; /* Add horizontal padding */

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.about.paragraphFontSizeMobile};
        padding: 0 ${({ theme }) => theme.spacing.medium20}; /* Adjust padding for mobile */
    }
`;

// export const Paragraph = styled.p`
//     font-size: ${({ theme }) => theme.about.paragraphFontSize};
//     color: ${({ theme }) => theme.about.paragraphColor};
//     line-height: 1.6;
//     margin-bottom: ${({ theme }) => theme.spacing.default}; /* Space between paragraphs */
//     text-align: justify;
//     max-width: 100%; /* Ensure it uses available container space */
//     padding: 0 ${({ theme }) => theme.spacing.medium20}; /* Add horizontal padding for distance from edges */
//
//     @media (max-width: 600px) {
//         font-size: ${({ theme }) => theme.about.paragraphFontSizeMobile};
//         padding: 0 ${({ theme }) => theme.spacing.medium20};
//     }
// `;

// export const Paragraph = styled.p`
//     font-size: ${({ theme }) => theme.about.paragraphFontSize};
//     color: ${({ theme }) => theme.about.paragraphColor};
//     line-height: 1.6;
//     margin-bottom: ${({ theme }) => theme.spacing.default};
//     text-align: justify;
//     max-width: 800px;
//
//     @media (max-width: 600px) {
//         font-size: ${({ theme }) => theme.about.paragraphFontSizeMobile};
//     }
// `;

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
