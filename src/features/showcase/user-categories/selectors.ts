// src/features/showcase/user-categories/selectors.ts

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { Category } from '../../categories/types/category.types';
import { categoriesMock } from '../../categories/mock/categoriesMock';
import placeholderImageDefault from '../../../assets/images/placeholderImageDefault.png';
import { UserBlogsState } from '../user-blogs/userBlogsSlice';

const selectUserBlogsState = (state: RootState): UserBlogsState => state.showcasePage.userBlogs;

export const selectUserBlogsByCategory = createSelector(
  [selectUserBlogsState],
  (userBlogsState) => userBlogsState.blogsByCategory
);

export const makeSelectUserCategoriesFromBlogs = (username: string) =>
  createSelector([selectUserBlogsByCategory], (blogsByCategory): Category[] => {
    const categories: Category[] = [];

    Object.entries(blogsByCategory).forEach(([categoryName, blogs]) => {
      const hasUserBlogs = blogs.some(
        (blog) => blog.author.toLowerCase() === username.toLowerCase()
      );

      if (hasUserBlogs) {
        const matchedCategory = categoriesMock.find(
          (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        );

        categories.push({
          name: matchedCategory?.name || categoryName,
          imageUrl: matchedCategory?.imageUrl || placeholderImageDefault,
          featured: false,
        });
      }
    });

    return categories;
  });
