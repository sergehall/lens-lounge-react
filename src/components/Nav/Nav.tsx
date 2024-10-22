import React from 'react';
import {navLinks} from "../../config/nav-links";


const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
