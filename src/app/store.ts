import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./slices/content-slice";
import headerSlice from "./slices/header-slice";
import sidebarSlice from "./slices/sidebar-slice";
import pageContentSlice from "./slices/page-content-slice";

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
        sidebar: sidebarSlice.reducer,
        content: contentSlice.reducer,
        pageContent: pageContentSlice.reducer,
    },
});

// **Infer RootState and AppDispatch from the store**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// **Export actions**
export const { updateHeader } = headerSlice.actions;
export const { updateLinks } = sidebarSlice.actions;
export const { updateChatMessages } = contentSlice.actions;

export const { setDynamicImageUrl, setDynamicTitle , setDynamicPageContent} = pageContentSlice.actions;