import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

/**
 * Base selector for categoryBlogs slice.
 */
const selectCategoryBlogsState = (state: RootState) => state.categoryBlogs;

/**
 * Selects blogsByCategory object (memoized).
 */
export const selectBlogsByCategory = createSelector(
    [selectCategoryBlogsState],
    (categoryBlogsState) => categoryBlogsState
);

/**
 * Selects loading status (memoized).
 */
export const selectCategoryBlogsLoading = createSelector(
    [selectCategoryBlogsState],
    (categoryBlogsState) => categoryBlogsState.loading
);

/**
 * Dynamic selector: Select blogs for a specific category
 */
export const makeSelectBlogsForCategory = (categoryName: string) =>
    createSelector(
        [selectBlogsByCategory],
        (blogsByCategory) => blogsByCategory[categoryName] || []
    );
