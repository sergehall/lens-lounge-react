import React from 'react';

interface ProfileProps {
    className: string;
}

const Profile: React.FC<ProfileProps> = () => {
    return (
        <div className="Profile">
            <h3>Profile</h3>
        </div>
    );
};

export default Profile;