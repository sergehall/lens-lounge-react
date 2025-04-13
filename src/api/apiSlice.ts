import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://api.example.com";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => ({
        // 🔹 Sign In API
        signIn: builder.mutation<{ token: string; refreshToken: string }, { email: string; password: string }>({
            query: (credentials) => ({
                url: "/auth/signin",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("refreshToken", data.refreshToken);
                } catch (error) {
                    console.error("Sign-in failed:", error);
                }
            },
        }),

        // 🔹 Fetch user details
        getUser: builder.query<{ id: string; name: string; email: string }, void>({
            query: () => "/auth/user",
        }),

        // 🔹 Update User Details
        updateUser: builder.mutation<{ name: string; email: string }, { name: string; email: string }>({
            query: (updatedUser) => ({
                url: "/auth/user",
                method: "PUT",
                body: updatedUser,
            }),
        }),

        // 🔹 Sign Out API
        signOut: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/signout",
                method: "POST",
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    dispatch(apiSlice.util.resetApiState());
                } catch (error) {
                    console.error("Sign-out failed:", error);
                }
            },
        }),

        // 🔹 SinglePost Management APIs
        getPosts: builder.query<{ posts: { id: string; title: string; content: string }[]; totalPages: number }, { page: number }>({
            query: ({ page }) => `/posts?page=${page}`,
        }),

        getPostById: builder.query<{ id: string; title: string; content: string }, string>({
            query: (id) => `/posts/${id}`,
        }),

        createPost: builder.mutation<void, { title: string; content: string }>({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
        }),

        // 🔹 WebSocket for Real-time SinglePost Updates
        subscribeToPosts: builder.query<{ id: string; title: string; content: string }[], void>({
            queryFn: () => ({ data: [] }),
            async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved }) {
                const ws = new WebSocket(`${BASE_URL.replace("https", "wss")}/posts`);

                try {
                    ws.onmessage = (event) => {
                        const newPost = JSON.parse(event.data);
                        updateCachedData((draft) => {
                            draft.unshift(newPost);
                        });
                    };

                    await cacheEntryRemoved;
                    ws.close();
                } catch (error) {
                    console.error("WebSocket error:", error);
                }
            },
        }),
    }),
});

// 🔹 Export API hooks
export const {
    useSignInMutation,
    useGetUserQuery,
    useUpdateUserMutation,
    useSignOutMutation,
    useGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useSubscribeToPostsQuery,
} = apiSlice;
