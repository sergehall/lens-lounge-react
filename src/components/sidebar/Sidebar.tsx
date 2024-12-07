import React from "react";
import styles from "./sidebar.module.css";
import { SidebarContainer, SidebarLink } from "./sidebar.styles";

interface SidebarLink {
    name: string;
    url: string;
}

interface SidebarProps {
    links: SidebarLink[];
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ links, className = "" }) => {
    return (
        <SidebarContainer className={`${styles.sidebarContainer} ${className}`}>
            <ul className={styles.sidebarList}>
                {links.map((link) => (
                    <li key={link.url}>
                        <SidebarLink href={link.url} title={link.name}>
                            {link.name}
                        </SidebarLink>
                    </li>
                ))}
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
