

import styled from "styled-components";

export const TechnologyContainer = styled.div`
    padding: 20px;
    color: ${({ theme }) => theme.technologies.containerColor};
    text-align: start;
    background-color: ${({ theme }) => theme.technologies.containerBg};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 600px) {
        padding: ${({ theme }) => theme.technologies.responsivePadding};
    }
`;


export const Title = styled.h3`
    color: ${({ theme }) => theme.technologies.containerColor};
    margin-top: 0;
`;

export const TechnologyList = styled.ul`
    list-style-type: ${({ theme }) => theme.technologies.listStyleType};
    padding: 0;
    margin: 0;
    list-style-position: ${({ theme }) => theme.technologies.listStylePosition};

    @media (max-width: 600px) {
        list-style-type: ${({ theme }) => theme.technologies.responsiveListStyleType};
    }
`;

export const TechnologyItem = styled.li`
    margin: ${({ theme }) => theme.technologies.margin};

    @media (max-width: 600px) {
        margin: ${({ theme }) => theme.technologies.responsiveMargin};
    }
`;

export const TechnologyLink = styled.a`
    color: ${({ theme }) => theme.technologies.linkColor};
    text-decoration: none;
    transition: color 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: ${({ theme }) => theme.technologies.linkHoverColor};
        text-decoration: underline;
    }
`;


export const PopupWindow = styled.div`
    position: absolute;
    width: 650px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding: 1rem;
    font-size: 0.9rem;

    h4 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
    }

    p {
        margin: 0 0 0.5rem;
    }

    iframe {
        border-radius: 4px;
        overflow: hidden;
        width: 100%;
        height: 200px;
    }

    /* For screens smaller than 1000px */
    @media (max-width: 1000px) {
        width: 320px; /* Fixed width for smaller screens */
        left: 5%; /* Slightly center */
        top: 10%; /* Position slightly from the top */
        padding: 0.5rem; /* Adjust padding for smaller screens */
        font-size: 0.8rem;

        iframe {
            height: 150px; /* Reduce iframe height for smaller screens */
        }

        h4 {
            font-size: 1rem; /* Reduce title size for better fit */
        }
    }
`;

export const StyledIframe = styled.iframe`
    border: none;
    width: 100%;
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
`;
