// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';

// RTK Query API
import { apiSlice } from '../api/apiSlice';
// Features
import headerReducer from '../components/header/headerSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import pageInsightReducer from '../features/page-insight/pageInsightSlice';
import postsReducer from '../features/posts/postsSlice';
import homePageReducer from '../features/posts/posts-slider/postsSliderSlice';
import postInteractionsReducer from '../features/posts/interactions/postInteractionsSlice';
import categoriesReducer from '../features/categories/categorySlice';
import categoryBlogsReducer from '../features/category-blogs-page/categoryBlogsPageSlice';
import showcasePageReducer from '../features/showcase/showcasePageReducer';
import myCategoriesReducer from '../features/showcase/user-categories/UserCategoriesSlice';
import authReducer from '../features/auth/authSlice';
import whisperPageReducer from '../features/whisper/whisperPageReducer';
import technologiesReducer from '../features/technologies/technologiesSlice';
import newsPageReducer from '../features/news/newsPageSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

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
    whisperPage: whisperPageReducer,
    technologiesPage: technologiesReducer,

    // Posts
    posts: postsReducer,
    postInteractions: postInteractionsReducer,

    // users
    users: userReducer,

    // Categories
    categories: categoriesReducer,
    myCategories: myCategoriesReducer,
    categoryBlogs: categoryBlogsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
