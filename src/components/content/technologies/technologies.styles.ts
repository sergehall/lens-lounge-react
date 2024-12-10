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
