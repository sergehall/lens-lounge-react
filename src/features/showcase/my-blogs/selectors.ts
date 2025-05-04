import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

import { MyBlogsState } from './myCategoryBlogsPageSlice';

const selectCategoryBlogsState = (state: RootState): MyBlogsState => state.categoryBlogs;

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
