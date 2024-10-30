// src/components/Content/Content.tsx

import React from 'react';
import styles from './content.module.css';
import {ContentContainer, ContentImage, ContentTitle, ContentDescription} from "./content.style";

interface ContentProps {
    title: string;
    imageUrl?: string;
    description?: string;
    className?: string;
}

const Content: React.FC<ContentProps> = ({
                                             title,
                                             imageUrl,
                                             description,
                                             className = styles.contentContainer
                                         }) => {
    return (
        <ContentContainer className={`${styles.contentContainer} ${className}`}>
            {imageUrl && <ContentImage src={imageUrl} alt={`${title} image`} />}
            <ContentTitle>{title}</ContentTitle>
            {description && <ContentDescription>{description}</ContentDescription>}
        </ContentContainer>
    );
};

export default Content;
