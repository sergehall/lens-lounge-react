// src/utils/RouteManager.ts
import {PageKeys} from "../config/pageKeys";

export enum ShowcaseCategory {
    Anime = "anime",
    Art = "art",
    Photography = "photography",
    Gaming = "gaming",
    Culture = "culture",
    Movies = "movies",
    Programming = "programming",
    Funny = "funny",
    MusicBands = "music-bands",
    Science = "science",
    TVShows = "tv-shows",
    Technology = "technology",
    Books = "books-literature",
    Community = "community-spotlight"
}

export const RouteManager = {
    // Стартовая навигация по PageKeys
    getPath: (key: PageKeys): string =>
        key === PageKeys.Home ? "/" : `/${key}`,

    // Стартовые sidebar пути
    sidebarPaths: {
        [PageKeys.Home]: "/",
        [PageKeys.Showcase]: "/showcase",
        [PageKeys.WhisperDialogs]: "/whisper",
        [PageKeys.WhisperContacts]: "/whisper",
        [PageKeys.Technologies]: "/technologies",
        [PageKeys.News]: "/news",
        [PageKeys.About]: "/about",
        [PageKeys.Contact]: "/contact",
    },

    // General category route
    getCategoryRoutePattern: () => "/category/:categoryId",

    // Showcase dynamic pattern
    getShowcaseCategoryRoutePattern: () => "/showcase/category/:categoryId",

    // Showcase helpers
    getShowcaseCategoryPath: (category: ShowcaseCategory) => `/showcase/category/${category}`,
    getShowcaseCategoryDetailPath: (category: ShowcaseCategory, itemId: string) =>
        `/showcase/category/${category}/${itemId}`,

    // Nested routes (whisper)
    nested: {
        chats: "/whisper/chat",
        chatsUserId: "/whisper/chat/:userId",
        contacts: "/whisper/contacts",
        contactsUserId: "/whisper/contacts/:userId",
    },
};
