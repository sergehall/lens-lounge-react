import React from "react";
import { HeaderContainer, Logo, Title, HeaderLink } from "./header.styles";

interface HeaderProps {
    title: string;
    logoUrl: string;
    homeUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, logoUrl, homeUrl }) => {
    return (
        <HeaderContainer>
            <HeaderLink href={homeUrl} aria-label="Home">
                <Logo src={logoUrl} alt="Site logo" />
                <Title>{title}</Title>
            </HeaderLink>
        </HeaderContainer>
    );
};

export default Header;
