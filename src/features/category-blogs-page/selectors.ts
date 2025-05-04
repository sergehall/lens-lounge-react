import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { CategoryBlogsState } from './categoryBlogsPageSlice';

const selectCategoryBlogsState = (state: RootState): CategoryBlogsState => state.categoryBlogs;

export const selectBlogsByCategory = createSelector(
  [selectCategoryBlogsState],
  (categoryBlogsState) => categoryBlogsState.blogsByCategory // Only the blogs part
);

export const selectCategoryBlogsLoading = (category: string) =>
  createSelector(
    [selectCategoryBlogsState],
    (categoryBlogsState) => categoryBlogsState.loading[category] || false
  );

export const makeSelectBlogsForCategory = (categoryName: string) =>
  createSelector([selectBlogsByCategory], (blogsByCategory) => blogsByCategory[categoryName] || []);
