// src/features/technologies/TechnologiesPage.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

import {
  TechnologyContainer,
  Title,
  TechnologyList,
  TechnologyItem,
  TechnologyLink,
  PopupWindow,
  StyledIframe,
} from './technologies.styles';
import { TechnologyLinkType } from './mocks/technologyLinksMock';

const TechnologiesPage: React.FC = () => {
  const links = useSelector((state: RootState) => state.technologiesPage.links);

  const [hoveredLink, setHoveredLink] = useState<TechnologyLinkType | null>(null);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (link: TechnologyLinkType, event: React.MouseEvent<HTMLLIElement>) => {
    setHoveredLink(link);
    setPopupPosition({
      top: event.clientY - 50,
      left: event.currentTarget.offsetLeft + 200,
    });
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <TechnologyContainer>
      <Title>Technologies</Title>
      <TechnologyList>
        {links.map((link) => (
          <TechnologyItem
            key={link.url}
            onMouseEnter={(e) => handleMouseEnter(link, e)}
            onMouseLeave={handleMouseLeave}
          >
            <TechnologyLink href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </TechnologyLink>
          </TechnologyItem>
        ))}
      </TechnologyList>

      {hoveredLink && (
        <PopupWindow
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
          }}
        >
          <h4>{hoveredLink.name}</h4>
          <p>Loading more info...</p>
          <StyledIframe src={hoveredLink.url} title="Technology Info" />
        </PopupWindow>
      )}
    </TechnologyContainer>
  );
};

export default TechnologiesPage;
