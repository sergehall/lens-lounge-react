import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contacts from "../features/whisper/contacts/Contacts";
import { RootState } from "../app/store";
import { LayoutWrapper } from "../layouts/Layout-wrapper";
import { pageConfig } from "../config/Page-сonfig";
import {RouteManager} from "../utils/routeManager";
import Chats from "../features/whisper/chats/Chats";

interface AppRoutesProps {
    state: RootState;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ state }) => {
    // Helper Components for specific routes
    const DialogsComponent: React.FC = () => (
        <Chats chats={state.content.whisperPage.chats} />
    );

    const ContactsComponent: React.FC = () => (
        <Contacts contacts={state.content.whisperPage.contacts} />
    );

    return (
        <Routes>
            {/* General Routes */}
            {Object.entries(pageConfig).map(([key, config]) => (
                <Route
                    key={key}
                    path={key === "home" ? "/" : `/${key}`}
                    element={
                        <LayoutWrapper layoutConfig={config}>
                            {config.component(state)}
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
