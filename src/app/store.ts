import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./slices/contentSlice";
import headerSlice from "./slices/headerSlice";
import sidebarSlice from "./slices/sidebarSlice";
import pageContentSlice from "./slices/pageContentSlice";
import {apiSlice} from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
        sidebar: sidebarSlice.reducer,
        content: contentSlice.reducer,
        pageContent: pageContentSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer, // RTK Query reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// **Infer RootState and AppDispatch from the store**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// **Export actions**
export const { updateHeader } = headerSlice.actions;
export const { updateLinks } = sidebarSlice.actions;
export const { updateChatMessages } = contentSlice.actions;

export const { setDynamicImageUrl, setDynamicTitle , setDynamicPageContent} = pageContentSlice.actions;