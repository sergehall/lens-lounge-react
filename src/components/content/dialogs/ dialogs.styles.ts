import styled from "styled-components";

export const DialogsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--content-bg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 1px solid #ddd;
    padding: 10px;
    background-color: #f9f9f9;
`;

export const UserItem = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ isActive }) => (isActive ? "var(--highlight-color)" : "#fff")};
    color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ddd;
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
    color: ${({ isOnline }) => (isOnline ? "#00ff00" : "#999")};
`;

export const MessagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MessageItem = styled.div<{ fromMe: boolean }>`
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 10px;
    align-self: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
    background-color: ${({ fromMe }) => (fromMe ? "var(--highlight-color)" : "#f0f0f0")};
    color: ${({ fromMe }) => (fromMe ? "#fff" : "#333")};
    word-wrap: break-word;
`;

export const MessageTimestamp = styled.div`
    font-size: 0.8rem;
    color: #999;
    margin-bottom: 5px;
`;

export const NoMessages = styled.div`
    text-align: center;
    color: #888;
    font-size: 1rem;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 6px;
`;
