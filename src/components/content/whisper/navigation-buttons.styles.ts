import styled from "styled-components";

export const ButtonSegment = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 5px;
    border-radius: 8px;
    position: sticky;
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
    bottom: 0;

    button {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 5px;
        background-color: ${({theme}) => theme.global.secondaryColor};
        color: ${({theme}) => theme.text.colorDarkCharcoalBlue};
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: ${({theme}) => theme.contacts.userBgActiveColor};
            color: ${({theme}) => theme.text.colorWhite};
        }

        &.active {
            background-color: ${({theme}) => theme.contacts.userBgActiveColor};
            color: ${({theme}) => theme.text.colorWhite};
            font-weight: bold;
        }

        /* Responsive Design for Mobile Screens */
        @media (max-width: 800px) {
            flex-direction: column; /* Stacks buttons vertically on small screens */
            button {
                flex: none; /* Removes the equal width constraint */
                width: 100%; /* Makes buttons full width */
                font-size: 14px; /* Adjust font size for smaller screens */
            }
        }
`;

