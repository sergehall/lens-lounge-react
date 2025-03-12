import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { LayoutWrapper } from "../layouts/Layout-wrapper";
import { pageConfig } from "../config/Page-сonfig";
import { RouteManager } from "../utils/routeManager";
import Chats from "../components/content/whisper/chats/Chats";
import Contacts from "../components/content/whisper/contacts/Contacts";

const AppRoutes: React.FC = () => {
    // Retrieve state from Redux store
    const whisperPageState = useSelector((state: RootState) => state.content.whisperPage);

    // Helper Components for specific routes
    const DialogsComponent: React.FC = () => (
        <Chats />
    );

    const ContactsComponent: React.FC = () => (
        <Contacts contacts={whisperPageState.contactList} />
    );

    return (
        <Routes>
            {/* General Routes */}
            {Object.entries(pageConfig).map(([key, pageConfig]) => (
                <Route
                    key={key}
                    path={key === "home" ? "/" : `/${key}`}
                    element={
                        <LayoutWrapper layoutConfig={pageConfig}>
                            <pageConfig.component />
                        </LayoutWrapper>
                    }
                />
            ))}

            {/* Whisper Parent Route */}
            <Route path={RouteManager.getSidebarPaths().whisper}>
                {/* Default Redirect */}
                <Route
                    index
                    element={<Navigate to={RouteManager.getNestedPaths().chats} replace />}
                />

                {/* Dialogs Route */}
                <Route
                    path={RouteManager.getNestedPaths().chats}
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.whisperDialogs}>
                            <DialogsComponent />
                        </LayoutWrapper>
                    }
                />

                {/* Dialogs with User ID */}
                <Route
                    path={RouteManager.getNestedPaths().chatsUserId}
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.whisperDialogs}>
                            <DialogsComponent />
                        </LayoutWrapper>
                    }
                />

                {/* Contacts Route */}
                <Route
                    path={RouteManager.getNestedPaths().contacts}
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.whisperContacts}>
                            <ContactsComponent />
                        </LayoutWrapper>
                    }
                />

                {/* Contacts with User ID */}
                <Route
                    path={RouteManager.getNestedPaths().contactsUserId}
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.whisperContacts}>
                            <ContactsComponent />
                        </LayoutWrapper>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;