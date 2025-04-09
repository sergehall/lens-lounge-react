import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
    HeaderContainer,
    HeaderLink,
    Logo,
    LogoContainer,
    Title,
} from "./header.styles";
import Authorization from "./authorization/Authorization";

const Header: React.FC = () => {
    const { title, logoUrl, homeUrl } = useSelector((state: RootState) => state.layoutHeader);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <HeaderContainer>
            <HeaderLink href={homeUrl} aria-label="Home">
                <LogoContainer>
                    <Logo src={logoUrl} alt="Site logo" />
                </LogoContainer>
                <Title>{title}</Title>
            </HeaderLink>
            <Authorization
                isDropdownVisible={isDropdownVisible}
                setIsDropdownVisible={setIsDropdownVisible}
            />
        </HeaderContainer>
    );
};

export default Header;