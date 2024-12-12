import styled from 'styled-components';
import theme from "./themes/theme";


// Styled components
export const AppContainer = styled.div`
    display: grid;
    grid-gap: ${theme.spacing.default};
    grid-template-columns: 150px 1fr; /* Sidebar is fixed at 150px */
    grid-template-areas:
    'App-header App-header'
    'App-nav App-content'
    'App-nav App-content';
    max-width: 1300px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-areas:
      'App-header'
      'App-nav'
      'App-content';
        max-width: 100%;
        grid-gap: 0;
    }
`;

export const Header = styled.header`
    grid-area: App-header;
    max-width: 1300px;
    background-color: ${theme.header.navBg};
    padding: ${theme.spacing.medium20};
    box-shadow: 0 4px 8px ${theme.global.transparentBorder};

    @media (max-width: 600px) {
        margin-bottom: ${theme.spacing.default};
        padding: ${theme.spacing.default};
    }
`;

export const SidebarNav = styled.nav`
    grid-area: App-nav;
    width: 150px;
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

export const ContentArea = styled.main`
    grid-area: App-content;
    background-color: ${theme.content.bg};
    padding: 10px;
    box-shadow: 0 4px 8px ${theme.global.transparentBorder};

    @media (max-width: 600px) {
        padding: ${theme.spacing.default};
    }
`;
