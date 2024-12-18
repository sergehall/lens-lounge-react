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
import Dialogs from "./components/content/dialogs/Dialogs";
import GlobalStyles from "./global-styles";
import {dialogData} from "./components/content/dialogs/dialog-data";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles /> {/* Global styles applied here */}
            <AppContainer>
                {/* Header */}
                <StyledHeader>
                    <Header
                        title={PageTitles.HOME}
                        logoUrl={logo}
                        homeUrl="/"
                    />
                </StyledHeader>

                {/* Sidebar */}
                <SidebarNav>
                    <Sidebar links={navLinks} className="Sidebar" />
                </SidebarNav>

                {/* Content */}
                <ContentArea>
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
                </ContentArea>
            </AppContainer>
        </>
    );
};

export default App;

// const App: React.FC = () => {
//     return (
//         <AppContainer>
//             {/* Header */}
//             <StyledHeader>
//                 <Header
//                     title={PageTitles.HOME}
//                     logoUrl={logo}
//                     homeUrl="/"
//                 />
//             </StyledHeader>
//
//             {/* Sidebar */}
//             <SidebarNav>
//                 <Sidebar links={navLinks} className="Sidebar" />
//             </SidebarNav>
//
//             {/* Content */}
//             <ContentArea>
//                 <Routes>
//                     {Object.entries(pageConfig).map(([key, { bannerImage, summaryDescription, component }]) => (
//                         <Route
//                             key={key}
//                             path={key === "home" ? "/" : `/${key}`}
//                             element={
//                                 <PageLayout bannerImage={bannerImage} summaryDescription={summaryDescription}>
//                                     {component}
//                                 </PageLayout>
//                             }
//                         >
//                             {/* Nested Route for Dialogs */}
//                             {key === "messages" && (
//                                 <Route
//                                     path=":userId"
//                                     element={
//                                         <Dialogs dialogs={dialogsDataMock} className="Dialogs" />
//                                     }
//                                 />
//                             )}
//                         </Route>
//                     ))}
//                 </Routes>
//             </ContentArea>
//         </AppContainer>
//     );
// };
//
// export default App;