import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonSegment } from "./navigation-buttons.styles";

const NavigationButtons: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    const isChatsActive = location.pathname.startsWith("/dialogs/chats"); // Check if path starts with "/dialogs/chats"
    const isContactsActive = location.pathname.startsWith("/dialogs/contacts"); // Check if path starts with "/dialogs/contacts"

    return (
        <ButtonSegment>
            <button
                onClick={() => navigate("/dialogs/chats")}
                className={isChatsActive ? "active" : ""}
            >
                Chats
            </button>
            <button
                onClick={() => navigate("/dialogs/contacts")}
                className={isContactsActive ? "active" : ""}
            >
                Contacts
            </button>
        </ButtonSegment>
    );
};

export default NavigationButtons;

