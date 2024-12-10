import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {PageTitles} from "./config/page-titles";
import {navLinks} from "./config/nav-links";
import Sidebar from "./components/sidebar/Sidebar";
import PageLayout from "./layouts/page-layout";
import {pageConfig} from "./config/page-сonfig";
import Header from "./components/header/Header";
import logo from './logo.svg';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Header
                    title={PageTitles.HOME}
                    logoUrl={logo}
                    homeUrl="/"
                />
            </header>
            <nav className="App-nav">
                <Sidebar links={navLinks} className="Sidebar"/>
            </nav>
            <div className="App-content">
                <Routes>
                    {Object.entries(pageConfig).map(([key, {bannerImage, summaryDescription, component}]) => (
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
