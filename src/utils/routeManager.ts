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

type WhisperPaths = {
  root: 'whisper';
  [key: string]: string;
};

type ShowcasePaths = {
  root: 'showcase';
  [key: string]: string;
};

type PostsPaths = {
  root: 'posts';
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
    name: 'categories/:name',
    anime: 'user-categories/anime',
    art: 'user-categories/art',
    photography: 'user-categories/photography',
    gaming: 'user-categories/gaming',
    culture: 'user-categories/culture',
    movies: 'user-categories/movies',
    programming: 'user-categories/programming',
    'music-and-bands': 'user-categories/music-and-bands',
    science: 'user-categories/science',
    'tv-shows': 'user-categories/tv-shows',
    technology: 'user-categories/technology',
    'books-and-literature': 'user-categories/books-and-literature',
    'community-spotlight': 'user-categories/community-spotlight',
  };

  private static whisperPaths: WhisperPaths = {
    root: 'whisper',
    chat: 'whisper/chat',
    contacts: 'whisper/contacts',
  };

  private static showcasePaths: ShowcasePaths = {
    root: 'showcase',
    name: 'showcase/:name',
  };

  private static postsPaths: PostsPaths = {
    root: 'posts',
    name: 'posts/:name',
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
    return `${this.whisperPaths.chat}`;
  }

  public static getWhisperChatPath(chatId: string): string {
    return `${this.whisperPaths.chat}/${chatId}`;
  }

  public static getWhisperContactsRoot(): string {
    return `${this.whisperPaths.contacts}`;
  }

  public static getWhisperContactPath(contactId: string): string {
    return `${this.whisperPaths.contacts}/${contactId}`;
  }

  // --- Showcase Builders ---

  public static getShowcaseCategoryPathBySlug(slug: string): string {
    return `${this.showcasePaths.root}/${slug}`;
  }

  public static getShowcaseCategoryRoutePattern(): string {
    return `${this.showcasePaths.name}`;
  }

  // --- Category Builders ---

  public static getCategoryPathBySlug(slug: string): string {
    return `${this.categoryPaths.root}/${slug}`;
  }

  public static getCategoryRoutePattern(): string {
    return `${this.categoryPaths.name}`;
  }

  public static getCategoryPathByName(name: string): string {
    return this.getCategoryPathBySlug(slugify(name));
  }

  // --- Post ---

  public static getPostPath(postId: string): string {
    return `${this.postsPaths.root}/${postId}`;
  }

  // --- Sidebar Link Builder ---

  public static getNavLinks(): NavLinks[] {
    return Object.entries(this.sidebarPaths).map(([key, url]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      url,
    }));
  }
}
