import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 5px;
    max-width: 100%;
    background-color: var(--profile-bg);
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfilePhoto = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ProfileField = styled.div`
    display: flex;
    gap: 5px;
`;

export const ProfileLabel = styled.span`
    font-weight: bold;
`;

export const ProfileValue = styled.span`
    a {
        color: var(--profile-link-color);
        text-decoration: none;

        &:hover {
            color: var(--link-hover-text);
            text-decoration: underline;
        }
    }
`;
