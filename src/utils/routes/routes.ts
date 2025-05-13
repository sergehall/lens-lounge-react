// src/routes/routes.ts

export const ROUTES = {
  sidebar: {
    home: '/',
    showcase: '/showcase',
    whisper: '/whisper',
    technologies: '/technologies',
    news: '/news',
    about: '/about',
    contact: '/contact',
  },
  categories: {
    root: '/categories',
    dynamic: 'categories/:name',
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
  },
  whisper: {
    root: '/whisper',
    chat: '/whisper/chat',
    chatId: '/whisper/chat/:chatId',
    contacts: '/whisper/contacts',
    contactId: '/whisper/contacts/:contactId',
  },
  showcase: {
    root: '/showcase',
    categories: '/showcase/categories',
    name: '/showcase/categories/:name',
  },
  posts: {
    root: '/posts',
    name: '/posts/:name',
  },
} as const;
