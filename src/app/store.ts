import { configureStore  } from "@reduxjs/toolkit";
import contentSlice from "./slices/content-slice";
import headerSlice from "./slices/header-slice";
import sidebarSlice from "./slices/sidebar-slice";

// **Configure Redux store**

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer, // Reducer for header state
        sidebar: sidebarSlice.reducer, // Reducer for sidebar state
        content: contentSlice.reducer, // Reducer for content state
    },
});

// **Infer RootState and AppDispatch from the store**

export type RootState = ReturnType<typeof store.getState>; // Defines the structure of the Redux store state
export type AppDispatch = typeof store.dispatch; // Type for dispatching actions

// **Export actions**

export const { updateHeader } = headerSlice.actions; // Export header actions
export const { updateLinks } = sidebarSlice.actions; // Export sidebar actions
export const { updateChatMessages } = contentSlice.actions; // Export content actions
