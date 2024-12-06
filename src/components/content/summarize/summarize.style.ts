import styled from 'styled-components';

export const SummarizeContainer = styled.div`
    display: flex;
    align-items: flex-start; /* Align items to the top */
    padding: 10px;
    margin-bottom: 5px;
    max-width: 100%;
    background-color: var(--content-bg);
    color: var(--header-nav-bg);
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: row; /* Keep text container on the right */
        align-items: center; /* Vertically align content */
        text-align: left;
    }
`;

export const SummarizeImage = styled.img`
    width: 80px; /* Fixed size for all screen sizes */
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    background-color: var(--it-incubator-logo-bg);
    margin-right: 15px; /* Add space between the image and text content */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        width: 80px; /* Keep the same size on smaller screens */
        height: 80px;
        margin-right: 10px; /* Ensure consistent spacing */
    }
`;

export const SummarizeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; /* Add spacing between title and description */
    flex: 1; /* Take up the remaining space next to the image */

    @media (max-width: 600px) {
        align-items: flex-start; /* Keep alignment consistent with the image */
        text-align: left;
    }
`;

export const SummarizeTitle = styled.h2`
    font-size: 1.5em;
    margin: 0;
    color: var(--header-nav-bg);
    text-align: left;

    @media (max-width: 600px) {
        font-size: 1.2em; /* Adjust font size for smaller screens */
    }
`;

export const SummarizeDescription = styled.p`
    font-size: 1em;
    color: var(--link-hover-bg);
    margin: 0;
    text-align: left;

    @media (max-width: 600px) {
        font-size: 0.9em; /* Adjust font size for smaller screens */
    }
`;
