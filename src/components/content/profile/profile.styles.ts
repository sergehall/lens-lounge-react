import styled from "styled-components";

// Main profile container
export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 5px;
    background-color: ${({ theme }) => theme.profile.containerBg};
    margin-bottom: ${({ theme }) => theme.spacing.default};
    color: ${({ theme }) => theme.profile.textColor};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: 0 4px 8px ${({ theme }) => theme.global.transparentBorder};
`;

// Profile photo styling
export const ProfilePhoto = styled.img`
    width: ${({ theme }) => theme.profile.photoSize};
    height: ${({ theme }) => theme.profile.photoSize};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    object-fit: cover;
`;

// Profile details container
export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.profile.detailsGap};
`;

// Profile field container
export const ProfileField = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.profile.fieldGap};
`;

// Profile label styling
export const ProfileLabel = styled.span`
    font-weight: bold;
`;

// Profile value styling
export const ProfileValue = styled.span`
    a {
        color: ${({ theme }) => theme.header.navBg};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.links.hoverText};
            text-decoration: underline;
        }
    }
`;
