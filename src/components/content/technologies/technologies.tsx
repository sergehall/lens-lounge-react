// src/components/Technologies/Technologies.tsx

import React from 'react';
import styles from './technologies.module.css';
import { TechnologiesContainer, TechnologyTitle, TechnologyList, TechnologyItem, TechnologyLink } from './technologies.styles';

interface Technology {
    name: string;
    url: string;
}

interface TechnologiesProps {
    technologies: Technology[];
    className: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies, className }) => {
    return (
        <TechnologiesContainer className={`${styles.Technologies} ${className}`}>
            <TechnologyTitle>Technologies</TechnologyTitle>
            <TechnologyList>
                {technologies.map((tech, index) => (
                    <TechnologyItem key={index}>
                        <TechnologyLink href={tech.url} target="_blank" rel="noopener noreferrer">
                            {tech.name}
                        </TechnologyLink>
                    </TechnologyItem>
                ))}
            </TechnologyList>
        </TechnologiesContainer>
    );
};

export default Technologies;
