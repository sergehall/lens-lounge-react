import {configureStore} from "@reduxjs/toolkit";
import contentReducer from "./slices/contentSlice";
import headerReducer from "./slices/headerSlice";
import sidebarReducer from "./slices/sidebarSlice";
import pageInsightReducer from "./slices/pageInsightSlice";
import {apiSlice} from "../api/apiSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,  // Manages API cache
        layoutHeader: headerReducer, // Manages UI state
        layoutSidebar: sidebarReducer,
        pageContent: contentReducer,
        pageInsight: pageInsightReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


// **Infer RootState and AppDispatch from the store**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;