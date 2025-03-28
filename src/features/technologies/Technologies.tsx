import React, { useState } from "react";
import {
    TechnologyContainer,
    Title,
    TechnologyList,
    TechnologyItem,
    TechnologyLink, PopupWindow, StyledIframe,
} from "./technologies.styles";
import { TechnologyLinkType } from "./types/technologyLinks";
import {ClassNames} from "../../config/types/classNames.enum";

interface TechnologiesProps {
    links: TechnologyLinkType[];
    className: ClassNames.TECHNOLOGIES;
}

const Technologies: React.FC<TechnologiesProps> = ({ links, className }) => {
    const [hoveredLink, setHoveredLink] = useState<TechnologyLinkType | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    });

    const handleMouseEnter = (
        link: TechnologyLinkType,
        event: React.MouseEvent<HTMLLIElement>
    ) => {
        setHoveredLink(link);
        setPopupPosition({
            top: event.clientY - 50, // Adjusts to appear where the mouse hovers
            left: event.currentTarget.offsetLeft + 200, // Adjust horizontally
        });
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <TechnologyContainer className={className}>
            <Title>Technologies</Title>
            <TechnologyList>
                {links.map((link) => (
                    <TechnologyItem
                        key={link.url}
                        onMouseEnter={(e) => handleMouseEnter(link, e)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <TechnologyLink
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </TechnologyLink>
                    </TechnologyItem>
                ))}
            </TechnologyList>

            {/* Popup Window */}
            {hoveredLink && (
                <PopupWindow style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}>
                    <h4>{hoveredLink.name}</h4>
                    <p>Loading more info...</p>
                    <StyledIframe
                        src={hoveredLink.url}
                        title="Technology Info"
                    />
                </PopupWindow>
            )}
        </TechnologyContainer>
    );
};

export default Technologies;