// src/AppProviders.tsx

import React from "react";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {ThemeProvider} from "styled-components";
import theme from "./themes/theme";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";

interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({children}) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
};

export default AppProviders;
