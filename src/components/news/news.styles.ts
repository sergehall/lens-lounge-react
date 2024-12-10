import styled from "styled-components";

// News Container
export const NewsContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.large40};
    background-color: ${({ theme }) => theme.global.backgroundColor};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: 0 4px 6px ${({ theme }) => theme.global.transparentBorder};
    max-width: 100%;
    margin: 0 auto; /* Center the container */
`;

// News Title
export const Title = styled.h1`
    font-size: ${({ theme }) => theme.news.titleFontSize};
    color: ${({ theme }) => theme.news.primaryColor};
    margin-bottom: ${({ theme }) => theme.spacing.default};
    text-align: center;
    padding-bottom:  ${({ theme }) => theme.news.paddingBottom};

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.news.titleFontSizeMobile};
    }
`;

// Article List
export const ArticleList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center; /* Center articles within the list */
`;

// Individual Article Item
export const ArticleItem = styled.li`
    width: 100%; /* Ensures responsiveness */
    max-width: 800px; /* Centered and constrained to 800px */
    border-radius: 8px;
    overflow: hidden; /* Ensures content doesn't spill outside rounded corners */
    box-shadow:  ${({ theme }) => theme.news.boxShadow};
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    background-color: ${({ theme }) => theme.content.bg}; /* Default background */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(97, 218, 251, 0.7); /* Slightly intensified shadow on hover */
        background-color: ${({ theme }) => theme.links.hoverBg}; /* Dark background on hover */
    }
`;

// Article Link
export const ArticleLink = styled.a`
    display: block;
    text-decoration: none;
    color: inherit; /* Inherit color for default state */
    padding: 10px;
    transition: color 0.3s ease;

    ${ArticleItem}:hover & {
        color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
    }
`;

// Article Title
export const ArticleTitle = styled.h3`
    font-size: 1.5rem;
    margin: 0 0 10px 0;
    color: ${({ theme }) => theme.news.highlightColor}; /* Default title color */
    transition: color 0.3s ease;

    ${ArticleItem}:hover & {
        color: ${({ theme }) => theme.news.hoverTextColor}; /* White title on hover */
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

// Article Text
export const ArticleText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.news.textColor}; /* Default text color */
    transition: color 0.3s ease;

    ${ArticleItem}:hover & {
        color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

//
// // Article List
// export const ArticleList = styled.ul`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
// `;
//
// // Individual Article Item
// export const ArticleItem = styled.li`
//     border-radius: 8px;
//     overflow: hidden; /* Ensures content doesn't spill outside rounded corners */
//     box-shadow: 0 2px 4px ${({ theme }) => theme.global.transparentBorder};
//     transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
//     background-color: ${({ theme }) => theme.content.bg}; /* Default background */
//
//     &:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 4px 8px ${({ theme }) => theme.global.semiTransparentBorder};
//         background-color: ${({ theme }) => theme.links.hoverBg}; /* Dark background on hover */
//     }
// `;
//
// // Article Link
// export const ArticleLink = styled.a`
//     display: block;
//     text-decoration: none;
//     color: inherit; /* Inherit color for default state */
//     padding: 10px;
//     transition: color 0.3s ease;
//
//     ${ArticleItem}:hover & {
//         color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
//     }
// `;
//
// // Article Title
// export const ArticleTitle = styled.h3`
//     font-size: 1.5rem;
//     margin: 0 0 10px 0;
//     color: ${({ theme }) => theme.news.highlightColor}; /* Default title color */
//     transition: color 0.3s ease;
//
//     ${ArticleItem}:hover & {
//         color: ${({ theme }) => theme.news.hoverTextColor}; /* White title on hover */
//     }
//
//     @media (max-width: 600px) {
//         font-size: 1.2rem;
//     }
// `;
//
// // Article Text
// export const ArticleText = styled.p`
//     font-size: 1rem;
//     line-height: 1.6;
//     color: ${({ theme }) => theme.news.textColor}; /* Default text color */
//     transition: color 0.3s ease;
//
//     ${ArticleItem}:hover & {
//         color: ${({ theme }) => theme.news.hoverTextColor}; /* White text on hover */
//     }
//
//     @media (max-width: 600px) {
//         font-size: 0.9rem;
//     }
// `;
