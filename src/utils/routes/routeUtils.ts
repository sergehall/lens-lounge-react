export const buildPath = (base: string, slugOrId?: string) =>
  slugOrId ? `${base}/${slugOrId}` : base;
