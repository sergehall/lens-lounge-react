import styled from "styled-components";

export const InfoSection = styled.div`
    padding: 20px; 
    background-color: ${({theme}) => theme.global.secondaryColor};
    border-radius: 8px;
    box-shadow: ${({theme}) => theme.global.boxShadowNeon};
`;


export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    padding-left: 10px;
`;

export const UserStatus = styled.span<{ isOnline: boolean }>`
    font-size: ${({isOnline}) => (isOnline ? "1rem" : "0.7rem")};
    color: ${({isOnline, theme}) =>
            isOnline ? theme.highlights.white : theme.global.transparentTextShadow};
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 10px;
    text-overflow: ellipsis;
`;

export const UserInfoDetails = styled.div`
    padding: 10px;
    text-align: left;

    & > p {
        font-size: ${({theme}) => theme.text.fontSizeContacts};
        color: ${({theme}) => theme.text.colorDarkCharcoalBlue};
        margin: 8px 0;
    }

    /* Apply hover effect only on the span with class 'hoverable' */

    .hoverable {
        color: ${({theme}) => theme.text.colorDarkCharcoalBlue};
        cursor: pointer; /* Show pointer to indicate interactivity */
        transition: color 0.3s ease;
    }

    .hoverable:hover {
        color: ${({theme}) => theme.highlights.yellow}; /* Highlight dynamic text on hover */
    }
`;