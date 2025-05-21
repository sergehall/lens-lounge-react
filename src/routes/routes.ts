// src/routes/routes.ts

import {
  ABOUT_ROUTES,
  CONTACT_ROUTES,
  HOME_ROUTES,
  NEWS_ROUTES,
  SHOWCASE_ROUTES,
  TECHNOLOGY_ROUTES,
  WHISPER_ROUTES,
} from './route-definitions';

export const ROUTES = {
  home: HOME_ROUTES,
  showcase: SHOWCASE_ROUTES,
  whisper: WHISPER_ROUTES,
  technologies: TECHNOLOGY_ROUTES,
  news: NEWS_ROUTES,
  about: ABOUT_ROUTES,
  contact: CONTACT_ROUTES,
} as const;
