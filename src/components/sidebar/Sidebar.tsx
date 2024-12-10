import React from "react";
import {
    SidebarContainer,
    SidebarList,
    SidebarItem,
    SidebarLink,
} from "./sidebar.styles";
import { NavLink } from "react-router-dom";

interface SidebarProps {
    links: { name: string; url: string }[];
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ links, className = "" }) => {
    return (
        <SidebarContainer className={className}>
            <SidebarList>
                {links.map((link) => (
                    <SidebarItem key={link.url}>
                        <NavLink
                            to={link.url}
                            style={{ textDecoration: "none" }}
                        >
                            {({ isActive }) => (
                                <SidebarLink isActive={isActive}>
                                    {link.name}
                                </SidebarLink>
                            )}
                        </NavLink>
                    </SidebarItem>
                ))}
            </SidebarList>
        </SidebarContainer>
    );
};

export default Sidebar;
