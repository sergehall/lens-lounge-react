import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Dialogs from "../features/dialogs/Dialogs";
import Contacts from "../features/dialogs/contacts/Contacts";
import {RootState} from "../app/store";
import {LayoutWrapper} from "../layouts/Layout-wrapper";
import {pageConfig} from "../config/Page-сonfig";

interface AppRoutesProps {
    state: RootState;
}

const AppRoutes: React.FC<AppRoutesProps> = ({state}) => {
    // Helper Components for specific routes
    const DialogsComponent: React.FC = () => (
        <Dialogs
            dialogs={state.content.dialogsPage.dialogs}
        />
    );

    const ContactsComponent: React.FC = () => (
        <Contacts
            contacts={state.content.dialogsPage.contacts}
        />
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

            {/* Dialogs Routes */}
            <Route path="/dialogs">
                <Route index element={<Navigate to="chats" replace/>}/>

                {/* Chats Route */}
                <Route
                    path="chats"
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.dialogsChats}>
                            <DialogsComponent/>
                        </LayoutWrapper>
                    }
                />

                <Route
                    path="chats/:userId"
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.dialogsChats}>
                            <DialogsComponent/>
                        </LayoutWrapper>
                    }
                />

                {/* Contacts Route */}
                <Route
                    path="contacts"
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.dialogsContacts}>
                            <ContactsComponent/>
                        </LayoutWrapper>
                    }
                />

                <Route
                    path="contacts/:userId"
                    element={
                        <LayoutWrapper layoutConfig={pageConfig.dialogsContacts}>
                            <ContactsComponent/>
                        </LayoutWrapper>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;