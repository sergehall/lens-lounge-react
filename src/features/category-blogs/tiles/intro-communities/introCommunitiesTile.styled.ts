import styled from 'styled-components';

export const IntroTile = styled.div`
    background-color: ${({ theme }) => theme.global.backgroundColor};
    border-radius: 12px;
    padding: 20px;
    color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
        color: #bbb;
        line-height: 1.4;
    }
    @media (max-width: 600px) {
        padding-top: 5px;
    }
`;
