import React from 'react';
import {TechnologyLink} from "../../config/technology-links";

interface TechnologiesProps {
    technologies: TechnologyLink[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <div className="technologies">
            <h2>Technologies</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>
                        {tech.url ? (
                            <a href={tech.url} target="_blank" rel="noopener noreferrer">
                                {tech.name}
                            </a>
                        ) : (
                            tech.name
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Technologies;
