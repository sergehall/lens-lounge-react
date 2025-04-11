// features/posts/PostCard.tsx
import React from "react";
import styled from "styled-components";
import {PostType} from "./types/postType";


interface PostCardProps {
    post: PostType;
}

const Card = styled.article`
  background-color: ${({ theme }) => theme.global.secondaryColor};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.global.transparentBorder};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.color};
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.colorLight};
  margin: 0;
`;

const Metadata = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.colorMuted};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Content = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text.color};
  margin: 0;
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Card>
            <Title>{post.title}</Title>
            <Description>{post.shortDescription}</Description>
            <Metadata>
                <span>By: {post.postOwnerId}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </Metadata>
            <Content>{post.content}</Content>
        </Card>
    );
};

export default PostCard;
