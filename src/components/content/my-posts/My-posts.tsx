import React from 'react';
import { MyPostsContainer } from './my-posts.style';
import {postsDataMock } from './mocks/posts-data-mock';
import Post, {PostProps} from './post/Post';

interface MyPostsProps {
    posts: PostProps[];
    className?: string;
}

const MyPosts: React.FC<MyPostsProps> = ({ posts = postsDataMock, className }) => {
    return (
        <MyPostsContainer className={className}>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    imageUrl={post.imageUrl}
                    description={post.description}
                    className=""
                />
            ))}
        </MyPostsContainer>
    );
};

export default MyPosts;
