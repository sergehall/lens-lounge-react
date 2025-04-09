import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {pageConfig} from "../config/PageConfig";
import {RouteManager} from "../utils/routeManager";
import Chats from "../features/whisper/chats/Chats";
import Contacts from "../features/whisper/contacts/Contacts";
import LayoutWrapper from "../layouts/LayoutWrapper";


const AppRoutes: React.FC = () => {
    // Retrieve state from Redux store
    const whisperPageState = useSelector((state: RootState) => state.pageContent.whisperPage);

    // Helper Components for specific routes
    const DialogsComponent: React.FC = () => (
        <Chats/>
    );

    const ContactsComponent: React.FC = () => (
        <Contacts contacts={whisperPageState.contactList}/>
    );

    return (
        <Routes>
            {/* General Routes */}
            {Object.entries(pageConfig).map(([key, pageConfig]) => (
                <Route
                    key={key}
                    path={key === "home" ? "/" : `/${key}`}
                    element={
                        <LayoutWrapper pageConfig={pageConfig}>
                            <pageConfig.component/>
                        </LayoutWrapper>
                    }
                />
            ))}

            {/* Whisper Parent Route */}
            <Route path={RouteManager.getSidebarPaths().whisper}>
                {/* Default Redirect */}
                <Route
                    index
                    element={<Navigate to={RouteManager.getNestedPaths().chats} replace/>}
                />

                {/* Dialogs Route */}
                <Route
                    path={RouteManager.getNestedPaths().chats}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <DialogsComponent/>
                        </LayoutWrapper>
                    }
                />

                {/* Dialogs with User ID */}
                <Route
                    path={RouteManager.getNestedPaths().chatsUserId}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <DialogsComponent/>
                        </LayoutWrapper>
                    }
                />

                {/* Contacts Route */}
                <Route
                    path={RouteManager.getNestedPaths().contacts}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsComponent/>
                        </LayoutWrapper>
                    }
                />

                {/* Contacts with User ID */}
                <Route
                    path={RouteManager.getNestedPaths().contactsUserId}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsComponent/>
                        </LayoutWrapper>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;