// Define interfaces for type safety
import {navLinks} from "../../config/nav-links";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SidebarState {
    navigationLinks: typeof navLinks;
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { navigationLinks: [...navLinks] } satisfies SidebarState,
    reducers: {
        updateLinks: (state, action: PayloadAction<typeof navLinks>) => {
            state.navigationLinks = action.payload; // Update navigation links
        },
    },
});

export default sidebarSlice;

