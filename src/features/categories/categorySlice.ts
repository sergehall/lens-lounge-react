// /src/features/categories/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';
import {mockCategories} from "./mock/mockCategories";


export interface Category {
    name: string;
    imageUrl: string;
    featured: boolean;
}

interface CategoryState {
    list: Category[];
}

const initialState: CategoryState = {
    list: mockCategories,
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // Add actions here later if needed
    },
});

export default categorySlice.reducer;
