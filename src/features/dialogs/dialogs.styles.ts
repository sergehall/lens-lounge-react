import styled from "styled-components";

export const DialogsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 5px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadow};
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    border-right: 1px solid ${({theme}) => theme.dialogs.userListBorderColor};
    padding: 10px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
`;

export const UserItem = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: ${({theme}) => theme.global.boxShadowNeonShort};
    background-color: ${({isActive, theme,}) =>
            isActive ? theme.global.secondaryColor : theme.global.secondaryColor};
    color: ${({isActive, theme}) =>
            isActive ? theme.dialogs.userItemActiveColor : theme.dialogs.userItemInactiveColor};
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({theme}) => theme.highlights.yellow};
    }
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${({theme}) => theme.global.semiTransparentBorder};
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;

export const UserStatus = styled.span<{ isOnline: boolean }>`
    font-size: ${({isOnline}) => (isOnline ? "1rem" : "0.7rem")};
    color: ${({isOnline, theme}) =>
            isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const MessagesSection = styled.div`
    display: flex;
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

`;

export const MessageTimestamp = styled.div`
    font-size: 0.8rem;
    color: ${({theme}) => theme.global.transparentTextShadow};
    margin-bottom: 5px;
`;

export const NoMessages = styled.div`
    text-align: center;
    color: ${({theme}) => theme.dialogs.noMessagesColor};
    font-size: 1rem;
    padding: 20px;
    background-color: ${({theme}) => theme.dialogs.noMessagesBg};
    border-radius: 6px;
`;
