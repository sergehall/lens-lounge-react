import styled from "styled-components";

export const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 2px 0 5px var(--semi-transparent-border);
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
    color: ${(props) => (props.isActive ? "var(--link-active-text)" : "var(--link-color)")};
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    background-color: ${(props) => (props.isActive ? "var(--link-active-bg)" : "transparent")};

    &:hover {
        background-color: var(--link-hover-bg);
        color: var(--link-hover-text);
    }

    @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 8px;
    }
`;