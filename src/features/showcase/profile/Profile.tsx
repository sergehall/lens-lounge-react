import React from "react";
import { useSelector } from "react-redux";
import {
    ProfileContainer,
    ProfilePhoto,
    ProfileDetails,
    ProfileField,
    ProfileLabel,
    ProfileValue,
} from "./profile.styles";
import {RootState} from "../../../app/store";
import {ProfileState} from "./profileSlice";

const Profile: React.FC = () => {
    const profile: ProfileState = useSelector((state: RootState) => state.showcasePage.profile);

    const renderWebsite = () => {
        if (!profile.website) {
            return <span>Not available</span>;
        }
        return (
            <a href={profile.website} target="_blank" rel="noopener noreferrer">
                {profile.website}
            </a>
        );
    };

    return (
        <ProfileContainer>
            {/* Profile Photo */}
            <ProfilePhoto src={profile.photoUrl} alt={`${profile.firstName} ${profile.lastName}'s profile`} />

            {/* Profile Details */}
            <ProfileDetails>
                <ProfileField>
                    <ProfileLabel>Full name:</ProfileLabel>
                    <ProfileValue>{`${profile.firstName} ${profile.lastName}`}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Birthday:</ProfileLabel>
                    <ProfileValue>{profile.birthday}</ProfileValue>
                </ProfileField>
                <ProfileField>
                    <ProfileLabel>Education:</ProfileLabel>
                    <ProfileValue>{profile.education}</ProfileValue>
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



// import React from "react";
// import {
//     ProfileContainer,
//     ProfilePhoto,
//     ProfileDetails,
//     ProfileField,
//     ProfileLabel,
//     ProfileValue,
// } from "./profile.styles";
//
// interface ProfileProps {
//     photoUrl: string;
//     firstName: string;
//     lastName: string;
//     birthday: string;
//     education: string;
//     website: string;
// }
//
// const Profile: React.FC<ProfileProps> = ({
//                                              photoUrl,
//                                              firstName,
//                                              lastName,
//                                              birthday,
//                                              education,
//                                              website,
//                                          }) => {
//     const renderWebsite = () => {
//         if (!website) {
//             return <span>Not available</span>;
//         }
//         return (
//             <a href={website} target="_blank" rel="noopener noreferrer">
//                 {website}
//             </a>
//         );
//     };
//
//     return (
//         <ProfileContainer>
//             {/* Profile Photo */}
//             <ProfilePhoto src={photoUrl} alt={`${firstName} ${lastName}'s profile`} />
//
//             {/* Profile Details */}
//             <ProfileDetails>
//                 <ProfileField>
//                     <ProfileLabel>Name:</ProfileLabel>
//                     <ProfileValue>{`${firstName} ${lastName}`}</ProfileValue>
//                 </ProfileField>
//                 <ProfileField>
//                     <ProfileLabel>Birthday:</ProfileLabel>
//                     <ProfileValue>{birthday}</ProfileValue>
//                 </ProfileField>
//                 <ProfileField>
//                     <ProfileLabel>Education:</ProfileLabel>
//                     <ProfileValue>{education}</ProfileValue>
//                 </ProfileField>
//                 <ProfileField>
//                     <ProfileLabel>Website:</ProfileLabel>
//                     <ProfileValue>{renderWebsite()}</ProfileValue>
//                 </ProfileField>
//             </ProfileDetails>
//         </ProfileContainer>
//     );
// };
//
// export default Profile;
