// src/components/sidebar/Sidebar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../hooks/reduxHooks';

import { SidebarContainer, SidebarList, SidebarItem, SidebarLink } from './sidebar.styles';
import { NavLinks } from './nav-links';

const Sidebar: React.FC = () => {
  const links = useAppSelector((state) => state.layoutSidebar.navigationLinks);

  return (
    <SidebarContainer role="navigation" aria-label="Sidebar Navigation">
      <SidebarList>
        {links.map((link: NavLinks) => (
          <SidebarItem key={link.url}>
            <NavLink to={link.url} style={{ textDecoration: 'none' }}>
              {({ isActive }: { isActive: boolean }) => (
                <SidebarLink $isActive={isActive}>{link.name}</SidebarLink>
              )}
            </NavLink>
          </SidebarItem>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
