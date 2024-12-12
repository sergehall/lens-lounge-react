import React from "react";
import {HeaderContainer, HeaderLink, Logo, LogoContainer, Title} from "./header.styles";
import Authorization from "./authorization/Authorization";

interface HeaderProps {
    title: string;
    logoUrl: string;
    homeUrl: string;
}

const Header: React.FC<HeaderProps> = ({title, logoUrl, homeUrl}) => {
    return (
        <HeaderContainer>
            <HeaderLink href={homeUrl} aria-label="Home">
                <LogoContainer>
                    <Logo src={logoUrl} alt="Site logo"/>
                </LogoContainer>
                <Title>{title}</Title>
            </HeaderLink>
            <Authorization/>
        </HeaderContainer>
    );
};

export default Header;