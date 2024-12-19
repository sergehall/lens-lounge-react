// Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {AuthProvider} from "./contexts/AuthContext";

// ID for the root DOM node
const ROOT_ID = 'root';

// Initialize the root React application
const rootElement = document.getElementById(ROOT_ID) as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Render the application
function renderApp() {
    root.render(
        <React.StrictMode>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>,
        </React.StrictMode>
    );
}

renderApp();
