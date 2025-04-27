import React from 'react';
import {CTAButton, CTATile, IconWrapper, Wrapper} from './CreateBlogTile.styled';
import {Icons} from '../../../utils/icons';

/**
 * Renders a call-to-action tile encouraging users to create a blog
 * within a specific category (e.g., Photography, Tech, etc.)
 */
const CreateNewBlogTile: React.FC = () => {
    return (
        <Wrapper>
                <CTATile>
                    <IconWrapper>
                        <Icons.Users size={24} aria-hidden="true"/>
                    </IconWrapper>

                    {/* Headline dynamically includes the selected category */}
                    <h3>Create your own blog about</h3>

                    {/* Brief explanation to prompt user action */}
                    <p>Lens Lounge are spaces for your ideas. Get started in minutes.</p>

                    {/* Primary action button */}
                    <CTAButton aria-label={`Create a blog about`}>
                        Create
                    </CTAButton>
                </CTATile>
        </Wrapper>
    );
};

export default CreateNewBlogTile;
