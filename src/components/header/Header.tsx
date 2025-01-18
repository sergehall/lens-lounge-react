import React, { useState } from "react";
import {
    HeaderContainer,
    HeaderLink,
    Logo,
    LogoContainer,
    Title,
} from "./header.styles";
import Authorization from "./authorization/Authorization";

interface HeaderProps {
    title: string;
    logoUrl: string;
    homeUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, logoUrl, homeUrl }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <HeaderContainer>
            {/* Group the LogoContainer and Title inside HeaderLink */}
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


// const Header: React.FC<HeaderProps> = ({ title, logoUrl, homeUrl }) => {
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//
//     return (
//         <HeaderContainer>
//             {/* Ensure HeaderLink only wraps logo and title */}
//             <HeaderLink href={homeUrl} aria-label="Home">
//                 <LogoContainer>
//                     <Logo src={logoUrl} alt="Site logo" />
//                 </LogoContainer>
//                 <Title>{title}</Title>
//             </HeaderLink>
//
//             {/* Place Authorization separately */}
//             <Authorization
//                 isDropdownVisible={isDropdownVisible}
//                 setIsDropdownVisible={setIsDropdownVisible}
//             />
//         </HeaderContainer>
//     );
// };
//
// export default Header;
