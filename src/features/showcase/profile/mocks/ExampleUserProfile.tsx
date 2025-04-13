import React from "react";
import Profile from "../Profile";
import {users} from "../../../users/mocks/usersMock";

const ExampleUserProfile: React.FC = () => {

    // Default profile values
    const DEFAULT_PROFILE = {
        photoUrl: "https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4",
        firstName: "Serge",
        lastName: "Hall",
        birthday: "January 1, 1990",
        education: "Bachelor's in Computer Science",
        website: "https://sergioartg.com",
    };

// Find user with userId: 0 or fallback to an empty object
    const user0 = users.find(user => user.userId === '100') ?? {};

// Merge user data with defaults
    const userProfile = { ...DEFAULT_PROFILE, ...user0 };

    return <Profile {...userProfile} />;
};

export default ExampleUserProfile;
