// Simulate a real API fetch call
import {allBlogMocks} from "../mocks/allBlogMocks";
import {BlogPreview} from "../types/blogs.types";

export const fetchCategoryBlogsAPI = async (categoryName: string): Promise<BlogPreview[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const blogs = allBlogMocks[categoryName];
            if (blogs) {
                resolve(blogs);
            } else {
                reject(new Error('Category not found'));
            }
        }, 200); // simulate network delay
    });
};
