import React from 'react';
import logo from '../../logo.svg';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="App-header">
            <a href="/" className="App-header-link"> {/* Link to the homepage */}
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{title}</h1>
            </a>
        </header>
    );
};

export default Header;
