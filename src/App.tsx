import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageTitles } from "./config/page-titles";
import { navLinks } from "./config/nav-links";
import "./App.css";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import PageLayout from "./layouts/pageLayout";
import {pageConfig} from "./config/page-сonfig";

const App: React.FC = () => {
    return (
            <div className="App">
                <Header title={PageTitles.HOME} className="App-header" />
                <nav className="App-nav">
                    <Sidebar links={navLinks} className="Sidebar" />
                </nav>
                <div className="App-content">
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
                </div>
            </div>
    );
};

export default App;
