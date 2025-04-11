import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {postsDataMock} from "../posts/mocks/postsDataMock";
import {PostProps} from "../posts/Post";

interface HomePageState {
    posts: PostProps[];
    loading: boolean;
    error: string | null;
}

const initialState: HomePageState = {
    posts: [],
    loading: false,
    error: null,
};

export const fetchHomePosts = createAsyncThunk<PostProps[]>("homePage/fetchPosts", async () => {
    // Your real API call here
    return await new Promise<PostProps[]>((resolve) =>
        setTimeout(() => {
            resolve(postsDataMock); // mocked posts
        }, 500)
    );
});

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        clearHomePosts(state) {
            state.posts = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomePosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomePosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(fetchHomePosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch posts";
            });
    },
});

export const selectHomePosts = (state: RootState) => state.homePage.posts;
export const selectHomeLoading = (state: RootState) => state.homePage.loading;
export const selectHomeError = (state: RootState) => state.homePage.error;

export const { clearHomePosts } = homePageSlice.actions;
export default homePageSlice.reducer;
