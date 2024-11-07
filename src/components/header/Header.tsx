import React from 'react';
import styles from './header.module.css';
import logo from '../../logo.svg';
import {HeaderContainer, Logo, Title} from "./header.styles";

interface HeaderProps {
    title: string;
    logoUrl?: string;
    homeUrl?: string;
    className?: string;
}


interface HeaderProps {
    title: string;
    logoUrl?: string;
    homeUrl?: string;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
                                           title,
                                           logoUrl = logo,
                                           homeUrl = "/",
                                           className = styles.appHeader
                                       }) => {
    return (
        <HeaderContainer className={`${styles.appHeader} ${className}`}>
            <a href={homeUrl} className={styles.appHeaderLink} aria-label="Home">
                <Logo src={logoUrl} alt="Site logo" />
                <Title>{title}</Title>
            </a>
        </HeaderContainer>
    );
};

export default Header;