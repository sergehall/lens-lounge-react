import {BlogPreview} from "../categoryBlogsSlice";

export const mockCategoryBlogs: Record<string, BlogPreview[]> = {
    photography: [
        {
            id: '1',
            title: 'Fantasy & DnD Art',
            summary: 'For fantasy-inspired illustrators and painters',
            imageUrl: 'https://images.unsplash.com/photo-1620921701674-b7802c877042',
            tags: ['fantasy', 'dnd'],
            author: 'artlover22',
            lastPosted: '1 hour ago',
        },
        {
            id: '2',
            title: 'Art History Academy',
            summary: 'A place to share your favorite paintings 🖼️',
            imageUrl: 'https://images.unsplash.com/photo-1512299285653-b8b21f1b2a2f',
            tags: ['art history', 'classical'],
            author: 'historybuff',
            lastPosted: '3 hours ago',
        },
    ],
};
