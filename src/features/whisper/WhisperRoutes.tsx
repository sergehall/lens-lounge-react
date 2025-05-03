import React from "react";
import {Navigate, Route} from "react-router-dom";
import {RouteManager} from "../../utils/routeManager";
import {pageConfig} from "../../config/PageConfig";
import {generateFeatureRoute} from "../../utils/generateFeatureRoutes";

/**
 * Generates whisper-specific routes using a utility function.
 */
export const WhisperRoutes = () => (
    <>
        <Route
            path={RouteManager.getSidebarPaths().whisper}
            element={<Navigate to={RouteManager.getWhisperChatsRoot()} replace/>}
        />

        {/* Dialog routes */}
        {generateFeatureRoute("whisper/chat", pageConfig.whisperDialogs)}
        {generateFeatureRoute("whisper/chat/:chatId", pageConfig.whisperDialogs)}

        {/* Contact routes */}
        {generateFeatureRoute("whisper/contacts", pageConfig.whisperContacts)}
        {generateFeatureRoute("whisper/contacts/:contactId", pageConfig.whisperContacts)}
    </>
);


// // WhisperRoutes.ts
// import React from "react";
// import { Navigate, Route } from "react-router-dom";
// import Chat from "./chat/Chat";
// import Contacts from "./contacts/Contacts";
// import LayoutWrapper from "../../layouts/LayoutWrapper";
// import { RouteManager } from "../../utils/routeManager";
// import { pageConfig } from "../../config/PageConfig";
//
// /**
//  * WhisperRoutes returns a list of <Route /> elements inside a fragment.
//  * This function should be called inside <Routes> (not used as a component).
//  */
// export const WhisperRoutes = () => (
//     <>
//         <Route path={RouteManager.getSidebarPaths().whisper}>
//             <Route
//                 index
//                 element={<Navigate to={RouteManager.getWhisperChatsRoot()} replace />}
//             />
//             <Route
//                 path="chat"
//                 element={
//                     <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
//                         <Chat />
//                     </LayoutWrapper>
//                 }
//             />
//             <Route
//                 path="chat/:chatId"
//                 element={
//                     <LayoutWrapper pageConfig={pageConfig.whisperDialogs}>
//                         <Chat />
//                     </LayoutWrapper>
//                 }
//             />
//             <Route
//                 path="contacts"
//                 element={
//                     <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
//                         <Contacts />
//                     </LayoutWrapper>
//                 }
//             />
//             <Route
//                 path="contacts/:contactId"
//                 element={
//                     <LayoutWrapper pageConfig={pageConfig.whisperContacts}>
//                         <Contacts />
//                     </LayoutWrapper>
//                 }
//             />
//         </Route>
//     </>
// );
