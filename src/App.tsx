import React from "react";
import {PageTitles} from "./config/page-titles";
import {navLinks} from "./config/nav-links";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import logo from './assets/images/logo.svg';
import {AppContainer, AppHeader, AppSidebar, AppContent} from "./app.styles";
import GlobalStyles from "./global-styles";
import AppRoutes from "./routes/AppRoutes";
import {RootState} from "./app/store";

interface AppProps {
    state: RootState;
}

const App: React.FC<AppProps> = ({ state }) => {
    return (
        <>
            <GlobalStyles/>
            <AppContainer>
                {/* Header */}
                <AppHeader>
                    <Header
                        title={PageTitles.HOME}
                        logoUrl={logo}
                        homeUrl="/"
                    />
                </AppHeader>

                {/* Sidebar */}
                <AppSidebar>
                    <Sidebar links={navLinks} className="Sidebar"/>
                </AppSidebar>

                {/* Content */}
                <AppContent>
                    <AppRoutes state={state} />
                </AppContent>
            </AppContainer>
        </>
    );
};

export default App;