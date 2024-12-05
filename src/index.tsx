// Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ID for the root DOM node
const ROOT_ID = 'root';

// Initialize the root React application
const rootElement = document.getElementById(ROOT_ID) as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Render the application
function renderApp() {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderApp();

// Optional performance reporting
// Uncomment and use if performance metrics are needed
// reportWebVitals(console.log);
