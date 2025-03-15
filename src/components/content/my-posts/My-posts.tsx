import React from 'react';
import { MyPostsContainer } from './my-posts.style';
import Post, {PostProps} from './post/Post';
import {ClassNames} from "../../../config/types/class-names.enum";

interface MyPostsProps {
    posts: PostProps[];
    className: ClassNames.MY_POSTS;
}

const MyPosts: React.FC<MyPostsProps> = ({ posts, className }) => {
    return (
        <MyPostsContainer className={className}>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    imageUrl={post.imageUrl}
                    description={post.description}
                />
            ))}
        </MyPostsContainer>
    );
};

export default MyPosts;
