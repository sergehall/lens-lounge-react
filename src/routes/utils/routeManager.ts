// src/utils/routes/routeManager.ts

import { CATEGORY_SLUGS, CategoryName, CategorySlug } from '../../config/categorySlugs';
import { ROUTES } from '../routes';

export class RouteManager {
  // Home
  public static getHomeRoot() {
    return ROUTES.home.root;
  }
  // Whisper
  public static getWhisperRoot() {
    return ROUTES.whisper.root;
  }

  public static getWhisperChatsRoot() {
    return ROUTES.whisper.chatRoot;
  }

  public static getWhisperChatPath(chatId: string) {
    return `${ROUTES.whisper.chatRoot}/${chatId}`;
  }

  public static getWhisperChatRoutePattern() {
    return ROUTES.whisper.chatId;
  }

  public static getWhisperContactsRoot() {
    return ROUTES.whisper.contactsRoot;
  }

  public static getWhisperContactsPath(contactId: string) {
    return `${ROUTES.whisper.contactsRoot}/${contactId}`;
  }

  public static getWhisperContactsRoutePattern() {
    return ROUTES.whisper.contactId;
  }

  // CategorySlugByName
  public static getCategorySlugByName(name: CategoryName): CategorySlug {
    return CATEGORY_SLUGS[name];
  }

  // Categories
  public static getCategoryPathBySlug(slug: CategorySlug): string {
    return `${ROUTES.home.categoriesRoot}/${slug}`;
  }

  public static getCategoryPathByName(name: CategoryName): string {
    return RouteManager.getCategoryPathBySlug(RouteManager.getCategorySlugByName(name));
  }

  // Showcase
  public static getShowcaseRoot() {
    return ROUTES.showcase.root;
  }

  public static getShowcaseCategoryPathBySlug(slug: CategorySlug): string {
    return `${ROUTES.showcase.category}/${slug}`;
  }

  public static getShowcaseCategoryPathByName(name: CategoryName): string {
    return RouteManager.getShowcaseCategoryPathBySlug(RouteManager.getCategorySlugByName(name));
  }

  // Posts
  public static getPostPath(postId: string) {
    return `${ROUTES.whisper.postsRoot}/${postId}`;
  }
}
