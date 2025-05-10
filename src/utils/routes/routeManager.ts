// src/utils/routes/routeManager.ts

import { NavLinks } from '../../components/sidebar/nav-links';
import { ROUTES } from './routes';
import { buildPath } from './routeUtils';
import { slugify } from '../slugify';

export class RouteManager {
  // Sidebar
  public static getSidebarPaths() {
    return ROUTES.sidebar;
  }

  public static getNavLinks(): NavLinks[] {
    return Object.entries(ROUTES.sidebar).map(([key, url]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      url,
    }));
  }

  // Whisper
  public static getWhisperChatsRoot() {
    return ROUTES.whisper.chat;
  }

  public static getWhisperChatPath(chatId: string) {
    return buildPath(ROUTES.whisper.chat, chatId);
  }

  public static getWhisperChatRoutePattern() {
    return ROUTES.whisper.chatId;
  }

  public static getWhisperContactsRoot() {
    return ROUTES.whisper.contacts;
  }

  public static getWhisperContactsPath(contactId: string) {
    return buildPath(ROUTES.whisper.contacts, contactId);
  }

  public static getWhisperContactsPattern() {
    return ROUTES.whisper.contactId;
  }

  // Categories
  public static getCategoryRoutePattern() {
    return ROUTES.categories.dynamic;
  }

  public static getCategoryPathBySlug(slug: string) {
    return buildPath(ROUTES.categories.root, slug);
  }

  public static getCategoryPathByName(name: string) {
    return this.getCategoryPathBySlug(slugify(name));
  }

  // Showcase
  public static getShowcaseCategoryRoutePattern() {
    return ROUTES.showcase.name;
  }

  public static getShowcaseCategoryPathBySlug(slug: string) {
    return buildPath(ROUTES.showcase.root, slug);
  }

  // Posts
  public static getPostPath(postId: string) {
    return buildPath(ROUTES.posts.root, postId);
  }
}
