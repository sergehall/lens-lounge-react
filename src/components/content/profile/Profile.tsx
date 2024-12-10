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
    return (
        <ProfileContainer>
            <ProfilePhoto src={photoUrl} alt={`${firstName} ${lastName}'s profile`} />
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
                    <ProfileValue>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            {website}
                        </a>
                    </ProfileValue>
                </ProfileField>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
