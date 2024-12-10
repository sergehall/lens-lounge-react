import styled from "styled-components";

// Main container for the About section
export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--background-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--transparent-border);
`;

// Title styling
export const Title = styled.h1`
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

// Paragraph styling
export const Paragraph = styled.p`
    font-size: 1.2rem;
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
    max-width: 800px;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

// Highlighted text styling
export const Highlight = styled.span`
    color: var(--highlight-color-white);
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: var(--link-hover-text);
    }
`;

// Link styling
export const Link = styled.a`
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-hover-text);
    text-decoration: underline;
  }
`;
