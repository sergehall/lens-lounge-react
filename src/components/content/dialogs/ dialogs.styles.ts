import styled from "styled-components";

export const DialogsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dialogs.containerBg};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 1px solid ${({ theme }) => theme.dialogs.userListBorderColor};
    padding: 10px;
    background-color: ${({ theme }) => theme.dialogs.userListBg};
`;

export const UserItem = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ isActive, theme }) =>
            isActive ? theme.dialogs.userItemActiveBg : '#fff'};
    color: ${({ isActive, theme }) =>
            isActive ? theme.dialogs.userItemActiveColor : theme.dialogs.userItemInactiveColor};
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.dialogs.userItemHoverBg};
    }
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.dialogs.avatarBorderColor};
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
    font-size: 0.8rem;
    color: ${({ isOnline, theme }) =>
            isOnline ? theme.highlights.white : theme.global.transparentBorder};
`;

export const MessagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

export const MessageItem = styled.div<{ fromMe: boolean }>`
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 10px;
    align-self: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
    background-color: ${({ fromMe, theme }) =>
    fromMe ? theme.dialogs.messageFromMeBg : theme.dialogs.messageFromOtherBg};
    color: ${({ fromMe, theme }) =>
    fromMe ? theme.dialogs.messageFromMeColor : theme.dialogs.messageFromOtherColor};
    word-wrap: break-word;
`;

export const MessageTimestamp = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.global.textColor};
    margin-bottom: 5px;
`;

export const NoMessages = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.dialogs.noMessagesColor};
    font-size: 1rem;
    padding: 20px;
    background-color: ${({ theme }) => theme.dialogs.noMessagesBg};
    border-radius: 6px;
`;
