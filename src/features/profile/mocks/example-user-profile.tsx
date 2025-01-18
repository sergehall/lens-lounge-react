import React from "react";
import Profile from "../Profile";

const ExampleUserProfile: React.FC = () => {
    const userProfile = {
        firstName: "Serge",
        lastName: "Hall",
        birthday: "January 1, 1990",
        education: "Bachelor's in Computer Science",
        website: "https://sergioartg.com",
        photoUrl:
            "https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4",
    };

    return <Profile {...userProfile} />;
};

export default ExampleUserProfile;
