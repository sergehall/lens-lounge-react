// Testing library utilities for rendering and querying DOM nodes
import { render, screen, within, act } from '@testing-library/react';

// Application-level providers and components
import AppProviders from '../AppProviders';
import App from '../App';

// Route manager used to verify expected sidebar links
import { RouteManager } from '../utils/routes/routeManager';

// Custom helper for rendering components wrapped in context providers
import { renderWithProviders } from '../Test-utils';

// Silence console.error to prevent noisy logs (e.g., from fetchBaseQuery during tests)
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

// Suite for testing App rendering with AppProviders (sync)
describe('<App /> (with AppProviders)', () => {
  const renderApp = () =>
    render(
      <AppProviders>
        <App />
      </AppProviders>
    );

  // Sanity check to ensure the app mounts without crashing
  test('renders without crashing', () => {
    renderApp();
  });

  // Verifies main layout sections exist (header, sidebar, content)
  test('renders layout sections', () => {
    renderApp();

    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('app-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('app-content')).toBeInTheDocument();
  });

  // Loops through all sidebar links and checks their presence and href
  test('renders all sidebar links', () => {
    renderApp();

    const sidebar = screen.getByTestId('app-sidebar');

    RouteManager.getNavLinks().forEach((link) => {
      console.log(`🔍 Checking: ${link.name} (${link.url})`);
      const element = within(sidebar).getByText(new RegExp(link.name, 'i'));
      expect(element.closest('a')).toHaveAttribute('href', link.url);
    });
  });
});

// Suite for testing with async helper to mimic real app environment
describe('<App /> (async render)', () => {
  test('renders without crashing (with async renderWithProviders)', async () => {
    // Wrap the rendering inside `act()` to ensure any state updates are properly handled.
    await act(async () => {
      await renderWithProviders(<App />);
    });
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });
});
