import styled from "styled-components";

export const SidebarContainer = styled.nav`
    background-color: var(--header-nav-bg);
    color: var(--link-color);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    max-width: 120px; /* Default width for larger screens */
    border-radius: 8px;
    display: flex;
    flex-direction: column; /* Stack items vertically */
    padding: 10px;

    @media (max-width: 600px) {
        max-width: 100%; /* Allow the sidebar to take full width */
        padding: 5px;
    }
`;

export const SidebarLink = styled.a`
    color: var(--link-color);
    text-decoration: none;
    padding: 12px;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden;    /* Hide overflowing text */
    text-overflow: ellipsis; /* Add ellipsis for overflowed text */
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: var(--link-hover-bg);
        color: var(--link-hover-text);
        transform: scale(1.05); /* Slight zoom effect */
    }

    &:focus {
        outline: 2px solid var(--link-hover-text);
    }

    &:visited {
        color: var(--visited-link-color);
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        font-size: 0.9rem; /* Adjust font size for smaller screens */
        padding: 8px;      /* Reduce padding */
    }
`;