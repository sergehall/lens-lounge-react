import styled from 'styled-components';

export const CTATile = styled.div`
    background-color: ${({theme}) => theme.global.backgroundColor};
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
        height: ${({theme}) => theme.tile.height};
        h3 {
            margin: 15px 0 5px;
        }
    }
`;

export const CTAButton = styled.button`
    background: transparent;
    color: ${({theme}) => (theme.links.color)};
    border: 2px solid #61dafb;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${({theme}) =>
                theme.authorization.boxShadow};
        ${({theme}) => theme.links.hoverColor};
    }

    &:active {
        transform: scale(0.95);
    }
`;


// export const CTAButton = styled.button`
//     margin-top: 12px;
//     padding: 10px 16px;
//     font-size: 1rem;
//     background: #4f46e5;
//     color: white;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//
//     &:hover {
//         background: #3730a3;
//     }
// `;
