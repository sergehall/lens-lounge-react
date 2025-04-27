import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BlogPreview } from './types/blogs.types';
import {fetchMyBlogsAPI} from "./api/fetchMyBlogsAPI";


// Define the state structure
export interface MyBlogsState {
    blogsByCategory: {
        [categoryName: string]: BlogPreview[];
    };
    loading: {
        [categoryName: string]: boolean;
    };
}

const initialState: MyBlogsState = {
    blogsByCategory: {},
    loading: {},
};


// typed createAsyncThunk
export const loadCategoryBlogs = createAsyncThunk<
    { category: string; blogs: BlogPreview[] }, // Return type
    string,                                    // Argument type (categoryName)
    { rejectValue: string }                    // ThunkAPI type
>(
    'categoryBlogs/loadCategoryBlogs',
    async (categoryName, { rejectWithValue }) => {
        try {
            const blogs = await fetchMyBlogsAPI(categoryName);
            return { category: categoryName, blogs };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to load category blogs');
        }
    }
);

// Create slice
const myBlogsSlice = createSlice({
    name: 'categoryBlogs',
    initialState,
    reducers: {
        setCategoryBlogs(
            state,
            action: PayloadAction<{ category: string; blogs: BlogPreview[] }>
        ) {
            state.blogsByCategory[action.payload.category] = action.payload.blogs;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCategoryBlogs.pending, (state, action) => {
                const categoryName = action.meta.arg;
                state.loading[categoryName] = true;
            })
            .addCase(loadCategoryBlogs.fulfilled, (state, action) => {
                state.blogsByCategory[action.payload.category] = action.payload.blogs;
                state.loading[action.payload.category] = false;
            })
            .addCase(loadCategoryBlogs.rejected, (state, action) => {
                const categoryName = action.meta.arg;
                state.loading[categoryName] = false;
            });
    }
});

export const { setCategoryBlogs } = myBlogsSlice.actions;
export default myBlogsSlice.reducer;

