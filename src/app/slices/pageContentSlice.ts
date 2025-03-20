import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageContentState {
    title: string;
    imageUrl: string;
    pageContent: string;
}

const DEFAULT_TITLE = "Default summarize title";
const DEFAULT_IMAGE_URL = "https://avatars.githubusercontent.com/u/87441904?s=200&v=4";
const DEFAULT_PAGE_CONTENT = "This is the default summary of the page.";

const initialState: PageContentState = {
    title: DEFAULT_TITLE,
    imageUrl: DEFAULT_IMAGE_URL,
    pageContent: DEFAULT_PAGE_CONTENT,
};

const pageContentSlice = createSlice({
    name: "pageContent",
    initialState,
    reducers: {
        setDynamicImageUrl: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload || DEFAULT_IMAGE_URL;
        },
        setDynamicPageContent: (state, action: PayloadAction<string>) => {
            state.pageContent = action.payload || DEFAULT_PAGE_CONTENT;
        },
        setDynamicTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload || DEFAULT_TITLE;
        },
    },
});

// ✅ Correct: Export actions from the slice
export const { setDynamicImageUrl, setDynamicPageContent, setDynamicTitle } = pageContentSlice.actions;
export default pageContentSlice.reducer;
