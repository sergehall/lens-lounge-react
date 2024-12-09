import styled from "styled-components";

// Container for the entire dialog layout
export const DialogsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr; /* Left: user list, Right: messages */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--content-bg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// User List Styling
export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 1px solid #ddd;
    padding: 10px;
    background-color: #f9f9f9;
`;

// Individual User Styling
export const UserItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #f0f0f0;
    }

    &.activeUser {
        background-color: var(--highlight-color);
        color: #fff;
    }
`;

// User Avatar
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ddd;
`;

// User Details Styling
export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

// User Name
export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;

// User Status
export const UserStatus = styled.span`
    font-size: 0.8rem;
    color: #999;

    &.online {
        color: #00ff00; /* Bright green for online status */
    }
`;

// Last Active
export const LastActive = styled.span`
    font-size: 0.8rem; /* Match font size with .userStatus */
    color: #999;
`;

// Messages Section
export const MessagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Individual Message Styling
export const MessageItem = styled.div`
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 10px;
    word-wrap: break-word;

    &.fromMe {
        align-self: flex-end;
        background-color: var(--highlight-color);
        color: #fff;
        text-align: right;
    }

    &.fromUser {
        align-self: flex-start;
        background-color: #f0f0f0;
        color: #333;
    }
`;

// Timestamp Styling
export const MessageTimestamp = styled.span`
    font-size: 0.8rem;
    color: #999;
    margin-bottom: 5px;
`;

// No Messages Placeholder
export const NoMessages = styled.div`
    text-align: center;
    color: #888;
    font-size: 1rem;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 6px;
`;
