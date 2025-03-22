// src/setupTests.ts

import '@testing-library/jest-dom';

//
// // ✅ Setup check
// console.log("✅ setupTests.ts loaded");

// matchMedia polyfill
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }),
});

// scrollTo polyfill
window.scrollTo = jest.fn();

// ✅ IntersectionObserver mock with correct TS signature
class IntersectionObserverMock implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];

    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    takeRecords = jest.fn(() => []);

    constructor(
        _callback: IntersectionObserverCallback,
        _options?: IntersectionObserverInit
    ) {}
}

window.IntersectionObserver = IntersectionObserverMock;

// // If you need to inspect how many times it was instantiated in a test:
// jest.mock('./path/to/observer', () => IntersectionObserverMock);