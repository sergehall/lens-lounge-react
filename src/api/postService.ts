import {useCreatePostMutation, useGetPostByIdQuery, useGetPostsQuery, useSubscribeToPostsQuery} from "./apiSlice";


/**
 * Hook for managing paginated posts.
 */
export const usePosts = (page: number) => {
    const { data, error, isLoading } = useGetPostsQuery({ page });
    const [createPost, createPostState] = useCreatePostMutation();

    return {
        posts: data?.posts || [], // ✅ Avoid potential undefined errors
        totalPages: data?.totalPages || 1, // ✅ Ensure pagination safety
        error,
        isLoading,
        createPost,
        createPostState,
    };
};

/**
 * Hook for fetching a single post by ID.
 */
export const usePost = (id: string) => {
    return useGetPostByIdQuery(id);
};

/**
 * Hook for real-time WebSocket updates.
 */
export const useLivePosts = () => {
    return useSubscribeToPostsQuery();
};
