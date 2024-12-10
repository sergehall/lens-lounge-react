import styled from 'styled-components';

export const MyPostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.myPosts.containerGap};
    margin-bottom: 5px;

    @media (max-width: 600px) {
        grid-template-columns: ${({ theme }) => theme.myPosts.responsiveGridTemplate};
    }
`;

export const PostItem = styled.div`
    padding: ${({ theme }) => theme.myPosts.postPadding};
    border: 1px solid ${({ theme }) => theme.myPosts.postBorderColor};
    border-radius: ${({ theme }) => theme.myPosts.postBorderRadius};
    background-color: ${({ theme }) => theme.myPosts.postBgColor};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(${({ theme }) => theme.myPosts.postHoverTransform});
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;
