// Define interfaces for type safety
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { navLinks } from './nav-links';

interface SidebarState {
  navigationLinks: typeof navLinks;
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { navigationLinks: [...navLinks] } satisfies SidebarState,
  reducers: {
    updateLinks: (state, action: PayloadAction<typeof navLinks>) => {
      state.navigationLinks = action.payload; // Update navigation links
    },
  },
});

export const { updateLinks } = sidebarSlice.actions;
export default sidebarSlice.reducer;
