import styled from "styled-components";

export const ImageBannerContentContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageBannerContentImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
`;

export const ImageBannerTextWrapper = styled.div`
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for the element's size */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--header-nav-bg);
    text-align: center;
    padding: 20px;
    z-index: 2; /* Ensure text is on top of the image */
    pointer-events: none; /* Allow interactions to pass through to the image */
`;

export const ImageBannerContentTitle = styled.h2`
    font-size: 1.8em;
    margin: 0 0 10px;
    color: #ffffff; /* White text for better contrast */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow for better readability */

    @media (max-width: 600px) {
        font-size: 1.5em;
    }
`;

export const ImageBannerContentDescription = styled.p`
    font-size: 1.2em;
    margin: 0;
    color: #ffffff; /* White text for better contrast */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow for better readability */

    @media (max-width: 600px) {
        font-size: 1em;
    }
`;
