import {configureStore} from "@reduxjs/toolkit";
import contentReducer from "./slices/contentSlice";
import headerReducer from "./slices/headerSlice";
import sidebarReducer from "./slices/sidebarSlice";
import pageContentReducer from "./slices/pageContentSlice";
import {apiSlice} from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Manages API cache
        header: headerReducer,  // Manages UI state
        sidebar: sidebarReducer,
        content: contentReducer,
        pageContent: pageContentReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// **Infer RootState and AppDispatch from the store**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;