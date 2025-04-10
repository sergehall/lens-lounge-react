import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pageConfig } from "../config/PageConfig";
import { RouteManager } from "../utils/routeManager";
import Chats from "../features/whisper/chats/Chats";
import Contacts from "../features/whisper/contacts/Contacts";
import LayoutWrapper from "../layouts/LayoutWrapper";
import { selectContacts } from "../features/whisper/contacts/contactListSlice";

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

            {/* Whisper Routes */}
            <Route path={RouteManager.getSidebarPaths().whisper}>
                <Route
                    index
                    element={<Navigate to={RouteManager.getNestedPaths().chats} replace />}
                />
                <Route
                    path={RouteManager.getNestedPaths().chats}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer />
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().chatsUserId}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
                            <ChatsContainer />
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().contacts}
                    element={
                        <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
                            <ContactsContainer />
                        </LayoutWrapper>
                    }
                />
                <Route
                    path={RouteManager.getNestedPaths().contactsUserId}
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

// import React from "react";
// import {Routes, Route, Navigate} from "react-router-dom";
// import {useSelector} from "react-redux";
// import {pageConfig} from "../config/PageConfig";
// import {RouteManager} from "../utils/routeManager";
// import Chats from "../features/whisper/chats/Chats";
// import Contacts from "../features/whisper/contacts/Contacts";
// import LayoutWrapper from "../layouts/LayoutWrapper";
// import {selectContacts} from "../features/whisper/contacts/contactListSlice";
//
//
// const AppRoutes: React.FC = () => {
//     const contacts = useSelector(selectContacts);
//
//     // Helper Components for specific routes
//     const DialogsComponent: React.FC = () => (
//         <Chats/>
//     );
//
//     const ContactsComponent: React.FC = () => (
//         <Contacts contacts={contacts}/>
//     );
//
//     return (
//         <Routes>
//             {/* General Routes */}
//             {Object.entries(pageConfig).map(([key, pageConfig]) => (
//                 <Route
//                     key={key}
//                     path={key === "home" ? "/" : `/${key}`}
//                     element={
//                         <LayoutWrapper pageConfig={pageConfig}>
//                             <pageConfig.component/>
//                         </LayoutWrapper>
//                     }
//                 />
//             ))}
//
//             {/* Whisper Parent Route */}
//             <Route path={RouteManager.getSidebarPaths().whisper}>
//                 {/* Default Redirect */}
//                 <Route
//                     index
//                     element={<Navigate to={RouteManager.getNestedPaths().chats} replace/>}
//                 />
//
//                 {/* Dialogs Route */}
//                 <Route
//                     path={RouteManager.getNestedPaths().chats}
//                     element={
//                         <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
//                             <DialogsComponent/>
//                         </LayoutWrapper>
//                     }
//                 />
//
//                 {/* Dialogs with User ID */}
//                 <Route
//                     path={RouteManager.getNestedPaths().chatsUserId}
//                     element={
//                         <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
//                             <DialogsComponent/>
//                         </LayoutWrapper>
//                     }
//                 />
//
//                 {/* Contacts Route */}
//                 <Route
//                     path={RouteManager.getNestedPaths().contacts}
//                     element={
//                         <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
//                             <ContactsComponent/>
//                         </LayoutWrapper>
//                     }
//                 />
//
//                 {/* Contacts with User ID */}
//                 <Route
//                     path={RouteManager.getNestedPaths().contactsUserId}
//                     element={
//                         <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
//                             <ContactsComponent/>
//                         </LayoutWrapper>
//                     }
//                 />
//             </Route>
//         </Routes>
//     );
// };
//
// export default AppRoutes;