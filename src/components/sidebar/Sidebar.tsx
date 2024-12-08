import React from "react";
import { SidebarContainer } from "./sidebar.styles";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

// Define the structure of each navigation link
export interface NavLinkProps {
    name: string;
    url: string;
}

// Define props for the Sidebar component
interface SidebarProps {
    links: NavLinkProps[]; // Array of navigation links
    className: string;    // Optional additional class name for the Sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ links, className = "" }) => {
    return (
        <SidebarContainer className={`${styles.sidebarContainer} ${className}`}>
            <ul className={styles.sidebarList}>
                {links.map((link) => (
                    <li key={link.url} className={styles.sidebarItem}>
                        <NavLink
                            to={link.url} // Use React Router's NavLink for navigation
                            className={({ isActive }) =>
                                `${styles.sidebarLink} ${isActive ? styles.activeLink : ""}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
