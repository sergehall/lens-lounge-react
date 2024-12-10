import styled from "styled-components";

export const TechnologyContainer = styled.div`
    padding: 20px;
    color: var(--header-nav-bg);
    text-align: start;
    background-color: var(--content-bg);
    border-radius: 8px;
    box-shadow: 0 4px 6px var( --transparent-border-one);
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 600px) {
        padding: 15px;
    }
`;
