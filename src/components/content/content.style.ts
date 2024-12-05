import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 10px; 
    }
`;

export const ContentImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 5px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 600px) {
        max-width: 100%; /* Stretch image to fill the screen width */
    }
`;

export const ContentTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 5px;
    color: var(--header-nav-bg);
    text-align: center;
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box; /* Include padding and border in width calculations */

    @media (max-width: 600px) {
        font-size: 1.2em; /* Adjust font size for smaller screens */
    }
`;

export const ContentDescription = styled.p`
    font-size: 1em;
    color: var(--link-hover-bg);
    text-align: center;
    width: 100%; /* Ensure the description spans the full width */
    max-width: 100%; /* Prevent overflow */
    box-sizing: border-box; /* Include padding and border in width calculations */

    @media (max-width: 600px) {
        font-size: 0.9em; /* Adjust font size for smaller screens */
    }
`;
