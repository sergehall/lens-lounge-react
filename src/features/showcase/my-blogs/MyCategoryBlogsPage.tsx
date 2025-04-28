import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Wrapper, Grid } from '../../category-blogs-page/categoryBlogsPage.styles';
import IntroCommunitiesTile from '../../category-blogs-page/tiles/intro-tile/IntroCommunitiesTile';
import BlogsTile from '../../category-blogs-page/tiles/blogs-tile/BlogsTile';
import CreateBlogCTATile from '../../category-blogs-page/tiles/create-blog-tile/CreateBlogCTATile';
import { RootState } from '../../../app/store';
import { getUserBlogsByCategory } from './mocks/getUserBlogsByCategory';
import {CategoryNotFound} from "./myCategoryBlogsPage.styles";

const MyCategoryBlogsPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const decodedName = decodeURIComponent(name || '');

    const profile = useSelector((state: RootState) => state.showcasePage.profile);

    const userBlogsByCategory = useMemo(() => getUserBlogsByCategory(profile.username), [profile.username]);
    const blogs = userBlogsByCategory[decodedName] || [];

    if (!name) {
        return <CategoryNotFound>Category not found</CategoryNotFound>;
    }

    if (!blogs.length) {
        return <CategoryNotFound>No blogs found in this category.</CategoryNotFound>;
    }

    return (
        <Wrapper>
            <Grid>
                <IntroCommunitiesTile />
                <CreateBlogCTATile categoryName={decodedName} />
                <BlogsTile blogs={blogs} />
            </Grid>
        </Wrapper>
    );
};

export default MyCategoryBlogsPage;
