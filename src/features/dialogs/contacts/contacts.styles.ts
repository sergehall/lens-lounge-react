import styled from "styled-components";

export const ContactsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 5px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    border-right: 1px solid ${({ theme }) => theme.contacts.userListBorderColor};
    padding: 10px;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    box-shadow: ${({ theme }) => theme.global.boxShadowNeon};
`;

export const UserItem = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.global.boxShadowNeonShort};
    background-color: ${({ isActive, theme }) =>
    isActive ? theme.contacts.userBgActiveColor : theme.global.secondaryColor};
    color: ${({ isActive, theme }) =>
    isActive ? theme.contacts.userItemActiveColor : theme.contacts.userItemInactiveColor};
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.contacts.userBgActiveColor};
    }
`;

export const Avatar = styled.img<{ large?: boolean }>`
    width: ${({ large }) => (large ? "80px" : "40px")};
    height: ${({ large }) => (large ? "80px" : "40px")};
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.global.semiTransparentBorder};
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
    font-size: ${({ isOnline }) => (isOnline ? "1rem" : "0.7rem")};
    color: ${({ isOnline, theme }) =>
    isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
`;

export const UserInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    box-shadow: ${({ theme }) => theme.global.boxShadowNeon};
`;

export const UserInfoDetails = styled.div`
    text-align: center;

    & > p {
        margin: 5px 0;
        color: ${({ theme }) => theme.text.colorDarkGray};
    }
`;

export const NoContacts = styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.contacts.noContactsColor};
    padding: 20px;
    background-color: ${({ theme }) => theme.contacts.noContactsBg};
    border-radius: 6px;
`;
