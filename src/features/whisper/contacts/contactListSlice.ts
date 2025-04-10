import { createSlice } from "@reduxjs/toolkit";
import { contactData, ContactsData } from "./contactsData";
import { RootState } from "../../../app/store";

interface ContactListState {
    list: ContactsData[];
}

const initialState: ContactListState = {
    list: contactData,
};

const contactListSlice = createSlice({
    name: "contactList",
    initialState,
    reducers: {},
});

export const selectContacts = (state: RootState): ContactsData[] =>
    state.contactList.list;

export default contactListSlice.reducer;
