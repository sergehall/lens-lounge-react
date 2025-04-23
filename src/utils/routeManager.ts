import { NavLinks } from "../components/sidebar/nav-links";
import { slugify } from "./slugify";

export class RouteManager {
    // === Static Sidebar Navigation Routes ===
    private static SidebarPaths = {
        home: '/',
        showcase: '/showcase',
        whisper: '/whisper',
        technologies: '/technologies',
        news: '/news',
        about: '/about',
        contact: '/contact',
    } as const;

    // === Category-Specific Nested Routes ===
    private static NestedCategoryPaths = {
        root: 'categories',
        anime: 'categories/anime',
        art: 'categories/art',
        photography: 'categories/photography',
        gaming: 'categories/gaming',
        culture: 'categories/culture',
        movies: 'categories/movies',
        programming: 'categories/programming',
        'music-and-bands': 'categories/music-and-bands',
        science: 'categories/science',
        'tv-shows': 'categories/tv-shows',
        technology: 'categories/technology',
        'books-and-literature': 'categories/books-and-literature',
        'community-and-spotlight': 'categories/community-and-spotlight',
    } as const;

    // === Functional App Routes (e.g. Chats, Blog) ===
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

    // === Public Accessors ===
    public static getSidebarPaths(): typeof RouteManager.SidebarPaths {
        return this.SidebarPaths;
    }

    public static getCategoryPaths(): typeof RouteManager.NestedCategoryPaths {
        return this.NestedCategoryPaths;
    }

    public static getNestedPaths(): typeof RouteManager.NestedPaths {
        return this.NestedPaths;
    }

    // === Category Routing Helpers ===

    /**
     * Gets a full category route path by slugified category name.
     * Falls back to dynamic string-based path if no predefined match is found.
     */
    public static getCategoryPathBySlug(slug: string): string {
        const categoryPaths = this.getCategoryPaths();
        if (Object.prototype.hasOwnProperty.call(categoryPaths, slug)) {
            return (categoryPaths as Record<string, string>)[slug];
        }
        return `${categoryPaths.root}/${slug}`;
    }

    public static getCategoryRoutePattern(): string {
        return `${this.NestedCategoryPaths.root}/:name`;
    }

    /**
     * Gets a full path from a category name by slugifying and resolving.
     */
    public static getCategoryPathByName(name: string): string {
        const slug = slugify(name);
        return this.getCategoryPathBySlug(slug);
    }

    // === Sidebar Nav Link Generator ===
    public static getNavLinks(): NavLinks[] {
        return Object.entries(this.SidebarPaths).map(([key, url]) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            url,
        }));
    }
}
