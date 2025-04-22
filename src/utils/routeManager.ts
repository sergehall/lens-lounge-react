import {NavLinks} from "../components/sidebar/nav-links";


export class RouteManager {
    // Private Sidebar paths (static routes)
    private static SidebarPaths = {
        home: '/',
        showcase: '/showcase',
        whisper: '/whisper',
        technologies: '/technologies',
        news: '/news',
        about: '/about',
        contact: '/contact',
    } as const;

    // Private Nested paths (dynamic and relative routes)
    private static NestedPaths = {
        chats: 'chats',
        chatsUserId: 'chats/:userId',
        contacts: 'contacts',
        contactsUserId: 'contacts/:userId',
        blog: 'blog',
        blogBlogId: 'blog/:blogId',
        post: 'post',
        postPostId: 'post/:postId',
    } as const;

    /**
     * Expose SidebarPaths safely through a getter method.
     */
    public static getSidebarPaths(): typeof RouteManager.SidebarPaths {
        return this.SidebarPaths;
    }

    public static getNestedPaths(): typeof RouteManager.NestedPaths {
        return this.NestedPaths;
    }


    /**
     * Generates navigation links for sidebar based on SidebarPaths.
     * @returns Array of navigation links with name and URL.
     */
    public static getNavLinks(): NavLinks[] {
        return Object.entries(this.SidebarPaths).map(([key, url]) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
            url,
        }));
    }
}
