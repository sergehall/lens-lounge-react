// src/components/Profile/Profile.tsx

import React from 'react';
import styles from './profile.module.css';
import { ProfileContainer, ProfilePhoto, ProfileDetails, ProfileField, ProfileLabel, ProfileValue } from './profile.styles';

interface ProfileProps {
    className?: string;
    firstName: string;
    lastName: string;
    birthday: string;
    education: string;
    website: string;
    photoUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ className, firstName, lastName, birthday, education, website, photoUrl }) => {
    return (
        <ProfileContainer className={`${styles.profileContainer} ${className}`}>
            <ProfilePhoto src={photoUrl} alt={`${firstName} ${lastName}'s profile`} />
            <ProfileDetails>
                <ProfileField>
                    <ProfileLabel>First Name:</ProfileLabel>
                    <ProfileValue>{firstName}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Last Name:</ProfileLabel>
                    <ProfileValue>{lastName}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Birthday:</ProfileLabel>
                    <ProfileValue>{birthday}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Education:</ProfileLabel>
                    <ProfileValue>{education}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Website:</ProfileLabel>
                    <ProfileValue><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></ProfileValue>
                </ProfileField>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
