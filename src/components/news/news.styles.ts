import styled from "styled-components";

export const NewsContainer = styled.div`
    padding: 20px;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0 4px 6px var(--transparent-border-one);
    max-width: 100%;
    margin: 0 auto; /* Center the container */
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: var(--news-primary-color);
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const Article = styled.div`
    padding: 15px;
    border-radius: 8px;
    background-color: var(--article-bg); /* Light background by default */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effects */
    box-shadow: 0 2px 4px var(--transparent-border-one);

    &:hover {
        background-color: var(--article-hover-bg); /* Darker background on hover */
        box-shadow: 0 4px 8px var(--transparent-border-two);
    }

    h3 {
        font-size: 1.5rem;
        color: var(--news-highlight-color);
        margin-bottom: 10px;
        transition: color 0.3s ease;

        &:hover {
            color: var(--hover-text-color); /* White text on hover */
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--news-text);
        transition: color 0.3s ease;

        &:hover {
            color: var(--hover-text-color); /* White text on hover */
        }
    }

    @media (max-width: 600px) {
        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;
