// src/components/sidebar/Sidebar.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
    SidebarContainer,
    SidebarList,
    SidebarItem,
    SidebarLink,
} from "./sidebar.styles";
import { NavLink } from "react-router-dom";
import {NavLinks} from "./nav-links";

const Sidebar: React.FC = () => {
    // Get links from Redux store
    const links = useSelector((state: RootState) => state.layoutSidebar.navigationLinks);

    return (
        <SidebarContainer role="navigation" aria-label="Sidebar Navigation">
            <SidebarList>
                {links.map((link: NavLinks) => (
                    <SidebarItem key={link.url}>
                        <NavLink
                            to={link.url}
                            style={{ textDecoration: "none" }}
                        >
                            {({ isActive }: { isActive: boolean }) => (
                                <SidebarLink $isActive={isActive}>
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