import React from 'react';
import {IntroTile} from './introCommunitiesTile.styled';
import {Icons} from '../../../../utils/icons';
import {IconWrapper} from "../../categoryPage.styles";

const IntroCommunitiesTile: React.FC = () => (
    <IntroTile>
        <IconWrapper>
            <Icons.Users size={24}/>
        </IconWrapper>
        <h3>Introducing Communities</h3>
        <p>
            Lens Lounge offers both public and private spaces where you can create personalized blogs for yourself, your
            community, and the things you're passionate about—whether it's programming, culture, K-pop, photography,
            movies, or anything else that inspires you.
        </p>
    </IntroTile>
);

export default IntroCommunitiesTile;
