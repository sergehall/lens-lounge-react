import React from "react";
import {useNavigate} from "react-router-dom";
import {ButtonSegment} from "./navigation-buttons.styles";


const NavigationButtons: React.FC = () => {
    const navigate = useNavigate();

    return (
        <ButtonSegment>
            <button onClick={() => navigate("/dialogs/chats")}>Chats</button>
            <button onClick={() => navigate("/dialogs/contacts")}>Contacts</button>
        </ButtonSegment>
    );
};

export default NavigationButtons;
