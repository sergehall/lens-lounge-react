import styled from "styled-components";

// Main profile container
export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 5px;
    background-color: var(--content-bg);
    margin-bottom: 5px;
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--transparent-border);
`;

// Profile photo styling
export const ProfilePhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
`;

// Profile details container
export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

// Profile field container
export const ProfileField = styled.div`
    display: flex;
    gap: 5px;
`;

// Profile label styling
export const ProfileLabel = styled.span`
    font-weight: bold;
`;

// Profile value styling
export const ProfileValue = styled.span`
    a {
        color: var(--header-nav-bg);
        text-decoration: none;

        &:hover {
            color: var(--link-hover-text);
            text-decoration: underline;
        }
    }
`;
