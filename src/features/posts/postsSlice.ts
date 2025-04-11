// features/posts/postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from './types/postType';

interface PostsState {
    items: PostType[];
}

const initialState: PostsState = {
    items: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<PostType[]>) {
            state.items = action.payload;
        },
        addPost(state, action: PayloadAction<PostType>) {
            state.items.unshift(action.payload);
        },
        updatePost(state, action: PayloadAction<PostType>) {
            const index = state.items.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        removePost(state, action: PayloadAction<string>) {
            state.items = state.items.filter(post => post.id !== action.payload);
        },
        clearPosts(state) {
            state.items = [];
        },
    },
});


export const selectAllPosts = (state: { posts: PostsState }) => state.posts.items;

export const { setPosts, addPost, updatePost, removePost, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
