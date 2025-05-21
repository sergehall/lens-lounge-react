// src/routes/route-definitions/showcase.routes.ts

export const SHOWCASE_ROUTES = {
  root: '/showcase',
  category: '/showcase/category',
  categoryByName: '/showcase/category/:name',
} as const;
