// src/components/sidebar/nav-links.ts

import {RouteManager} from "../../utils/routeManager";

const SidebarPaths = RouteManager.getSidebarPaths();

export interface NavLinks {
    name: string;
    url: typeof SidebarPaths[keyof typeof SidebarPaths];
}

export const navLinks: NavLinks[] = RouteManager.getNavLinks()
