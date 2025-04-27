import { createSelector } from '@reduxjs/toolkit';
import {RootState} from "../../../app/store";

/**
 * Base selector for categories slice.
 */
const selectCategoriesState = (state: RootState) => state.categories;

/**
 * Selects list of categories.
 */
export const selectCategories = createSelector(
    [selectCategoriesState],
    (categoriesState) => categoriesState.list
);
