import styled from 'styled-components';

export const CTATile = styled.div`
    background-color: ${({theme}) => theme.global.backgroundColor};
    border-radius: 12px;
    padding: 20px;
    color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);

    h3 {
        margin-bottom: 8px;
        font-size: 1.2rem;
    }

    p {
        font-size: 0.95rem;
        color: #ccc;
    }
    
    @media (max-width: 600px) {
        padding-top: 5px;
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
