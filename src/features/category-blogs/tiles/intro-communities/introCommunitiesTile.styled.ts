import styled from 'styled-components';

export const IntroTile = styled.div`
    background-color: ${({ theme }) => theme.global.backgroundColor};
    border-radius: 12px;
    padding: 5px 20px;
    color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    height: ${({theme}) => theme.tile.height};

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    p {
        font-size: 0.95rem;
        color: ${({theme}) => theme.text.light};
        line-height: 1.4;
    }
    @media (max-width: 600px) {
        padding-top: 5px;
        height: ${({theme}) => theme.tile.mobileTitle};
        h3 {
            margin: 15px 0 5px;
        }
    }
`;
