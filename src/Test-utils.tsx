// src/Test-utils.tsx

import React, { ReactElement } from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { act } from 'react';
import AppProviders from './AppProviders';

/**
 * Wraps a component with AppProviders and handles `act(...)` during render
 */
export const renderWithProviders = async (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
): Promise<RenderResult> => {
    let result!: RenderResult;

    await act(async () => {
        result = render(ui, {
            wrapper: ({ children }) => <AppProviders>{children}</AppProviders>,
            ...options,
        });
    });

    return result;
};

export * from '@testing-library/react';
