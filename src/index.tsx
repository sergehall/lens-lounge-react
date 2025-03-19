import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import { AuthProvider } from "./contexts/AuthContext";

// ID for the root DOM node
const ROOT_ID = 'root';

// Initialize the root React application
const rootElement = document.getElementById(ROOT_ID);
if (!rootElement) {
    throw new Error(`No element found with ID ${ROOT_ID}`);
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

// Render the application
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
