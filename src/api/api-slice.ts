import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
    prepareHeaders: async (headers) => {
        let token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<{ token: string; refreshToken: string }, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('refreshToken', data.refreshToken);
                } catch (error) {
                    console.error('Login failed:', error);
                }
            },
        }),

        refreshAuthToken: builder.mutation<{ token: string }, { refreshToken: string }>({
            query: ({ refreshToken }) => ({
                url: '/auth/refresh',
                method: 'POST',
                body: { refreshToken },
            }),
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('token', data.token);
                } catch (error) {
                    console.error('Token refresh failed:', error);
                }
            },
        }),

        getUser: builder.query<{ id: string; name: string; email: string }, void>({
            query: () => '/auth/user',
        }),

        getPosts: builder.query<{ posts: { id: string; title: string; content: string }[]; totalPages: number }, { page: number }>({
            query: ({ page }) => `/posts?page=${page}`,
        }),

        getPostById: builder.query<{ id: string; title: string; content: string }, string>({
            query: (id) => `/posts/${id}`,
        }),

        createPost: builder.mutation<void, { title: string; content: string }>({
            query: (newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost,
            }),
        }),

        subscribeToPosts: builder.query<{ id: string; title: string; content: string }[], void>({
            queryFn: () => ({ data: [] }),
            async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved }) {
                const ws = new WebSocket('wss://api.example.com/posts');

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
                    console.error('WebSocket error:', error);
                }
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRefreshAuthTokenMutation,
    useGetUserQuery,
    useGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useSubscribeToPostsQuery,
} = apiSlice;
