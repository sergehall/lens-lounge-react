// src/utils/routes/routeManager.ts

import { ROUTES } from './routes';

export class RouteManager {
  // Whisper
  public static getWhisperRoot() {
    return ROUTES.whisper.root;
  }

  public static getWhisperChatsRoot() {
    return ROUTES.whisper.chat;
  }

  public static getWhisperChatPath(chatId: string) {
    return `${ROUTES.whisper.chat}/${chatId}`;
  }

  public static getWhisperChatRoutePattern() {
    return ROUTES.whisper.chatId;
  }

  public static getWhisperContactsRoot() {
    return ROUTES.whisper.contacts;
  }

  public static getWhisperContactsPath(contactId: string) {
    return `${ROUTES.whisper.contacts}/${contactId}`;
  }

  public static getWhisperContactsPattern() {
    return ROUTES.whisper.contactId;
  }

  // Categories
  public static getCategoryRoutePattern() {
    return ROUTES.home.dynamic;
  }

  public static getCategoryPathBySlug(slug: string) {
    return `${ROUTES.home.dynamicBase}/${slug}`;
  }

  // Showcase
  public static getShowcaseRoot() {
    return ROUTES.showcase.root;
  }

  public static getShowcaseCategoryName() {
    return `${ROUTES.showcaseCategory.name}`;
  }

  public static getShowcaseCategoryPathBySlug(slug: string) {
    return `${ROUTES.showcaseCategory.root}/${slug}`;
  }

  // Posts
  public static getPostPath(postId: string) {
    return `${ROUTES.whisper.posts.root}/${postId}`;
  }
}
