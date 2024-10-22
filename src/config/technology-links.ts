export interface TechnologyLink {
    name: string;
    url?: string; // Optional URL to documentation or more info
}

export const techLinks: TechnologyLink[] = [
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'NestJS', url: 'https://nestjs.com/' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/' }
];