import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); // Responsive columns
    grid-auto-rows: 200px; // Fixed height per row for consistent sizing
    gap: 5px;
    grid-auto-flow: dense; 
`;

export const Tile = styled.div<{ isFeatured?: boolean }>`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.3s ease;
    filter: grayscale(50%) brightness(0.8);
    display: flex;
    align-items: flex-end;

    grid-column: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};
    grid-row: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};
    

    &:hover {
        filter: grayscale(0%) brightness(1);
        transform: scale(1.03);
    }
`;

export const Image = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    pointer-events: none;
`;

export const Label = styled.div`
    position: absolute;
    bottom: 12px;
    left: 16px;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    z-index: 2;
`;
