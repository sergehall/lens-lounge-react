import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid var(--content-bg);
    border-radius: 8px;
    background-color: var(--content-bg);

`;

export const PostImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

export const PostTitle = styled.h2`
    margin: 16px 0;
    font-size: 1.5rem;
    color: #333;
`;

export const PostDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
`;
