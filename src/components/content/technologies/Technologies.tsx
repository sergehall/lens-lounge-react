import React from "react";
import { TechnologyContainer } from "./technologies.styles";
import styles from "./technologies.module.css";
import {TechnologyLink} from "../../../config/technology-links";

interface TechnologiesProps {
    links: TechnologyLink[]; // Array of technology links
    className: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ links, className = "" }) => {
    return (
        <TechnologyContainer className={`${styles.Technologies} ${className}`}>
            <h3>Technologies</h3>
            <ul>
                {links.map((link) => (
                    <li key={link.url} className={styles.technologyItem}>
                        <a
                            href={link.url} // External link
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security for external links
                            className={styles.link}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </TechnologyContainer>
    );
};

export default Technologies;
