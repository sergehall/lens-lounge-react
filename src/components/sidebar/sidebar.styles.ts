import styled from "styled-components";

// Sidebar container
export const SidebarContainer = styled.nav`
    background-color: var(--header-nav-bg);
    color: var(--link-color);
    box-shadow: 2px 0 5px var( --transparent-border);
    max-width: 120px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    @media (max-width: 600px) {
        max-width: 100%;
        padding: 5px;
        gap: 5px;
    }
`;