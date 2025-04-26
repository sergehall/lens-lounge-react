import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {mockCategoryBlogs} from "./mock/mockCategoryBlogs";
import {BlogPreview} from "./types/blogs.types";

interface CategoryBlogsState {
    [categoryName: string]: BlogPreview[];
}

const initialState: CategoryBlogsState = mockCategoryBlogs;

const categoryBlogsSlice = createSlice({
    name: 'categoryBlogs',
    initialState,
    reducers: {
        // Add real-time loading, posts-slider creation, etc. later
        setCategoryBlogs(state, action: PayloadAction<{ category: string; blogs: BlogPreview[] }>) {
            state[action.payload.category] = action.payload.blogs;
        },
    },
});

export const { setCategoryBlogs } = categoryBlogsSlice.actions;
export default categoryBlogsSlice.reducer;
