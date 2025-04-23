import {RootState} from "../../../app/store";

export const selectBlogsByCategory = (category: string) => (state: RootState) =>
    state.categoryBlogs[category] || [];
