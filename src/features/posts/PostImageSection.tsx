// PostImageSection.tsx
import React from "react";
import {Image} from "./postImage-section/postImageSection.styles";

interface PostImageSectionProps {
    src: string;
    alt: string;
}

const PostImageSection: React.FC<PostImageSectionProps> = ({ src, alt }) => (
    <Image src={src} alt={alt} loading="lazy" />
);

export default PostImageSection;