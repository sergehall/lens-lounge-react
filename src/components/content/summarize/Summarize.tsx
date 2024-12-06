import React from "react";
import styles from "./summarize.module.css";
import {
    SummarizeContainer,
    SummarizeDescription,
    SummarizeImage,
    SummarizeTextContainer,
    SummarizeTitle,
} from "./summarize.style";

export interface SummarizeProps {
    title: React.ReactNode;
    imageUrl: string;
    description: string;
    className?: string; // Made optional for flexibility
}

const Summarize: React.FC<SummarizeProps> = ({
                                                 title,
                                                 imageUrl,
                                                 description,
                                                 className = "",
                                             }) => {
    return (
        <SummarizeContainer className={`${styles.summarizeContainer} ${className}`}>
            <SummarizeImage src={imageUrl} alt="IT-Incubator Logo" />
            <SummarizeTextContainer>
                <SummarizeTitle>{title}</SummarizeTitle>
                <SummarizeDescription>{description}</SummarizeDescription>
            </SummarizeTextContainer>
        </SummarizeContainer>
    );
};

export default Summarize;
