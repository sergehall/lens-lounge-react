// Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {AuthProvider} from "./contexts/AuthContext";
import {rootState, RootState} from "./app/store";


// ID for the root DOM node
const ROOT_ID = 'root';

// Initialize the root React application
const rootElement = document.getElementById(ROOT_ID);
if (!rootElement) {
    throw new Error(`No element found with ID ${ROOT_ID}`);
}
const root = ReactDOM.createRoot(rootElement);


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

// Initial rendering with the rootState
renderApp(rootState);