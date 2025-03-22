// src/__tests__/App.test.tsx

import {render, screen, within} from '@testing-library/react';
import AppProviders from "../AppProviders";
import App from "../App";
import {RouteManager} from "../utils/routeManager";


describe('<App /> (with AppProviders)', () => {
    const renderApp = () =>
        render(
            <AppProviders>
                <App/>
            </AppProviders>
        );

    test('renders without crashing', () => {
        renderApp();
    });

    test('renders layout sections', () => {
        renderApp();

        expect(screen.getByTestId('app-header')).toBeInTheDocument();
        expect(screen.getByTestId('app-sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('app-content')).toBeInTheDocument();
    });

    test('renders all sidebar links', () => {
        renderApp();

        const sidebar = screen.getByTestId('app-sidebar');

        RouteManager.getNavLinks().forEach(link => {
            console.log(`🔍 Checking: ${link.name} (${link.url})`);
            const element = within(sidebar).getByText(new RegExp(link.name, 'i'));
            expect(element.closest('a')).toHaveAttribute('href', link.url);
        });
    });
});
