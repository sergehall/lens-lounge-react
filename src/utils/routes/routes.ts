// src/routes/routes.ts

export const ROUTES = {
  home: {
    root: '/',
    dynamicBase: '/categories',
    dynamic: 'categories/:name',
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
  },
  showcase: {
    root: '/showcase',
  },
  showcaseCategory: {
    root: '/showcase/category',
    name: '/showcase/category/:name',
  },
  whisper: {
    root: '/whisper',
    chat: 'whisper/chat',
    chatId: 'whisper/chat/:chatId',
    contacts: 'whisper/contacts',
    contactId: 'whisper/contacts/:contactId',
    posts: {
      root: '/whisper/posts',
      postId: 'whisper/post/:postId',
    },
  },
  technologies: {
    root: '/technologies',
    name: 'technologies/:name',
  },
  news: {
    root: '/news',
    name: 'news/:name',
  },
  about: {
    root: '/about',
    name: 'about/:name',
  },
  contact: {
    root: '/contact',
    name: 'contact/:name',
  },
} as const;
