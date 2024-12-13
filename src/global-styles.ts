import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', 'Arial', sans-serif; 
        color: #333333; /* High contrast dark gray for readability */
        background-color: #FFFFFF; /* Ensure high contrast with white background */
        line-height: 1.8; /* Improve readability with comfortable line spacing */
    }
`;

export default GlobalStyles;
