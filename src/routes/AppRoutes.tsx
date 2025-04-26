import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {pageConfig} from "../config/PageConfig";
import {RouteManager} from "../utils/routeManager";
import Chats from "../features/whisper/chats/Chats";
import Contacts from "../features/whisper/contacts/Contacts";
import LayoutWrapper from "../layouts/LayoutWrapper";
import {selectContacts} from "../features/whisper/contacts/contactListSlice";
import CategoryPage from "../features/category-blogs-page/CategoryBlogsPage";

// Moved outside component for cleaner render
const ChatsContainer: React.FC = () => <Chats/>;
const ContactsContainer: React.FC = () => {
    const contacts = useSelector(selectContacts);
    return <Contacts contacts={contacts}/>;
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
                            <config.component/>
                        </LayoutWrapper>
                    }
                />
            ))}

            {/* Category Page (Dynamic) */}
            <Route
                path={RouteManager.getCategoryRoutePattern()}
                element={
                    <LayoutWrapper pageConfig={pageConfig.home}>
                        <CategoryPage />
                    </LayoutWrapper>
                }
            />

            {/* Whisper Routes */}
            <Route path={RouteManager.getSidebarPaths().whisper}>
                <Route
                    index
                    element={<Navigate to={RouteManager.getNestedPaths().chats} replace/>}
                />
                <Route
                    path={RouteManager.getNestedPaths().chats}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer/>
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().chatsUserId}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer/>
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().contacts}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsContainer/>
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().contactsUserId}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsContainer/>
                        </LayoutWrapper>
                    }
                />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
};

export default AppRoutes;