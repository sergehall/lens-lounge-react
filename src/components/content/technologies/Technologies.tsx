import React from "react";
import {
    TechnologyContainer,
    Title,
    TechnologyList,
    TechnologyItem,
    TechnologyLink,
} from "./technologies.styles";
import { TechnologyLink as TechnologyLinkType } from "../../../config/technology-links";

interface TechnologiesProps {
    links: TechnologyLinkType[]; // Array of technology links
    className?: string; // Optional className for styling flexibility
}

const Technologies: React.FC<TechnologiesProps> = ({ links, className = "" }) => {
    return (
        <TechnologyContainer className={className}>
            <Title>Technologies</Title>
            <TechnologyList>
                {links.map((link) => (
                    <TechnologyItem key={link.url}>
                        <TechnologyLink
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </TechnologyLink>
                    </TechnologyItem>
                ))}
            </TechnologyList>
        </TechnologyContainer>
    );
};

export default Technologies;
