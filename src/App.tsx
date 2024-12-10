import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageTitles } from "./config/page-titles";
import { navLinks } from "./config/nav-links";
import Sidebar from "./components/sidebar/Sidebar";
import PageLayout from "./layouts/page-layout";
import { pageConfig } from "./config/page-сonfig";
import Header from "./components/header/Header";
import logo from './logo.svg';
import { AppContainer, Header as StyledHeader, SidebarNav, ContentArea } from "./App.styles";

const App: React.FC = () => {
    return (
        <AppContainer>
            <StyledHeader>
                <Header
                    title={PageTitles.HOME}
                    logoUrl={logo}
                    homeUrl="/"
                />
            </StyledHeader>
            <SidebarNav>
                <Sidebar links={navLinks} className="Sidebar" />
            </SidebarNav>
            <ContentArea>
                <Routes>
                    {Object.entries(pageConfig).map(([key, { bannerImage, summaryDescription, component }]) => (
                        <Route
                            key={key}
                            path={key === "home" ? "/" : `/${key}`}
                            element={
                                <PageLayout bannerImage={bannerImage} summaryDescription={summaryDescription}>
                                    {component}
                                </PageLayout>
                            }
                        />
                    ))}
                </Routes>
            </ContentArea>
        </AppContainer>
    );
};

export default App;
