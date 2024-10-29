import React from 'react';
import logo from '../../logo.svg';

interface HeaderProps {
    title: string;
    logoUrl?: string;
    homeUrl?: string;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, logoUrl = logo, homeUrl = "/", className = "" }) => {
    return (
        <header className={`App-header ${className}`}>
            <a href={homeUrl} className="App-header-link" aria-label="Home">
                <img src={logoUrl} className="App-logo" alt="Site logo" />
                <h1 className="App-title">{title}</h1>
            </a>
        </header>
    );
};

export default Header;
