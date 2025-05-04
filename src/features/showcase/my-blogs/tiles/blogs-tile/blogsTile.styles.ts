import styled from 'styled-components';

import { Tile } from '../../myCategoryBlogsPage.styles';

export const BlogTile = styled(Tile)`
  padding: 0;
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
