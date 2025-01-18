import React from "react";
import {
    SidebarContainer,
    SidebarList,
    SidebarItem,
    SidebarLink,
} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {NavLinks} from "../../config/nav-links";


interface SidebarProps {
    links: NavLinks[];
}


const Sidebar: React.FC<SidebarProps> = ({ links }) => {
    return (
        <SidebarContainer role="navigation" aria-label="Sidebar Navigation">
            <SidebarList>
                {links.map((link) => (
                    <SidebarItem key={link.url}>
                        <NavLink
                            to={link.url}
                            style={{ textDecoration: "none" }}
                        >
                            {({ isActive }: { isActive: boolean }) => ( // Explicitly type isActive
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
