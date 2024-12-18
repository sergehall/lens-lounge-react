import React from "react";
import { Routes, Route } from "react-router-dom";
import {pageConfig} from "./config/page-сonfig";
import PageLayout from "./layouts/page-layout";
import Dialogs from "./components/content/dialogs/Dialogs";
import {dialogData} from "./components/content/dialogs/dialog-data";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {Object.entries(pageConfig).map(
                ([key, { bannerImage, summaryDescription, component }]) => (
                    <Route
                        key={key}
                        path={key === "home" ? "/" : `/${key}`}
                        element={
                            <PageLayout
                                bannerImage={bannerImage}
                                summaryDescription={summaryDescription}
                            >
                                {component}
                            </PageLayout>
                        }
                    >
                        {/* Nested Route for Dialogs */}
                        {key === "messages" && (
                            <Route
                                path=":userId"
                                element={
                                    <Dialogs
                                        dialogs={dialogData}
                                        className="Dialogs"
                                    />
                                }
                            />
                        )}
                    </Route>
                )
            )}
        </Routes>
    );
};

export default AppRoutes;
