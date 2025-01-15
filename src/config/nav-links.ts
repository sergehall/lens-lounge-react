import {RouteManager} from "../utils/routeManager";

const SidebarPaths = RouteManager.getSidebarPaths();

export interface NavLinkProps {
    name: string;
    url: typeof SidebarPaths[keyof typeof SidebarPaths];
}

export const navLinks: NavLinkProps[] = RouteManager.getNavLinks()
