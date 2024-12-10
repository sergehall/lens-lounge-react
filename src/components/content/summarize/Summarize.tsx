import React from "react";
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
    altText?: string;
}

const Summarize: React.FC<SummarizeProps> = ({
                                                 title,
                                                 imageUrl,
                                                 description,
                                                 className = "",
                                                 altText = "Summarize Image", // Default alt text
                                             }) => {
    return (
        <SummarizeContainer className={className}>
            <SummarizeImage src={imageUrl} alt={altText} />
            <SummarizeTextContainer>
                <SummarizeTitle>{title}</SummarizeTitle>
                <SummarizeDescription>{description}</SummarizeDescription>
            </SummarizeTextContainer>
        </SummarizeContainer>
    );
};

export default Summarize;
