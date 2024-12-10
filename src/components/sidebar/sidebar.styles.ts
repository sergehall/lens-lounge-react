import styled from "styled-components";

export const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: ${({ theme }) => theme.header.navBg};
    border-radius: 8px;
    box-shadow: 2px 0 5px ${({ theme }) => theme.global.semiTransparentBorder};
`;

export const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 600px) {
        flex-direction: row;
        gap: 8px;
    }
`;

export const SidebarItem = styled.li`
    display: flex;
`;

export const SidebarLink = styled.div<{ isActive: boolean }>`
    text-decoration: none;
    color: ${({ theme, isActive }) =>
    isActive ? theme.links.activeText : theme.links.color};
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    background-color: ${({ theme, isActive }) =>
    isActive ? theme.links.activeBg : "transparent"};

    &:hover {
        background-color: ${({ theme }) => theme.links.hoverBg};
        color: ${({ theme }) => theme.links.hoverText};
        transform: scale(1.05); 
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 8px;
    }
`;
