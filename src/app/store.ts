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
import categoryBlogsReducer from '../features/category-blogs-page/categoryBlogsPageSlice';
import showcasePageReducer from "../features/showcase/showcasePageReducer";
import myCategoriesReducer from "../features/showcase/categories/MyCategorySlice";
import authReducer from "../features/auth/authSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // 🔥 Handles RTK Query caching

        // Auth
        auth: authReducer,

        // Layout / UI
        layoutHeader: headerReducer,
        layoutSidebar: sidebarReducer,

        // AI Features
        pageInsight: pageInsightReducer,

        // Pages
        homePage: homePageReducer,
        showcasePage: showcasePageReducer,
        newsPage: newsPageReducer,

        // Posts
        posts: postsReducer,
        postInteractions: postInteractionsReducer,

        // MyCategories
        categories: categoriesReducer,
        myCategories: myCategoriesReducer,
        categoryBlogs: categoryBlogsReducer,

        // WhisperPage
        chat: chatReducer,
        contactList: contactListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
