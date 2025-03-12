// Mock data for news articles
export interface NewArticles {
    id: number;
    title: string;
    content: string;
    link: string;
}


export const newArticlesMock: NewArticles[] = [
    {
        id: 1,
        title: "It-incubator.io: Full-stack Solutions",
        content: "It-incubator specializes in both frontend and backend development, offering cutting-edge solutions tailored to modern web applications. Their expertise spans a variety of technologies, including JavaScript frameworks, database management, and deployment strategies.",
        link: "https://it-incubator.io/news",
    },
    {
        id: 2,
        title: "Breaking News: React is Awesome!",
        content: "React, the popular JavaScript library for building user interfaces, continues to dominate in 2024 with new content and optimizations. Developers praise its versatility, rich ecosystem, and strong community support, making it a go-to choice for both startups and large enterprises.",
        link: "https://reactjs.org",
    },
    {
        id: 3,
        title: "Styled Components: Best Practices",
        content: "Discover how to harness the full power of styled-components for writing modular, maintainable CSS in JavaScript. This article explores advanced techniques, performance considerations, and tips to improve your development workflow when using styled-components.",
        link: "https://styled-components.com",
    },
    {
        id: 4,
        title: "CSS Modules vs Styled Components",
        content: "Choosing between CSS Modules and styled-components can be challenging. This comprehensive guide dives into their pros and cons, use cases, and how each approach can impact your project's scalability, performance, and developer experience.",
        link: "https://css-tricks.com",
    },
];
