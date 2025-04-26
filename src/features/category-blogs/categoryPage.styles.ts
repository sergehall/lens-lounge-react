import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tile = styled.div`
    background: #1a1a1a;
    border-radius: 12px;
    padding: 24px;
    color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    height: ${({theme}) => theme.tile.height};
`;

export const Grid = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const BlogTile = styled(Tile)`
    background-color: ${({theme}) => theme.global.backgroundColor};
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 66.66%; /* 2/3 of the tile */
        object-fit: cover;
        display: block;
    }
`;

export const Content = styled.div`
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        margin: 0 0 3px;
        font-size: 1.1rem;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 0.85rem;
        color: #ccc;
        margin-bottom: 8px;
        flex-grow: 1;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        font-size: 0.7rem;
        color: #888;
    }
`;

export const IconWrapper = styled.div`
    padding-top: 20px;
    color: ${({theme}) => theme.global.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;