import React from "react";
import {
    SidebarContainer,
    SidebarList,
    SidebarItem,
    SidebarLink,
} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {RouteManager} from "../../utils/routeManager";

const SidebarPaths = RouteManager.getSidebarPaths();

interface SidebarProps {
    links: { name: string; url: typeof SidebarPaths[keyof typeof SidebarPaths]; }[];
}


const Sidebar: React.FC<SidebarProps> = ({links}) => {
    return (
        <SidebarContainer>
            <SidebarList>
                {links.map((link) => (
                    <SidebarItem key={link.url}>
                        <NavLink
                            to={link.url}
                            style={{textDecoration: "none"}}
                        >
                            {({isActive}) => (
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
