import React from 'react';
import styles from './my-posts.module.css';
import Post from "./post/Post";

interface PostData {
    id: string;
    title: string;
    imageUrl: string; // Instagram URL
    description: string;
    className?: string;
}

interface MyPostsProps {
    posts: PostData[];
    className?: string;
}

// Mock data
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

const MyPosts: React.FC<MyPostsProps> = ({ posts = postsDataMock, className = styles.myPostsContainer }) => {
    return (
        <div className={`${styles.myPostsContainer} ${className}`}>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    imageUrl={post.imageUrl}
                    description={post.description}
                    className={styles.postItem}
                />
            ))}
        </div>
    );
};

export default MyPosts;
