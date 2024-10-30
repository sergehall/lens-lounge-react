// src/components/Sidebar/Sidebar.tsx

import React from 'react';
import styles from './sidebar.module.css';
import { SidebarContainer, SidebarLink } from './sidebar.styles';

interface SidebarProps {
    links: { name: string; url: string }[];
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ links, className }) => {
    return (
        <SidebarContainer className={`${styles.sidebarContainer} ${className}`}>
            <ul className={styles.sidebarList}>
                {links.map((link, index) => (
                    <li key={index}>
                        <SidebarLink href={link.url}>{link.name}</SidebarLink>
                    </li>
                ))}
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
