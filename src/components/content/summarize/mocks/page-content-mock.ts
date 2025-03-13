// **Strict Page Keys Using `as const`**
export const PageKeys = {
    home: "home",
    showcase: "showcase",
    chats: "chats",
    contacts: "contacts",
    news: "news",
    technologies: "technologies",
    about: "about",
    contact: "contact",
} as const;

// **Type Extractor for PageKeys**
export type PageKey = typeof PageKeys[keyof typeof PageKeys];

// **Page Content Mapping Using Strict Keys**
export const pageContentMock: Record<PageKey, { pageContent: string }> = {
    [PageKeys.home]: {
        pageContent: "Welcome to Lens Lounge! Discover new ideas, connect with people, and explore the latest trends in technology and creativity.",
    },
    [PageKeys.showcase]: {
        pageContent: "Step into the showcase section to display your best work, projects, and innovations. Share your journey with the world.",
    },
    [PageKeys.chats]: {
        pageContent: "Stay connected with real-time messaging. Engage in meaningful conversations, share media, and interact with your community.",
    },
    [PageKeys.contacts]: {
        pageContent: "Manage your network effortlessly. View, add, and engage with friends, colleagues, and new connections.",
    },
    [PageKeys.news]: {
        pageContent: "Get the latest updates on world events, industry news, and community highlights. Stay informed with real-time reports.",
    },
    [PageKeys.technologies]: {
        pageContent: "Explore the future of technology! From AI and blockchain to quantum computing, dive deep into the latest innovations shaping the world.",
    },
    [PageKeys.about]: {
        pageContent: "Learn more about Lens Lounge—our vision, mission, and values. Discover how we are building a community of innovators.",
    },
    [PageKeys.contact]: {
        pageContent: "Have questions or feedback? Reach out to us! Our support team is ready to assist you with any inquiries.",
    },
};
