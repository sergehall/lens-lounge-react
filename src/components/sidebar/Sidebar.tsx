import React from "react";
import {
    SidebarContainer,
    SidebarList,
    SidebarItem,
    SidebarLink,
} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {RoutePaths} from "../../config/nav-links";

interface SidebarProps {
    links: { name: string; url: typeof RoutePaths[keyof typeof RoutePaths]; }[];
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
