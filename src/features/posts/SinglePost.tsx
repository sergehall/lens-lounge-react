import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostImageSection from "./PostImageSection";
import PostActions from "./PostActions";
import PostStats from "./post-stats/PostStats";
import PostContentBlock from "./PostContentBlock";
import PostFooter from "../PostFooter";
import {PostType} from "./types/postType";
import {PostImageType} from "./post-images/types/postImage";
import {PostWrapper} from "./post.styles";

export interface SinglePostProps {
    post: PostType;
    image: PostImageType;
}

const SinglePost: React.FC<SinglePostProps> = ({ post, image }) => {
    return (
        <PostWrapper>
            <PostHeader blogName={post.blogName} createdAt={post.createdAt} />
            <PostImageSection src={image.imageUrl} alt={post.title} />
            <PostActions postId={post.id} />
            <PostStats postId={post.id} />
            <PostContentBlock title={post.title} shortDescription={post.shortDescription} />
            <PostFooter postOwnerId={post.postOwnerId} />
        </PostWrapper>
    );
};

export default SinglePost;
