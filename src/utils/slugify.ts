export const slugify = (value: string): string => {
    return value
        .toLowerCase()
        .replace(/&/g, 'and')               // Convert "&" to "and"
        .replace(/\s+/g, '-')               // Convert spaces to hyphens
        .replace(/[^a-z0-9-]/g, '')         // Remove special characters
        .replace(/-+/g, '-')                // Remove duplicate hyphens
        .replace(/^-+|-+$/g, '');           // Trim leading/trailing hyphens
};
