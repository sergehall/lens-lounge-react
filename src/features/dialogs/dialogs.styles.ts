import styled from "styled-components";


export const ChatSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    border-radius: 6px;
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
`;

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

export const MessageItem = styled.div<{ fromMe: boolean }>`
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 12px;
    align-self: ${({fromMe}) => (fromMe ? "flex-end" : "flex-start")};
    background-color: ${({fromMe, theme}) =>
            fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
    color: ${({theme}) => theme.text.colorDarkGray};
    word-wrap: break-word;
    position: relative;
    box-shadow: ${({fromMe, theme}) =>
            fromMe
                    ? theme.dialogs.boxShadowNeonShortWhiteSmall
                    : theme.dialogs.boxShadowNeonShortBlue};

    /* Tail with a smooth wave effect */

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: ${({fromMe, theme}) =>
                fromMe ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
        border-radius: ${({fromMe}) =>
                fromMe ? "0 0 12px 0" : "0 0 0 12px"};
        ${({fromMe}) =>
                fromMe
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
        color: ${({theme}) => theme.text.timestampSlateGray};
        margin-bottom: 4px;
    }

`;