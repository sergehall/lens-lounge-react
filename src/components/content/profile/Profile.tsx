import React from "react";
import {
    ProfileContainer,
    ProfilePhoto,
    ProfileDetails,
    ProfileField,
    ProfileLabel,
    ProfileValue,
} from "./profile.styles";

interface ProfileProps {
    photoUrl: string;
    firstName: string;
    lastName: string;
    birthday: string;
    education: string;
    website: string;
}

const Profile: React.FC<ProfileProps> = ({
                                             photoUrl,
                                             firstName,
                                             lastName,
                                             birthday,
                                             education,
                                             website,
                                         }) => {
    const renderWebsite = () => {
        if (!website) {
            return <span>Not available</span>;
        }
        return (
            <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
            </a>
        );
    };

    return (
        <ProfileContainer>
            {/* Profile Photo */}
            <ProfilePhoto src={photoUrl} alt={`${firstName} ${lastName}'s profile`} />

            {/* Profile Details */}
            <ProfileDetails>
                <ProfileField>
                    <ProfileLabel>Name:</ProfileLabel>
                    <ProfileValue>{`${firstName} ${lastName}`}</ProfileValue>
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
                    <ProfileValue>{renderWebsite()}</ProfileValue>
                </ProfileField>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
