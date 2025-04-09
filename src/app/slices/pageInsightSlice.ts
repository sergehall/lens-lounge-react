import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    DEFAULT_PAGE_INSIGHT_CONTENT,
    DEFAULT_PAGE_INSIGHT_IMAGE_URL,
    DEFAULT_PAGE_INSIGHT_TITLE
} from "../../features/page-insight/constants/pageInsightDefaults";

interface PageInsightState {
    title: string;
    imageUrl: string;
    pageContent: string;
}

const initialState: PageInsightState = {
    title: DEFAULT_PAGE_INSIGHT_TITLE,
    imageUrl: DEFAULT_PAGE_INSIGHT_IMAGE_URL,
    pageContent: DEFAULT_PAGE_INSIGHT_CONTENT,
};


const pageInsightSlice = createSlice({
    name: "pageInsight",
    initialState,
    reducers: {
        setDynamicImageUrl: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload || DEFAULT_PAGE_INSIGHT_IMAGE_URL;
        },
        setDynamicPageContent: (state, action: PayloadAction<string>) => {
            state.pageContent = action.payload || DEFAULT_PAGE_INSIGHT_CONTENT;
        },
        setDynamicTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload || DEFAULT_PAGE_INSIGHT_TITLE;
        },
    },
});

export const { setDynamicImageUrl, setDynamicPageContent, setDynamicTitle } = pageInsightSlice.actions;
export default pageInsightSlice.reducer;