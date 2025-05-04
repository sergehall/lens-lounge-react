import { createSlice } from '@reduxjs/toolkit';

import { mockCategories } from './mock/mockCategories';
import { Category } from './types/category.types';

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
