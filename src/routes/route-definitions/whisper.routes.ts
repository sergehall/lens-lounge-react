// src/routes/route-definitions/whisper.routes.ts

export const WHISPER_ROUTES = {
  root: '/whisper',
  chatRoot: '/whisper/chat',
  chatId: '/whisper/chat/:chatId',
  contactsRoot: '/whisper/contacts',
  contactId: '/whisper/contacts/:contactId',
  postsRoot: '/whisper/posts',
  postId: '/whisper/post/:postId',
} as const;
