import React from "react";
import { useLocation } from "react-router";

export const DynamicTitle: React.FC = () => {
    const location = useLocation();
    const path: string = location.pathname.slice(1) || "Home";
    const formattedTitle: string = path.charAt(0).toUpperCase() + path.slice(1);

    return <>{formattedTitle}</>;
};
