import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';


interface UserProfile {
    username: string;

}

const UserProfile = () => {
    const { uid } = useParams<{ uid: string }>();
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content">
            <Navbar />
            <h1>{userProfile.username}'s Profile</h1>
        </div>
    )

}

export default UserProfile;