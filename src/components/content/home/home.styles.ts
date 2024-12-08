import styled from "styled-components";

// Main container for the Home component
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Removed large vertical space */
    padding: 20px 20px 40px; /* Adjust padding for content */
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
`;

// Centered Welcome Text styling
export const WelcomeText = styled.h1`
    font-size: 2rem;
    color: var(--primary-color);
    margin: 10px 0; /* Reduce default spacing */
    text-align: center;
    line-height: 1.4;

    @media (max-width: 600px) {
        font-size: 1.5rem; /* Reduce font size for smaller screens */
    }
`;

// Bottom section container for descriptions
export const BottomSection = styled.div`
    max-width: 800px; 
    text-align: left; /* Align text to the left */
    margin-top: 20px; /* Reduce spacing between sections */
    padding: 0 20px; /* Add padding for better readability */

    @media (max-width: 600px) {
        margin-top: 15px; /* Adjust spacing for smaller screens */
        padding: 0 15px; /* Reduce padding for smaller screens */
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: var(--highlight-color);
    font-weight: bold;
    text-transform: capitalize;
    transition: color 0.3s ease;

    &:hover {
        color: var(--link-hover-text);
    }

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
