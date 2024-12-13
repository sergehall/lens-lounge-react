import styled from 'styled-components';
import theme from "./themes/theme";

export const AppContainer = styled.div`
    display: grid;
    grid-gap: ${theme.spacing.default};
    grid-template-columns: 150px 1fr; /* Sidebar is fixed at 150px */
    grid-template-areas:
        'App-header App-header'
        'App-nav App-content'
        'App-nav App-content';
    max-width: 1300px; /* Constrain overall width */
    margin: 0 auto; /* Center the container */
    box-sizing: border-box; /* Ensure padding/borders don’t affect overall size */

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'App-header'
            'App-nav'
            'App-content';
        max-width: 100%; /* Ensure it fits smaller screens */
        grid-gap: 0; /* Reduce gap for smaller layouts */
        overflow-x: hidden; /* Prevent overflow */
    }
`;

// export const AppContainer = styled.div`
//     display: grid;
//     grid-gap: ${theme.spacing.default};
//     grid-template-columns: 150px 1fr; /* Sidebar is fixed at 150px */
//     grid-template-areas:
//         'App-header App-header'
//         'App-nav App-content'
//         'App-nav App-content';
//     max-width: 1300px;
//     margin: 0 auto;
//     box-sizing: border-box;
//
//     @media (max-width: 600px) {
//         grid-template-columns: 1fr;
//         grid-template-areas:
//             'App-header'
//             'App-nav'
//             'App-content';
//         max-width: 100%; /* Ensure it fits smaller screens */
//         grid-gap: 0; /* Reduce gap for smaller layouts */
//         overflow-x: hidden; /* Prevent overflow */
//     }
// `;


export const Header = styled.header`
    grid-area: App-header;
    width: 100%; /* Use full width of the grid container */
    max-width: 1300px; /* Match AppContainer's max-width */
    margin: 0 auto; /* Center the header within the grid */
    background-color: ${theme.header.navBg};
    box-shadow: 0 4px 8px ${theme.global.transparentBorder};

    @media (max-width: 600px) {
        margin-bottom: ${theme.spacing.default};
        padding: ${theme.spacing.default};
    }
`;
export const SidebarNav = styled.nav`
    grid-area: App-nav;
    width: 100%; /* Ensure it fits within the grid */
    max-width: 1300px; /* Match AppContainer's max-width */
    margin: 0 auto; /* Center the nav within the grid */
    padding: 0; 
    background-color: ${({ theme }) => theme.header.navBg};
    border-right: 1px solid ${({ theme }) => theme.global.semiTransparentBorder};
    box-sizing: border-box; 

    @media (max-width: 600px) {
        width: 100%;
        padding: 0; 
        box-sizing: border-box; 
    }
`;


// // Styled components
// export const AppContainer = styled.div`
//     display: grid;
//     grid-gap: ${theme.spacing.default};
//     grid-template-columns: 150px 1fr; /* Sidebar is fixed at 150px */
//     grid-template-areas:
//     'App-header App-header'
//     'App-nav App-content'
//     'App-nav App-content';
//     max-width: 1300px;
//     margin: 0 auto;
//     box-sizing: border-box;
//
//     @media (max-width: 600px) {
//         grid-template-columns: 1fr;
//         grid-template-areas:
//       'App-header'
//       'App-nav'
//       'App-content';
//         max-width: 100%;
//         grid-gap: 0;
//     }
// `;

// export const Header = styled.header`
//     grid-area: App-header;
//     max-width: 1300px;
//     background-color: ${theme.header.navBg};
//     // padding: ${theme.spacing.small10};
//     box-shadow: 0 4px 8px ${theme.global.transparentBorder};
//
//     @media (max-width: 600px) {
//         margin-bottom: ${theme.spacing.default};
//         padding: ${theme.spacing.default};
//     }
// `;

// export const SidebarNav = styled.nav`
//     grid-area: App-nav;
//     width: 150px;
//     padding: 0;
//     background-color: ${({ theme }) => theme.header.navBg};
//     border-right: 1px solid ${({ theme }) => theme.global.semiTransparentBorder};
//     box-sizing: border-box;
//
//     @media (max-width: 600px) {
//         width: 100%;
//         padding: 0;
//         box-sizing: border-box;
//     }
// `;


export const ContentArea = styled.main`
    grid-area: App-content;
    width: 100%; /* Use full width of the grid container */
    max-width: 1300px; /* Match AppContainer's max-width */
    margin: 0 auto; /* Center the content within the grid */
    background-color: ${theme.content.bg};
    padding: 10px;
    box-shadow: 0 4px 8px ${theme.global.transparentBorder};
    overflow-x: hidden; /* Prevent content from exceeding bounds */

    @media (max-width: 600px) {
        padding: ${theme.spacing.default};
    }
`;
// export const ContentArea = styled.main`
//     grid-area: App-content;
//     background-color: ${theme.content.bg};
//     padding: 10px;
//     box-shadow: 0 4px 8px ${theme.global.transparentBorder};
//     width: 100%; /* Ensure it spans the full width */
//     overflow-x: hidden; /* Prevent content from exceeding bounds */
//
//     @media (max-width: 600px) {
//         padding: ${theme.spacing.default};
//     }
// `;
// export const ContentArea = styled.main`
//     grid-area: App-content;
//     background-color: ${theme.content.bg};
//     padding: 10px;
//     box-shadow: 0 4px 8px ${theme.global.transparentBorder};
//
//     @media (max-width: 600px) {
//         padding: ${theme.spacing.default};
//     }
// `;
