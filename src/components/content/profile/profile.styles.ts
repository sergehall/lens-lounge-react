// src/components/profile/profile.styles.ts

import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px;
    max-width: 985px;
    background-color: var(--profile-bg);
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfilePhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
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
