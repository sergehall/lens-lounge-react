import {useCreatePostMutation, useGetPostByIdQuery, useGetPostsQuery, useSubscribeToPostsQuery} from "./api-slice";

/**
 * Hook for managing posts.
 */
export const usePosts = (page: number) => {
    const { data: posts, error, isLoading } = useGetPostsQuery({ page });
    const [createPost, createPostState] = useCreatePostMutation();

    return {
        posts,
        error,
        isLoading,
        createPost,
        createPostState,
    };
};

/**
 * Hook for fetching a single post.
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
