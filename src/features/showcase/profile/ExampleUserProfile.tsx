import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {users} from "../../users/mocks/usersMock";
import Profile from "./Profile";
import {AppDispatch} from "../../../app/store";
import {setProfile} from "./profileSlice";
import {DEFAULT_PROFILE} from "./mocks/defaultProfile";

const ExampleUserProfile: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const user0 = users.find(user => user.userId === '100') ?? {};

        const userProfile = {...DEFAULT_PROFILE, ...user0};

        dispatch(setProfile(userProfile));
    }, [dispatch]);

    return <Profile/>;
};

export default ExampleUserProfile;

