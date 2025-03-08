import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navLinks } from "../config/nav-links";
import logo from "../assets/images/logo.svg";
import { PageTitles } from "../config/page-titles";
import contentSlice from "../features/whisper/chats/content-slice";


// Define interfaces for type safety
interface SidebarState {
    navigationLinks: typeof navLinks;
}

interface HeaderState {
    title: string;
    logoUrl: string;
    homeUrl: string;
}

// **Create slice for header**

const headerSlice = createSlice({
    name: "header",
    initialState: { title: PageTitles.HOME, logoUrl: logo, homeUrl: "/" } satisfies HeaderState,
    reducers: {
        updateHeader: (state, action: PayloadAction<Partial<HeaderState>>) => {
            Object.assign(state, action.payload);
        },
    },
});


// **Create slice for sidebar**

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { navigationLinks: [...navLinks] } satisfies SidebarState,
    reducers: {
        updateLinks: (state, action: PayloadAction<typeof navLinks>) => {
            state.navigationLinks = action.payload; // Update navigation links
        },
    },
});

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
