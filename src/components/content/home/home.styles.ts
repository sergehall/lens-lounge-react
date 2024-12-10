import styled from "styled-components";

// Main container for the Home component
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 20px 40px;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0 4px 6px var( --transparent-border-one);
    margin: 0 auto;
`;

// Welcome text styling
export const WelcomeText = styled.h1`
    font-size: 2rem;
    color: var(--primary-color);
    margin: 10px 0;
    text-align: center;
    line-height: 1.4;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: var(--highlight-color-yellow);
    font-weight: bold;
    text-transform: capitalize;
    transition: color 0.3s ease;

    &:hover {
        color: var(--link-hover-text);
    }
`;

// Bottom section container for descriptions
export const BottomSection = styled.div`
    max-width: 800px;
    text-align: left;
    margin-top: 20px;
    padding: 0 20px;

    @media (max-width: 600px) {
        margin-top: 15px;
        padding: 0 15px;
    }
`;

// General description text styling
export const Description = styled.p`
    color: var(--text-color);
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 15px 0;
`;

// Navigation item highlight (link) styling
export const NavItemHighlight = styled.a`
    color: var(--highlight-color-white);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: var(--highlight-color-yellow);
        text-decoration: underline;
    }
`;