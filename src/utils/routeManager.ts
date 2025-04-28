import { NavLinks } from "../components/sidebar/nav-links";
import { slugify } from "./slugify";

type SidebarPaths = {
    home: "/";
    showcase: "/showcase";
    whisper: "/whisper";
    technologies: "/technologies";
    news: "/news";
    about: "/about";
    contact: "/contact";
};

type CategoryPaths = {
    root: "categories";
    [key: string]: string; // Allow dynamic category paths too
};

type NestedPaths = {
    chats: "chats";
    chatsUserId: "chats/:userId";
    contacts: "contacts";
    contactsUserId: "contacts/:userId";
    blog: "blog";
    blogBlogId: "blog/:blogId";
    post: "post";
    postPostId: "posts-slider/:postId";
};

export class RouteManager {
    private static sidebarPaths: SidebarPaths = {
        home: "/",
        showcase: "/showcase",
        whisper: "/whisper",
        technologies: "/technologies",
        news: "/news",
        about: "/about",
        contact: "/contact",
    };

    private static nestedCategoryPaths: CategoryPaths = {
        root: "categories",
        anime: "categories/anime",
        art: "categories/art",
        photography: "categories/photography",
        gaming: "categories/gaming",
        culture: "categories/culture",
        movies: "categories/movies",
        programming: "categories/programming",
        "music-and-bands": "categories/music-and-bands",
        science: "categories/science",
        "tv-shows": "categories/tv-shows",
        technology: "categories/technology",
        "books-and-literature": "categories/books-and-literature",
        "community-and-spotlight": "categories/community-and-spotlight",
    };

    private static nestedPaths: NestedPaths = {
        chats: "chats",
        chatsUserId: "chats/:userId",
        contacts: "contacts",
        contactsUserId: "contacts/:userId",
        blog: "blog",
        blogBlogId: "blog/:blogId",
        post: "post",
        postPostId: "posts-slider/:postId",
    };

    // --- Public Accessors ---

    public static getSidebarPaths(): SidebarPaths {
        return this.sidebarPaths;
    }

    public static getCategoryPaths(): CategoryPaths {
        return this.nestedCategoryPaths;
    }

    public static getNestedPaths(): NestedPaths {
        return this.nestedPaths;
    }

    // --- Category URL Builders ---

    public static getCategoryPathBySlug(slug: string): string {
        const paths = this.getCategoryPaths();
        return paths[slug] || `${paths.root}/${slug}`;
    }

    public static getCategoryRoutePattern(): string {
        return `${this.nestedCategoryPaths.root}/:name`;
    }

    public static getCategoryPathByName(name: string): string {
        return this.getCategoryPathBySlug(slugify(name));
    }

    // --- Showcase My Categories URL Builders ---

    public static getShowcaseCategoryPathBySlug(slug: string): string {
        return `/showcase/${slug}`;
    }

    public static getShowcaseCategoryRoutePattern(): string {
        return `showcase/:name`;
    }

    // --- Sidebar Link Builder ---

    public static getNavLinks(): NavLinks[] {
        return Object.entries(this.sidebarPaths).map(([key, url]) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            url,
        }));
    }
}