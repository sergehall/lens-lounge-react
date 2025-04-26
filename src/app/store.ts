// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';

// RTK Query API
import { apiSlice } from '../api/apiSlice';

// Features
import chatReducer from '../features/whisper/chats/chatSlice';
import contactListReducer from '../features/whisper/contacts/contactListSlice';
import headerReducer from '../components/header/headerSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import pageInsightReducer from '../features/page-insight/pageInsightSlice';
import newsPageReducer from '../features/news/newsPageSlice';
import postsReducer from '../features/posts/postsSlice';
import homePageReducer from '../features/posts/posts-slider/postsSliderSlice';
import postInteractionsReducer from '../features/posts/interactions/postInteractionsSlice';
import categoriesReducer from '../features/categories/categorySlice';
import categoryBlogsReducer from '../features/category-blogs-page/CategoryBlogsPageSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // 🔥 Handles RTK Query caching

        // Layout / UI
        layoutHeader: headerReducer,
        layoutSidebar: sidebarReducer,

        // AI Features
        pageInsight: pageInsightReducer,

        // Pages
        homePage: homePageReducer,
        newsPage: newsPageReducer,

        // Posts
        posts: postsReducer,
        postInteractions: postInteractionsReducer,

        // Categories
        categories: categoriesReducer,
        categoryBlogs: categoryBlogsReducer,

        // Whisper Features
        chat: chatReducer,
        contactList: contactListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
