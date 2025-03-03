import styled from "styled-components";


export const WhisperContainer = styled.div`
    display: flex;
    padding: 5px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadow};
`;

export const ChatsOrContactsInfoSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 5px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    border-radius: 8px;
`;

export const UserListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 5px;
`;

export const UserList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    border-right: 1px solid ${({theme}) => theme.contacts.userListBorderColor};
    padding: 10px;
    background-color: ${({theme}) => theme.global.backgroundColor};
    box-shadow: ${({theme}) => theme.global.boxShadowNeonShort};
`;

export const UserItem = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: ${({theme}) => theme.global.boxShadowNeonShort};
    background-color: ${({$isActive, theme}) =>
            $isActive ? theme.contacts.userBgActiveColor : theme.global.secondaryColor};
    color: ${({$isActive, theme}) =>
            $isActive ? theme.contacts.userItemActiveColor : theme.contacts.userItemInactiveColor};
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({theme}) => theme.contacts.userBgActiveColor};
    }
`;

export const Avatar = styled.img<{ $isActive: boolean; $large: boolean }>` // Use $isActive and $large
    width: ${({$large}) => ($large ? "100px" : "40px")};
    height: ${({$large}) => ($large ? "100px" : "40px")};
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${({theme, $isActive}) =>
            $isActive ? theme.highlights.white : theme.global.semiTransparentBorder};
`;


export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
`;

export const UserStatus = styled.span<{ $isOnline: boolean }>` // Use $isOnline as a transient prop
    font-size: ${({$isOnline}) => ($isOnline ? "1rem" : "0.7rem")};
    color: ${({$isOnline, theme}) =>
            $isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const NoContacts = styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${({theme}) => theme.text.colorDarkCharcoalBlue};
    padding: 20px;
    background-color: ${({theme}) => theme.global.secondaryColor};
    border-radius: 6px;
`;

