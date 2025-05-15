import { createSelector } from '@reduxjs/toolkit';

import placeholderImageDefault from '../../assets/images/placeholderImageDefault.png';
import { RootState } from '../../app/store';
import { categoriesMock } from '../categories/mock/categoriesMock';
import { Category } from '../categories/types/category.types';

import { UserBlogsState } from './user-blogs/userBlogsSlice';

const selectUserBlogsState = (state: RootState): UserBlogsState => state.showcasePage.userBlogs;

export const makeSelectUserCategoriesFromBlogs = (username: string) =>
  createSelector([selectUserBlogsState], (userBlogsState) => {
    const categories: Category[] = [];

    Object.entries(userBlogsState.blogsByCategory).forEach(([categoryName, blogs]) => {
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
    console.log(categories, 'categories1111 UserCategories');
    return categories;
  });
