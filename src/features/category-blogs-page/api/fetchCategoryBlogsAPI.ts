import { allBlogMocks } from '../mocks/allBlogMocks';
import { BlogPreview } from '../types/blogs.types';

export const fetchCategoryBlogsAPI = async (categoryName: string): Promise<BlogPreview[]> => {
  const key = categoryName.toLowerCase();

  const blogs = allBlogMocks[key];

  if (blogs) {
    return blogs;
  }

  throw new Error(`Category "${categoryName}" not found`);
};
