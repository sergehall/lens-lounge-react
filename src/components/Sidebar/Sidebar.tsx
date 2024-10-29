import React from 'react';

interface NavProps {
    links: { name: string; url: string }[];
    className: string;
}

const Sidebar: React.FC<NavProps> = ({ links, className = "App-nav" }) => {
    return (
        <nav className={`App-nav ${className}`} aria-label="Main Navigation">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
