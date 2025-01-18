import styled from "styled-components";

export const MessagesContainer = styled.div`
    display: flex;
    overflow-y: auto;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    border-radius: 6px;
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
`;

export const MessageItem = styled.div<{ $fromMe: boolean }>` // Transient prop: $fromMe
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 12px;
    align-self: ${({ $fromMe }) => ($fromMe ? "flex-end" : "flex-start")};
    background-color: ${({ $fromMe, theme }) =>
    $fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
    color: ${({ theme }) => theme.text.colorDarkGray};
    word-wrap: break-word;
    position: relative;
    box-shadow: ${({ $fromMe, theme }) =>
    $fromMe
        ? theme.dialogs.boxShadowNeonShortWhiteSmall
        : theme.dialogs.boxShadowNeonShortBlue};

    /* Tail with a smooth wave effect */
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: ${({ $fromMe, theme }) =>
    $fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
        border-radius: ${({ $fromMe }) =>
    $fromMe ? "0 0 12px 0" : "0 0 0 12px"};
        ${({ $fromMe }) =>
    $fromMe
        ? `
                    right: -10px;
                    clip-path: polygon(100% 0, 0 0, 0 100%);
                `
        : `
                    left: -10px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%);
                `}
    }

    .timestamp {
        font-size: 12px;
        color: ${({ theme }) => theme.text.timestampSlateGray};
        margin-bottom: 4px;
    }
`;

// export const MessageItem = styled.div<{ fromMe: boolean }>`
//     max-width: 70%;
//     padding: 10px 15px;
//     border-radius: 12px;
//     align-self: ${({fromMe}) => (fromMe ? "flex-end" : "flex-start")};
//     background-color: ${({fromMe, theme}) =>
//             fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
//     color: ${({theme}) => theme.text.colorDarkGray};
//     word-wrap: break-word;
//     position: relative;
//     box-shadow: ${({fromMe, theme}) =>
//             fromMe
//                     ? theme.dialogs.boxShadowNeonShortWhiteSmall
//                     : theme.dialogs.boxShadowNeonShortBlue};
//
//     /* Tail with a smooth wave effect */
//
//     &::after {
//         content: "";
//         position: absolute;
//         bottom: 0;
//         width: 20px;
//         height: 20px;
//         background-color: ${({fromMe, theme}) =>
//                 fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
//         border-radius: ${({fromMe}) =>
//                 fromMe ? "0 0 12px 0" : "0 0 0 12px"};
//         ${({fromMe}) =>
//                 fromMe
//                         ? `
//                     right: -10px;
//                     clip-path: polygon(100% 0, 0 0, 0 100%);
//                 `
//                         : `
//                     left: -10px;
//                     clip-path: polygon(0 0, 100% 0, 100% 100%);
//                 `}
//     }
//
//     .timestamp {
//         font-size: 12px;
//         color: ${({theme}) => theme.text.timestampSlateGray};
//         margin-bottom: 4px;
//     }
//
// `;


export const InputSectionChat = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 8px;
        // background-color: ${({theme}) => theme.global.secondaryColor};
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
    position: sticky;

    input[type="text"] {
        flex: 1;
        padding: 13px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 15px;
        //margin-right: 10px;
        margin: 3px 10px 3px 0;
    }

    .button-group {
        display: flex;
        gap: 5px; /* Add spacing between Button and IconButton */
    }

    button {
        padding: 12px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;
