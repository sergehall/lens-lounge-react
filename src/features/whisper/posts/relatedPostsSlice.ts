// features/whisper/posts/relatedPostsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import {PostProps} from "../../showcase/my-posts/post/Post";
import {postsDataMock} from "../../showcase/my-posts/mocks/postsDataMock";

interface RelatedPostsState {
    posts: PostProps[];
}

const initialState: RelatedPostsState = {
    posts: postsDataMock,
};

const relatedPostsSlice = createSlice({
    name: "relatedPosts",
    initialState,
    reducers: {},
});

export default relatedPostsSlice.reducer;
