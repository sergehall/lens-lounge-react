import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/whisper/chats/chatSlice";
import relatedPostsReducer from "../features/whisper/posts/relatedPostsSlice";
import contactListReducer from "../features/whisper/contacts/contactListSlice";

import headerReducer from "../components/header/headerSlice";
import sidebarReducer from "../components/sidebar/sidebarSlice";
import pageInsightReducer from "../features/page-insight/pageInsightSlice";
import newsPageReducer from "../features/news/newsPageSlice";

import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,  // RTK Query API cache

        // Layout / UI
        layoutHeader: headerReducer,
        layoutSidebar: sidebarReducer,

        // AI features
        pageInsight: pageInsightReducer,

        newsPage: newsPageReducer,

        // Whisper feature (modularized)
        chat: chatReducer,
        relatedPosts: relatedPostsReducer,
        contactList: contactListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// App-wide Redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
