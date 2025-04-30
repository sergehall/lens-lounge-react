import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pageConfig } from "../config/PageConfig";
import Chats from "../features/whisper/chats/Chats";
import Contacts from "../features/whisper/contacts/Contacts";
import LayoutWrapper from "../layouts/LayoutWrapper";
import { selectContacts } from "../features/whisper/contacts/contactListSlice";
import CategoryBlogsPage from "../features/category-blogs-page/CategoryBlogsPage";
import MyCategoryBlogsPage from "../features/showcase/my-blogs/MyCategoryBlogsPage";
import {RouteManager} from "../utils/routeManager";

// Moved outside component for cleaner render
const ChatsContainer: React.FC = () => <Chats />;
const ContactsContainer: React.FC = () => {
    const contacts = useSelector(selectContacts);
    return <Contacts contacts={contacts} />;
};

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* General Routes */}
            {Object.entries(pageConfig).map(([key, config]) => (
                <Route
                    key={key}
                    path={key === "home" ? "/" : `/${key}`}
                    element={
                        <LayoutWrapper pageConfig={config}>
                            <config.component />
                        </LayoutWrapper>
                    }
                />
            ))}

            {/* Category Page (Dynamic) for HomePage */}
            <Route
                path={RouteManager.getCategoryRoutePattern()}
                element={
                    <LayoutWrapper pageConfig={pageConfig.home}>
                        <CategoryBlogsPage />
                    </LayoutWrapper>
                }
            />

            {/* MyCategory Page (Dynamic) for ShowcasePage */}
            <Route
                path={RouteManager.getShowcaseCategoryRoutePattern()}
                element={
                    <LayoutWrapper pageConfig={pageConfig.showcase}>
                        <MyCategoryBlogsPage />
                    </LayoutWrapper>
                }
            />

            {/* WhisperPage Routes */}
            <Route path={RouteManager.getSidebarPaths().whisper}>
                {/* Redirect from /whisper to /whisper/chats */}
                <Route
                    index
                    element={<Navigate to={RouteManager.getWhisperChatsRoot()} replace />}
                />

                {/* List of all chats */}
                <Route
                    path="chats"
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer />
                        </LayoutWrapper>
                    }
                />

                {/* Specific chat by chatId */}
                <Route
                    path="chats/:chatId"
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer />
                        </LayoutWrapper>
                    }
                />

                {/* List of all contacts */}
                <Route
                    path="contacts"
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsContainer />
                        </LayoutWrapper>
                    }
                />

                {/* Specific contact by contactId */}
                <Route
                    path="contacts/:contactId"
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsContainer />
                        </LayoutWrapper>
                    }
                />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
