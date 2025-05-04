import { NavLinks } from '../components/sidebar/nav-links';

import { slugify } from './slugify';

type SidebarPaths = {
  home: '/';
  showcase: '/showcase';
  whisper: '/whisper';
  technologies: '/technologies';
  news: '/news';
  about: '/about';
  contact: '/contact';
};

type CategoryPaths = {
  root: 'categories';
  [key: string]: string;
};

export class RouteManager {
  private static sidebarPaths: SidebarPaths = {
    home: '/',
    showcase: '/showcase',
    whisper: '/whisper',
    technologies: '/technologies',
    news: '/news',
    about: '/about',
    contact: '/contact',
  };

  private static categoryPaths: CategoryPaths = {
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
    'community-spotlight': 'categories/community-spotlight',
  };

  // --- Public Accessors ---

  public static getSidebarPaths(): SidebarPaths {
    return this.sidebarPaths;
  }

  public static getCategoryPaths(): CategoryPaths {
    return this.categoryPaths;
  }

  // --- Whisper Paths (chat, contacts) ---

  public static getWhisperChatsRoot(): string {
    return '/whisper/chat';
  }

  public static getWhisperChatPath(chatId: string): string {
    return `/whisper/chat/${chatId}`;
  }

  public static getWhisperContactsRoot(): string {
    return '/whisper/contacts';
  }

  public static getWhisperContactPath(contactId: string): string {
    return `/whisper/contacts/${contactId}`;
  }

  // --- Category Builders ---

  public static getCategoryPathBySlug(slug: string): string {
    const paths = this.getCategoryPaths();
    return paths[slug] || `${paths.root}/${slug}`;
  }

  public static getCategoryRoutePattern(): string {
    return `${this.categoryPaths.root}/:name`;
  }

  public static getCategoryPathByName(name: string): string {
    return this.getCategoryPathBySlug(slugify(name));
  }

  // --- Showcase Builders ---

  public static getShowcaseCategoryPathBySlug(slug: string): string {
    return `/showcase/${slug}`;
  }

  public static getShowcaseCategoryRoutePattern(): string {
    return 'showcase/:name';
  }

  // --- Post ---

  public static getPostPath(postId: string): string {
    return `/post/${postId}`;
  }

  // --- Sidebar Link Builder ---

  public static getNavLinks(): NavLinks[] {
    return Object.entries(this.sidebarPaths).map(([key, url]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      url,
    }));
  }
}
