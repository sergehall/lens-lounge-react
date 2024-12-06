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
    className?: string;
}

const Summarize: React.FC<SummarizeProps> = ({
                                                 title,
                                                 imageUrl,
                                                 description,
                                                 className = styles.summarizeContainer,
                                             }) => {
    return (
        <SummarizeContainer>
            <SummarizeImage src={imageUrl} alt="IT-Incubator Logo" />
            <SummarizeTextContainer>
                <SummarizeTitle>{title}</SummarizeTitle>
                <SummarizeDescription>{description}</SummarizeDescription>
            </SummarizeTextContainer>
        </SummarizeContainer>
    );
};

export default Summarize;
