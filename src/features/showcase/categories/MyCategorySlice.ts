import { createSlice } from '@reduxjs/toolkit';
import {Category} from "../../categories/types/category.types";
import {mockCategories} from "../../categories/mock/mockCategories";



export interface CategoryState {
    list: Category[];
}

const initialState: CategoryState = {
    list: mockCategories,
};

const myCategorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // Add actions here later if needed
    },
});

export default myCategorySlice.reducer;
