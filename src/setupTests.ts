// src/setupTests.ts
import '@testing-library/jest-dom';
import 'whatwg-fetch';

console.log('✅ setupTests.ts loaded');

// Polyfill: matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string): MediaQueryList => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),

      //  mandatory deprecated methods (so that TypeScript doesn't swear)
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
    };
  },
});
// Polyfill: scrollTo
window.scrollTo = jest.fn();

// Polyfill: IntersectionObserver
class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => []);

  constructor(_: IntersectionObserverCallback, __?: IntersectionObserverInit) {
    // Params intentionally unused
  }
}

window.IntersectionObserver = IntersectionObserverMock;

// Polyfill: global.fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

// Polyfill: global.Request
global.Request = class {
  constructor() {
    // You can extend this mock if needed
  }
} as unknown as typeof Request;

// // If you need to inspect how many times it was instantiated in a test:
// jest.mocks('./path/to/observer', () => IntersectionObserverMock);
