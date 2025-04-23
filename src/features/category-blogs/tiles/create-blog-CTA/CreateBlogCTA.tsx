import React from 'react';
import {CTAButton, CTATile} from "./createBlogCTA.styled";
import {Icons} from "../../../../utils/icons";
import {IconWrapper} from "../../categoryPage.styles";

interface Props {
    categoryName: string;
}

const CreateBlogCTA: React.FC<Props> = ({ categoryName }) => (
    <CTATile>
        <IconWrapper>
            <Icons.Users size={24}/>
        </IconWrapper>
        <h3>Create your own blog about {categoryName}</h3>
        <p>Communities are spaces for your ideas. Get started in minutes.</p>
        <CTAButton>Create</CTAButton>
    </CTATile>
);

export default CreateBlogCTA;
