// /src/pages/CategoryPage/CategoryPage.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Tile = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 24px;
  color: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const BlogTile = styled(Tile)`
  background: #121212;
  padding: 16px;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 8px 0;
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.95rem;
    color: #ccc;
  }

  span {
    font-size: 0.8rem;
    color: #888;
  }
`;

export const CTAButton = styled.button`
  margin-top: 12px;
  padding: 10px 16px;
  font-size: 1rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #3730a3;
  }
`;
