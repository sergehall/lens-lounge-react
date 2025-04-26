import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/whisper/chats/chatSlice";
import contactListReducer from "../features/whisper/contacts/contactListSlice";

import headerReducer from "../components/header/headerSlice";
import sidebarReducer from "../components/sidebar/sidebarSlice";
import pageInsightReducer from "../features/page-insight/pageInsightSlice";
import newsPageReducer from "../features/news/newsPageSlice";
import postsReducer from "../features/posts/postsSlice";
import homePageReducer from "../features/posts/posts-slider/postsSliderSlice";
import postInteractionsReducer from "../features/posts/interactions/postInteractionsSlice";
import categoriesReducer from "../features/categories/categorySlice";
import categoryBlogsReducer from "../features/category-blogs-page/CategoryBlogsPageSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,  // RTK Query API cache

        // Layout / UI
        layoutHeader: headerReducer,
        layoutSidebar: sidebarReducer,

        // AI features
        pageInsight: pageInsightReducer,

        homePage: homePageReducer,

        newsPage: newsPageReducer,

        categories: categoriesReducer,
        categoryBlogs: categoryBlogsReducer,

        posts: postsReducer,
        postInteractions: postInteractionsReducer,

        // Whisper features
        chat: chatReducer,
        contactList: contactListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
