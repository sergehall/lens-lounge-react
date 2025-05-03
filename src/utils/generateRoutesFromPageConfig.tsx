// src/utils/generateRoutesFromPageConfig.ts
import React, {ReactElement} from "react";
import { Route } from "react-router-dom";
import LayoutWrapper from "../layouts/LayoutWrapper";
import { PageConfig } from "../config/PageConfig";

/**
 * Recursively generate <Route /> elements from pageConfig,
 * optionally wrapping elements with a provided wrapper (e.g. PrivateRoute)
 */
export const generateRoutesFromPageConfig = (
    configMap: Record<string, PageConfig>,
    parentPath = "",
    wrapper?: (element: ReactElement) => ReactElement
): React.ReactNode[] => {
    return Object.entries(configMap).map(([key, config]) => {
        const path =
            parentPath + (key === "home" && parentPath === "" ? "/" : `/${key}`);

        const element = (
            <LayoutWrapper pageConfig={config}>
                <config.component />
            </LayoutWrapper>
        );

        const wrappedElement = wrapper ? wrapper(element) : element;

        const childrenRoutes = config.children
            ? generateRoutesFromPageConfig(config.children, `${path}`, wrapper)
            : undefined;

        return (
            <Route key={path} path={path} element={wrappedElement}>
                {childrenRoutes}
            </Route>
        );
    });
};

/**
 * Splits the config into protected/public route configs based on isProtected flag
 */
export const splitProtectedRoutes = (
    configMap: Record<string, PageConfig>
) => {
    const protectedConfig: Record<string, PageConfig> = {};
    const publicConfig: Record<string, PageConfig> = {};

    Object.entries(configMap).forEach(([key, config]) => {
        if (config.isProtected) {
            protectedConfig[key] = config;
        } else {
            publicConfig[key] = config;
        }
    });

    return { protectedConfig, publicConfig };
};


