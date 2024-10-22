import React from 'react';

interface NavProps {
    links: { name: string; url: string }[];
}

const Nav: React.FC<NavProps> = ({  links }) => {
    return (
        <nav className="App-nav">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
