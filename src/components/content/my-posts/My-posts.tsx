import React from 'react';
import styles from './my-posts.module.css';
import { PostData, postsDataMock } from './posts-data-mock/posts-data-mock';
import Post from './post/Post';

interface MyPostsProps {
    posts: PostData[];
    className?: string;
}

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

export { postsDataMock }; // Re-export if needed
export default MyPosts;
