import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {mockCategoryBlogs} from "./mock/mockCategoryBlogs";

export interface BlogPreview {
    id: string;
    title: string;
    summary: string;
    imageUrl: string;
    tags: string[];
    author: string;
    lastPosted: string;
}

interface CategoryBlogsState {
    [categoryName: string]: BlogPreview[];
}

const initialState: CategoryBlogsState = mockCategoryBlogs;

const categoryBlogsSlice = createSlice({
    name: 'categoryBlogs',
    initialState,
    reducers: {
        // Add real-time loading, post creation, etc. later
        setCategoryBlogs(state, action: PayloadAction<{ category: string; blogs: BlogPreview[] }>) {
            state[action.payload.category] = action.payload.blogs;
        },
    },
});

export const { setCategoryBlogs } = categoryBlogsSlice.actions;
export default categoryBlogsSlice.reducer;
