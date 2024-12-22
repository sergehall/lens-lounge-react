import React from 'react';
import { PostContainer, PostTitle, PostDescription } from './post.styles';
import InstagramEmbed from "../instagram--embed/Instagram-embed";


// Update PostProps interface
export interface PostProps {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
}


const Post: React.FC<PostProps> = ({ title, imageUrl, description }) => {
    return (
        <PostContainer>
            {imageUrl && <InstagramEmbed url={imageUrl} title={title} />}
            <PostTitle>{title}</PostTitle>
            {description && <PostDescription>{description}</PostDescription>}
        </PostContainer>
    );
};

export default Post;
