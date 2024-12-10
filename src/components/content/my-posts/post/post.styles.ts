import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.post.borderColor};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    background-color: ${({ theme }) => theme.post.containerBg};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
    transition: ${({ theme }) => theme.post.transition};

    &:hover {
        transform: translateY(${({ theme }) => theme.post.hoverTransform});
    }
`;

export const PostImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.global.borderRadius};
`;

export const PostTitle = styled.h2`
    margin: 16px 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.post.titleColor};
`;

export const PostDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.post.descriptionColor};
    line-height: 1.5;
`;
