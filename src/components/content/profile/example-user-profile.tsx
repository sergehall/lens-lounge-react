// src/components/content/profile/example-user-profile.tsx

import React from 'react';
import Profile from './Profile';

const ExampleUserProfile: React.FC = () => {
    return (
        <Profile
            className="Profile"
            firstName="Serge"
            lastName="Hall"
            birthday="January 1, 1990"
            education="Bachelor's in Computer Science"
            website="https://sergioartg.com"
            photoUrl="https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4"
        />
    );
};

export default ExampleUserProfile;
