import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonSegment } from "./navigation-buttons.styles";
import {RouteManager} from "../../utils/routeManager";

const NavigationButtons: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    const chats = RouteManager.getSidebarPaths().whisper + '/' + RouteManager.getNestedPaths().chats
    const contacts = RouteManager.getSidebarPaths().whisper  + '/' + RouteManager.getNestedPaths().contacts

    const isChatsActive = location.pathname.startsWith(chats);
    const isContactsActive = location.pathname.startsWith(contacts);

    return (
        <ButtonSegment>
            <button
                onClick={() => navigate(chats)}
                className={isChatsActive ? "active" : ""}
            >
                Chats
            </button>
            <button
                onClick={() => navigate(contacts)}
                className={isContactsActive ? "active" : ""}
            >
                Contacts
            </button>
        </ButtonSegment>
    );
};

export default NavigationButtons;

