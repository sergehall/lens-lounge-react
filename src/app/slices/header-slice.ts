import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PageTitles} from "../../components/header/types/page-titles";
import logo from "../../assets/images/logo.svg";

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

export default headerSlice;