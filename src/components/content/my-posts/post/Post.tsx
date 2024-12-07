import React from 'react';
import { PostContainer, PostTitle, PostDescription } from './post.styles';
import InstagramEmbed from "../instagram--embed/Instagram-embed";

interface PostProps {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    className: string;
}

const Post: React.FC<PostProps> = ({ title, imageUrl, description, className }) => {
    return (
        <PostContainer className={className}>
            {imageUrl && (
                <InstagramEmbed url={imageUrl} title={title} />
            )}
            <PostTitle>{title}</PostTitle>
            {description && <PostDescription>{description}</PostDescription>}
        </PostContainer>
    );
};


export default Post;
