import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BlogPreview } from './types/blogs.types';
import {fetchCategoryBlogsAPI} from "./api/fetchCategoryBlogsAPI";

interface CategoryBlogsState {
    [categoryName: string]: BlogPreview[];
}

const initialState: CategoryBlogsState = {};

// Thunk to fetch blogs for a specific category
export const loadCategoryBlogs = createAsyncThunk(
    'categoryBlogs/loadCategoryBlogs',
    async (categoryName: string) => {
        const blogs = await fetchCategoryBlogsAPI(categoryName);
        return { category: categoryName, blogs };
    }
);

const categoryBlogsSlice = createSlice({
    name: 'categoryBlogs',
    initialState,
    reducers: {
        setCategoryBlogs(
            state,
            action: PayloadAction<{ category: string; blogs: BlogPreview[] }>
        ) {
            state[action.payload.category] = action.payload.blogs;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadCategoryBlogs.fulfilled, (state, action) => {
            state[action.payload.category] = action.payload.blogs;
        });
    },
});

export const { setCategoryBlogs } = categoryBlogsSlice.actions;
export default categoryBlogsSlice.reducer;

