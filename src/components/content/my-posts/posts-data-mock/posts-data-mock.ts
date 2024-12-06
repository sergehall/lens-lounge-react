export interface PostData {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    className?: string;
}

export const postsDataMock: PostData[] = [
    {
        id: '1',
        title: 'Post 1',
        imageUrl: 'https://www.instagram.com/p/ChV1nQlpeKh/',
        description: 'This is the description for Post 1.',
    },
    {
        id: '2',
        title: 'Post 2',
        imageUrl: 'https://www.instagram.com/p/CXM0WCyPcGH/',
        description: 'This is the description for Post 2.',
    },
    {
        id: '3',
        title: 'Post 3',
        imageUrl: 'https://www.instagram.com/p/CAJdN4Qn_ub/',
        description: 'This is the description for Post 3.',
    },
];
