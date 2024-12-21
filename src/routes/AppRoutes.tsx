import React from "react";
import { Routes, Route } from "react-router-dom";
import { pageConfig } from "../config/page-сonfig";
import PageLayout from "../layouts/page-layout";
import Dialogs from "../features/dialogs/Dialogs";
import { RootState } from "../app/store";

interface AppRoutesProps {
    state: RootState;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ state }) => {
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
                                {component(state) }
                            </PageLayout>
                        }
                    >
                        {/* Nested Route for Dialogs */}
                        {key === "dialogs" && (
                            <Route
                                path=":userId"
                                element={
                                    <Dialogs
                                        dialogs={state.dialogsPage.dialogs}
                                        className={state.dialogsPage.className}
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
