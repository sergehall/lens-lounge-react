// Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {AuthProvider} from "./contexts/AuthContext";
import {RootState} from "./app/store";
import {dialogData} from "./features/dialogs/dialog-data";
import {postsDataMock} from "./features/my-posts/mocks/posts-data-mock";
import {contactData} from "./features/dialogs/contacts/contacts-data";

// ID for the root DOM node
const ROOT_ID = 'root';

// Initialize the root React application
const rootElement = document.getElementById(ROOT_ID);
if (!rootElement) {
    throw new Error(`No element found with ID ${ROOT_ID}`);
}
const root = ReactDOM.createRoot(rootElement);

// Define the rootState object
const rootState: RootState = {
    header: {},
    sidebar: {},
    content: {
        homePage: {},
        profilePage: {
            profile: {},
            posts: postsDataMock
        },
        dialogsPage: {
            dialogs: dialogData,
            posts: postsDataMock,
            contacts: contactData
        }
    }
};

// Render the application
function renderApp(rootState: RootState) {
    root.render(
        <React.StrictMode>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App state={rootState}/>
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </React.StrictMode>
    );
}

// Initial rendering with the state
renderApp(rootState);