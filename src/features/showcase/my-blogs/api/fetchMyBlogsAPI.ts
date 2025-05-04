import { BlogPreview } from '../types/blogs.types';
import { allBlogMocks } from '../../../category-blogs-page/mocks/allBlogMocks';

export const fetchMyBlogsAPI = async (categoryName: string): Promise<BlogPreview[]> => {
  const normalizedCategoryName = Object.keys(allBlogMocks).find(
    (key) => key.toLowerCase() === categoryName.toLowerCase()
  );

  if (normalizedCategoryName) {
    return allBlogMocks[normalizedCategoryName];
  } else {
    throw new Error('Category not found');
  }
};
