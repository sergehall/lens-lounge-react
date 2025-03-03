import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { AppContainer, AppHeader, AppSidebar, AppContent } from "./app.styles";
import GlobalStyles from "./global-styles";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                {/* Header */}
                <AppHeader>
                    <Header />
                </AppHeader>

                {/* Sidebar */}
                <AppSidebar>
                    <Sidebar />
                </AppSidebar>

                {/* Content */}
                <AppContent>
                    <AppRoutes />
                </AppContent>
            </AppContainer>
        </>
    );
};

export default App;