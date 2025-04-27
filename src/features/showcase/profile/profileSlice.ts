import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DEFAULT_PROFILE} from "./mocks/defaultProfile";

export interface ProfileState {
    photoUrl: string;
    firstName: string;
    lastName: string;
    username: string;
    birthday: string;
    education: string;
    website: string;
}

// Empty initial state
const initialState: ProfileState = {
    photoUrl: "",
    firstName: "",
    lastName: "",
    username: "",
    birthday: "",
    education: "",
    website: "",
};

// Async thunk to fetch profile
export const loadProfile = createAsyncThunk<ProfileState>(
    'profile/loadProfile',
    async () => {
        // Instead of mocking with setTimeout, just return immediately
        // return initialState
        return DEFAULT_PROFILE;

        // In real app:
        // const response = await axios.get('/api/profile');
        // return response.data;

    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<ProfileState>) {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadProfile.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;