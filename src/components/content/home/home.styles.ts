import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 100%; 
    margin: 0 auto; 
    text-align: center; 

    @media (max-width: 600px) {
        padding: 15px; /* Adjust padding for smaller screens */
    }
`;

export const WelcomeText = styled.h1`
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 10px;
    text-align: center; /* Explicit text alignment for clarity */
    line-height: 1.4; /* Improved readability */

    @media (max-width: 600px) {
        font-size: 1.5rem; /* Reduce font size for smaller screens */
    }
`;

export const Highlight = styled.span`
    color: var(--highlight-color);
    font-weight: bold;
    text-decoration: underline;
    text-transform: capitalize; /* Ensure consistent capitalization */
    cursor: default; /* Indicate non-interactive nature */
    transition: color 0.3s ease; /* Smooth color transition */

    &:hover {
        color: var(--link-hover-text); /* Optional: Add hover effect */
    }

    @media (max-width: 600px) {
        font-size: 1rem; /* Adjust highlight font size for smaller screens */
    }
`;
