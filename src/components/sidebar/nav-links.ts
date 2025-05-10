import { RouteManager } from '../../utils/routes/routeManager';

type SidebarPaths = ReturnType<typeof RouteManager.getSidebarPaths>;

export interface NavLinks {
  name: string;
  url: SidebarPaths[keyof SidebarPaths];
}

export const navLinks: NavLinks[] = RouteManager.getNavLinks();
